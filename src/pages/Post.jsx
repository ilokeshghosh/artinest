import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { setPosts } from "../store/postSlice";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse, { domToReact } from "html-react-parser";
import React, { useEffect } from "react";
import {
  FaEdit,
  MdOutlineDeleteForever,
  CiShare2,
  BsClipboard2Check,
} from "../icons";
import { updateStatus, clearStatus } from "../store/statusSlice";

export default function Post() {
  const [post, setPost] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const posts = useSelector((state) => state.post.posts);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        dispatch(setPosts(posts.documents));
        localStorage.setItem("posts", JSON.stringify(posts.documents));
      }
    });
  }, []);

  useEffect(() => {
    if (slug) {
      const currentPost = posts.find((post) => post.$id === slug);
      setPost(currentPost);
    } else {
      dispatch(updateStatus({ text: "Post Not Found", error: true }));
      setTimeout(() => {
        dispatch(clearStatus());
      }, 3000);
      navigate("/");
    }
  }, [slug, navigate, posts]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        dispatch(updateStatus({ text: "Post Deleted", error: false }));
        setTimeout(() => {
          dispatch(clearStatus());
        }, 3000);
        navigate("/");
      }
    });
  };

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

  const handleShare = (slug) => {
    const dummyInput = document.createElement("input");
    dummyInput.value = `https://artinest.netlify.app/guest/post/${slug}`;
    document.body.appendChild(dummyInput);
    dummyInput.select();
    document.execCommand("copy");

    document.body.removeChild(dummyInput);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return post ? (
    <Container>
      <div className="overflow-y-auto no-scrollbar py-1 gap-20 md:gap-0 w-full flex flex-col md:flex-row md:justify-between justify-start">
        {/* left section */}
        <div className="xl:w-3/4 w-full ">
          {/* meta data and title */}
          <div className="flex flex-col justify-center md:items-start items-center gap-2 mb-5">
            {/* title and button */}
            <div className=" w-full flex xl:flex-row xl:gap-0 gap-4 flex-col justify-between">
              {" "}
              <h1
                className="text-[#6EEB83] text-4xl text-center md:text-start"
                style={{ fontFamily: "DM Serif Display, sans-serif" }}
              >
                {post.title}
              </h1>
              {/* button section */}
              <div className="flex justify-center items-center xl:w-[10%] w-full">
                <Button
                  className="text-[#6EEB83] text-3xl  py-0 px-0 flex justify-center items-center gap-1"
                  onClick={() => handleShare(slug)}
                >
                  {isCopied ? (
                    <>
                      <BsClipboard2Check />
                      <span className="text-base text-white font-bold">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <CiShare2 />
                      <span className="text-base text-white font-bold">
                        Share
                      </span>
                    </>
                  )}{" "}
                </Button>

                {isAuthor && (
                  <>
                    {" "}
                    <Link to={`/edit-post/${post.$id}`}>
                      <Button className="text-[#6EEB83] text-3xl  py-0 px-0 flex justify-center items-center gap-2">
                        <FaEdit />{" "}
                        <span className="text-base text-white font-bold">
                          Edit
                        </span>
                      </Button>
                    </Link>
                    <Button
                      className="text-[#FF5E5B] text-4xl  py-0 px-0 flex justify-center items-center gap-1"
                      onClick={deletePost}
                    >
                      <MdOutlineDeleteForever />{" "}
                      <span className="text-base text-white font-bold">
                        Delete
                      </span>
                    </Button>
                  </>
                )}
              </div>
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


        {/* //! Not Used */}
        {/* right section not used*/}
        <div
          className="md:w-52 w-full relative hidden"
          style={{ fontFamily: "Lexend Deca, sans-serif" }}
        >
          <div className="border absolute right-10 flex left-0 h-full">
            <Button
              className="text-[#6EEB83] text-3xl  py-0 px-0 flex justify-center items-center gap-1"
              onClick={() => handleShare(slug)}
            >
              {isCopied ? (
                <>
                  <BsClipboard2Check />
                  <span className="text-base text-white font-bold">Copied</span>
                </>
              ) : (
                <>
                  <CiShare2 />
                  <span className="text-base text-white font-bold">Share</span>
                </>
              )}{" "}
            </Button>
            {isAuthor && (
              <div className="flex md:gap-2 gap-5 items-center md:justify-end justify-center border">
                <div className="flex justify-end items-center  w-[5%]">
                  <Link to={`/edit-post/${post.$id}`}>
                    <Button className="text-[#6EEB83] text-3xl  py-0 px-0 flex justify-center items-center gap-2">
                      <FaEdit />{" "}
                      <span className="text-base text-white font-bold">
                        Edit
                      </span>
                    </Button>
                  </Link>
                </div>

                <Button
                  className="text-[#FF5E5B] text-4xl  py-0 px-0 flex justify-center items-center gap-1"
                  onClick={deletePost}
                >
                  <MdOutlineDeleteForever />{" "}
                  <span className="text-base text-white font-bold">Delete</span>
                </Button>
              </div>
            )}
          </div>
        </div>


      </div>
    </Container>
  ) : null;
}
