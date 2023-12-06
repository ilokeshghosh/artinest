// import appwriteService from "../appwrite/config";

import { Link } from "react-router-dom";
import { HashTags } from "./index";
import { Fragment } from "react";
import { ID} from "appwrite";

export default function PostCard({
  $id,
  title,
  // date,
  // month,
  // userName,
  content,
  // hashTags,
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="md:w-[90%] w-[95%] py-5 md:h-[300px] flex md:flex-row flex-col-reverse md:gap-6 gap-2 ">
        {/* meta data */}
        <div
          className=" md:h-full   md:w-[5%] w-full px-2 md:px-0 flex md:flex-col flex-row md:items-end justify-between md:justify-start items-center "
          style={{ fontFamily: "Lexend Deca, sans-serif" }}
        >
          {/* date container */}
          <div className=" md:w-full w-1/2  md:text-2xl text-lg font-bold gap-2 md:gap-0 flex md:flex-col md:justify-center items-end">
            <h2>27</h2>
            <h2>MAY</h2>
          </div>

          {/* username container */}
          <h1 className=" md:h-32 md:w-32 flex md:-rotate-90 items-end justify-center">
            @lokesh43
          </h1>
        </div>

        {/* content */}
        <div className="h-full md:w-[80%] w-[90%] mx-auto md:mx-0 flex flex-col  gap-4 text-center md:text-start">
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
              className="md:text-lg  text-sm"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              <h4 className="inline">{content}</h4>
              <h4 className="inline text-[#6EEB83] cursor-pointer">
                ...read more
              </h4>
            </div>

            {/* hastag section */}
            <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
              {
                // hashTags.map(tag=>(
                //     <Fragment key={ID.unique()}>
                //         <HashTags tag={tag}/>
                //     </Fragment>
                // ))
              }
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
