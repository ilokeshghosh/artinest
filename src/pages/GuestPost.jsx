import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import React, { useEffect } from "react";
import { useState } from "react";
import { LuBellRing } from "../icons";
import { setPosts } from "../store/postSlice";
import { Button, Container } from "../components";
import parse, { domToReact } from "html-react-parser";
import { updateStatus, clearStatus } from "../store/statusSlice";
export default function GuestPost() {
  const posts = useSelector((state) => state.post.posts);
  const [loading, setloading] = useState(true);
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // error
  const errorStatus = useSelector((state) => state.status.status);
  const error = useSelector((state) => state.status.error);
  const text = useSelector((state) => state.status.text);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        dispatch(setPosts(posts.documents));
        localStorage.setItem("posts", JSON.stringify(posts.documents));
        setloading(false);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (slug) {
      const currentPost = posts.find((post) => post.$id === slug);
      if (currentPost) {
        setPost(currentPost);
      } else {
        // setloading(false); // Set loading to false when post is not found
        // dispatch(updateStatus({ text: "Post Not Found", error: true }));
        // setTimeout(() => {
        //   dispatch(clearStatus());
        // }, 3000);
      }
    } else {
      setloading(false);
      dispatch(updateStatus({ text: "Post Not Found", error: true }));
      setTimeout(() => {
        dispatch(clearStatus());
      }, 3000);
      // navigate("/");
    }
  }, [slug, navigate, posts, dispatch]);

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const customReplace = (node, index, nodes) => {
    if (node.type === "tag") {
      // Check if the tag is a heading tag (h1, h2, h3, etc.) even with inline styles
      if (node.name.match(/^h[1-6]$/i)) {
        // If it's a heading tag or a paragraph with the specific style, treat it as a heading
        const level = node.name === "p" ? 1 : parseInt(node.name.charAt(1), 10); // Extract heading level
        const style = { color: "#6EEB83", fontSize: `${20 + level}px` }; // Add style for the color
        return React.createElement(
          `h${level}`,
          { style },
          domToReact(node.children, customReplace)
        );
      } else if (node.name === "p") {
        return <p>{domToReact(node.children, customReplace)}</p>;
      }
    }
  };
  return loading ? (
    <>
      <div className="loader-div">
        <span className="loader">
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
      </div>
    </>
  ) : post ? (
    <div className="bg-[#272727] text-white w-full   md:py-20 py-2 pb-4 flex justify-center items-center ">
      <div className="gap-20 md:gap-0  w-[95%] md:w-[70%]  flex flex-col md:flex-row  md:justify-between items-center justify-start">
        {/* post content section */}
        <div className="w-full no-scrollbar overflow-y-auto    flex flex-col justify-center ">
          {/* meta data and title */}
          <div className="flex flex-col justify-center md:items-start items-center gap-2 mb-5 ">
            <div className="w-full flex justify-between items-center gap-2 xl:flex-row flex-col">
              <h1
                className="text-[#6EEB83] text-4xl text-center md:text-start"
                style={{ fontFamily: "DM Serif Display, sans-serif" }}
              >
                {post.title}
              </h1>

              <Link to={"https://artinest.netlify.app/login"}>
                <Button className="border border-[#6EEB83] md:text-xl text-[#6EEB83] mx-auto">
                  Claim This Post
                </Button>
              </Link>
            </div>

            {/* metadata */}
            <div style={{ fontFamily: "Lexend Deca, sans-serif" }}>
              <h3 className="text-[#A5A5A5] text-center md:text-start ">
                written by{" "}
                <Link
                  to={`/user-posts/${post.userName}`}
                  className="text-slate-300 hover:text-[#A5A5A5]"
                >
                  {post.userName}
                </Link>
              </h3>
              <h3 className="text-[#A5A5A5] text-center md:text-start">
                on{" "}
                {new Date({ ...post }.$createdAt).getDate() < 10
                  ? "0" + new Date({ ...post }.$createdAt).getDate()
                  : new Date({ ...post }.$createdAt).getDate()}{" "}
                {months[new Date({ ...post }.$createdAt).getMonth()]}{" "}
                {new Date({ ...post }.$createdAt).getFullYear()}
              </h3>
            </div>
          </div>

          {/* notification section */}
          {errorStatus && (
            <div className=" relative -top-10 right-0 ">
              <div
                className={`${
                  error ? "bg-[#FF5E5B]" : "bg-[#6EEB83]"
                }  flex items-center gap-[5rem] justify-between px-4 py-2`}
              >
                {/* text */}
                <div className="flex flex-col justify-center items-start w-[90%]">
                  <h3
                    className=""
                    style={{ fontFamily: "Lexend Deca, sans-serif" }}
                  >
                    {error ? "FAILED" : "SUCCESS"}
                  </h3>
                  <h3
                    className="w-full"
                    style={{ fontFamily: "Lexend Deca, sans-serif" }}
                  >
                    {text}
                  </h3>
                </div>
                <LuBellRing className="text-3xl w-[10%]" />
              </div>
            </div>
          )}

          {/* blog content */}
          <div
            className="w-full h-auto pb-6 md:text-start text-center browser-css"
            style={{ fontFamily: "Lexend Deca, sans-serif" }}
          >
            {/* {parse(post.content)} */}
            {parse(post.content, { replace: customReplace })}
          </div>

          {/* hash tags */}
          <div className="w-full h-12  flex flex-wrap gap-4 justify-center items-center md:justify-start">
            {post.hashTags.split(" ").map((tag) => (
              <button
                key={tag}
                className="border  border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-[#272727] h-screen  no-scrollbar overflow-y-auto flex md:justify-center md:items-center  w-full  md:pl-0 pb-0 py-0">
      <div
        className="gap-20  md:gap-10 w-[100%] text-center flex flex-col   md:justify-between items-center justify-start  font-bold "
        style={{ fontFamily: "Lexend Deca, sans-serif" }}
      >
        <h1 className="text-[#FF5E5B] text-3xl">🚧💀 Post not Found ☠️🚧</h1>
        <Link to={"https://artinest.netlify.app/login"}>
          <Button className="border border-[#6EEB83] text-xl text-[#6EEB83]">
            Back To Origin
          </Button>
        </Link>
      </div>
    </div>
  );
}
