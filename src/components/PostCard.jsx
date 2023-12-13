import { Link } from "react-router-dom";
import { HashTags } from "./index";
import { Fragment, useEffect } from "react";
import { ID } from "appwrite";
import parse from "html-react-parser";

export default function PostCard({
  $id,
  title,
  $createdAt,
  content,
  userName,
  hashTags,
}) {
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
  return (
    <div className="md:w-[90%]  w-[100%] py-5 mb-5  md:h-[250px] flex md:flex-row flex-col-reverse md:gap-6 gap-12 justify-end md:justify-start">
      {/* meta data */}
      <div
        className=" md:h-full   md:w-[5%] w-full px-2 md:px-0 flex md:flex-col flex-row md:items-end justify-between md:justify-start items-center "
        style={{ fontFamily: "Lexend Deca, sans-serif" }}
      >
        {/* date container */}
        <div className=" md:w-full w-1/2  md:text-2xl text-lg font-bold gap-2 md:gap-0 flex md:flex-col md:justify-center items-end">
          <h2>
            {new Date($createdAt).getDate() < 10
              ? "0" + new Date($createdAt).getDate()
              : new Date($createdAt).getDate()}
          </h2>
          <h2>{months[new Date($createdAt).getMonth()]}</h2>
        </div>

        {/* username container */}
        <h1 className=" md:h-28 md:w-24 flex md:-rotate-90 text-slate-300 hover:text-slate-500 items-end justify-center">
          <Link to={`/user-posts/${userName}`}>
          {userName}
          </Link>
        </h1>
      </div>

      {/* content */}
      <div className="md:h-full  md:w-[80%] w-[90%] mx-auto md:mx-0 flex flex-col  gap-4 text-center md:text-start ">
        <h1
          className="md:text-2xl text-lg text-[#6EEB83] not-italic font-400"
          style={{ fontFamily: "DM Serif Display, sans-serif" }}
        >
          {title}
        </h1>

        {/* content lower section */}
        <div className="w-full flex flex-col gap-5">
          {/* para section */}
          <div
            className="md:text-lg  text-sm inline"
            style={{ fontFamily: "Lexend Deca, sans-serif" }}
          >
            {parse(content.slice(0, 200))}
            {/* {parse(content)} */}
            <Link to={`/post/${$id}`}>
              <h4 className="inline text-[#6EEB83] cursor-pointer">
                ...read more
              </h4>
            </Link>
          </div>

          {/* hastag section */}
          <div className="w-full h-12  flex flex-wrap gap-4 justify-center items-center md:justify-start ">
            {hashTags &&
              hashTags.split(" ").map((tag) => (
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
  );
}
