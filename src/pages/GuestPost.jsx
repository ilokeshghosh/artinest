import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import React, { useEffect } from "react";
import { useState } from "react";
import { setPosts } from "../store/postSlice";
import { Button, Container } from "../components";
import parse, { domToReact } from "html-react-parser";
export default function GuestPost() {
  const posts = useSelector((state) => state.post.posts);
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
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
      console.log(currentPost);
      setPost(currentPost);
    } else {
      dispatch(updateStatus({ text: "Post Not Found", error: true }));
      setTimeout(() => {
        dispatch(clearStatus());
      }, 3000);
      navigate("/");
    }
  }, [slug, navigate, posts]);

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
  return post ? (
    <div className="bg-[#272727]  text-white w-full   md:py-20 py-2 pb-4 flex justify-center items-center ">
      <div className="gap-20 md:gap-0  w-[95%] md:w-[70%]  flex flex-col md:flex-row  md:justify-between items-center justify-start">
        {/* post content section */}
        <div className="w-full no-scrollbar overflow-y-auto    flex flex-col justify-center ">
          {/* meta data and title */}
          <div className="flex flex-col justify-center md:items-start items-center gap-2 mb-5 ">
            <h1
              className="text-[#6EEB83] text-4xl text-center md:text-start"
              style={{ fontFamily: "DM Serif Display, sans-serif" }}
            >
              {post.title}
            </h1>

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
      </div>
    </div>
  ) : (
    <Container className="bg-[#272727] no-scrollbar overflow-y-auto md:justify-center md:items-center  w-full  md:pl-0 pb-0 py-0">
      <div
        className="gap-20 md:gap-10 w-[100%] text-center flex flex-col   md:justify-between items-center justify-start  font-bold "
        style={{ fontFamily: "Lexend Deca, sans-serif" }}
      >
        <h1 className="text-[#FF5E5B] text-3xl">🚧💀 Post not Found ☠️🚧</h1>
        <Link to={"https://artinest.netlify.app/login"}>
          <Button className="border border-[#6EEB83] text-xl text-[#6EEB83]">
            Back To Origin
          </Button>
        </Link>
      </div>
    </Container>
  );
}
