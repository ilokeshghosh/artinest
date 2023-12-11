import {
  IoIosSearch,
  IoMdTrendingUp,
  FaRegUser,
  IoIosAddCircleOutline,
  MdOutlineEdit,
  BiSearchAlt,
} from "../icons";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Container, Button, Input, PostCard } from "./index";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../store/postSlice";

export default function Search() {
  const { searchText } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [resultPosts, setResultPosts] = useState([]);
  const posts = useSelector((state) => state.post.posts);
  const { register, handleSubmit, getValues, setValue } = useForm();
  useEffect(() => {
    try {
      const localData = localStorage.getItem("posts");
      if (localData) {
        const parsedData = JSON.parse(localData);
        if (parsedData) {
          dispatch(setPosts(parsedData));
        }
      }
    } catch (error) {
      dispatch(updateStatus({ text: error.message, error: true }));
      setTimeout(() => {
        dispatch(clearStatus());
      }, 3000);
    }
  }, []);

  const submit = (data) => {
    let result = new Set();
    if ({ ...data }.text) {
      const arr = { ...data }.text.split(" ");

      arr.forEach((value) => {
        if (value.charAt(0) === "#") {
          for (let i = 0; i < posts.length; i++) {
            const hashTagsArray = posts[i].hashTags.split(" ");

            // loop on hashTagsArray
            for (let j = 0; j < hashTagsArray.length; j++) {
              if (value === hashTagsArray[j]) {
                result.add(posts[i]);
                setResultPosts([...result]);
                // console.log("test", posts[i]);
              }
            }
          }
          if (result.size === 0) {
            result.clear();
            setResultPosts((prev) => []);
          }
        }
      });
    } else if ({ ...data }.text === "") {
      setResultPosts((prev) => []);
    }
  };

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  return (
    <Container className="md:pl-8 md:py-2">
      {/* wrapper */}
      <div className="w-[100%] flex flex-col justify-center items-center">
        <div className="w-full    relative flex justify-center items-center mb-5">
          <form onSubmit={handleSubmit(submit)} className="w-full">
            <button
              className="text-[#6EEB83] md:text-3xl text-xl absolute top-3 right-8"
              type="submit"
            >
              <BiSearchAlt />
            </button>
            <Input
              className="px-9 py-2 w-full outline-none text-[#A5A5A5] md:text-xl text-lg border-2 border-[#6EEB83] rounded-full bg-transparent "
              name="search"
              placeholder="Search By HashTags like '#html'"
              {...register("text", { required: false })}
            // onInput={(e)=>{
            //   setResultPosts(prevResultPosts =>[''])
            // }}
            />
          </form>
        </div>

        {/* horizontal line */}
        <p className="w-[97%]  mx-auto md:mx-0 border-2 border-[#A5A5A5]  rounded-full"></p>

        {/* lower section */}
        <div className="md:w-[90%]  w-full flex flex-col items-start md:mt-4 md:gap-16 gap-14 mb-10">
          {/* card 1 */}
          {resultPosts &&
            resultPosts.map((post) => (
              <div
                className="flex flex-col items-start gap-2 w-full"
                key={post.$id}
              >
                {/* title and meta data */}
                <div className="w-full flex flex-col items-start justify-start ">
                  <h1
                    className="md:text-4xl text-center md:text-start text-lg text-[#6EEB83] not-italic font-400"
                    style={{ fontFamily: "DM Serif Display, sans-serif" }}
                  >
                    <Link to={`/post/${post.$id}`}>{post.title}</Link>
                  </h1>

                  {/* metadata */}
                  <div
                    className="w-full"
                    style={{ fontFamily: "Lexend Deca, sans-serif" }}
                  >
                    <h3 className="text-[#A5A5A5] text-center md:text-start text-xs md:text-base">
                      written by {post.userName} on{" "}
                      {new Date(post.$createdAt).getDate() < 10
                        ? "0" + new Date(post.$createdAt).getDate()
                        : new Date(post.$createdAt).getDate()}{" "}
                      {months[new Date(post.$createdAt).getMonth()]}{" "}
                      {new Date(post.$createdAt).getFullYear()}
                    </h3>
                  </div>
                </div>

                {/* hastag section */}
                <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                  {post.hashTags &&
                    post.hashTags.split(" ").map((tag) => (
                      <button
                        key={tag}
                        className="border  border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center"
                      >
                        {tag}
                      </button>
                    ))}
                
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}
