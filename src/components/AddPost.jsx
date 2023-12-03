import {
  IoIosSearch,
  IoMdTrendingUp,
  FaRegUser,
  IoIosAddCircleOutline,
} from "../icons";
export default function AddPost() {
  return (
    // wrapper
    <div className="w-full h-screen  flex md:flex-row flex-col-reverse justify-between items-center   bg-[#272727]">
      {/* nav bar */}
      <div className="md:w-[6%] z-10  flex fixed  backdrop-blur-2xl md:backdrop-blur-0 bottom-1   w-[90%] md:h-screen h-[20px] md:border-r-2 border-2 md:border-0 border-[#6EEB83] text-white  md:flex-col flex-row items-center justify-between py-10 px-2 ">
        {/* logo */}
        <div className="w-full md:inline-block hidden">
          <img
            src="https://ik.imagekit.io/8fgpvoiai/artinest/artinest-logo_zEoxudr28k.png?updatedAt=1701426547541itial-scale=1.0"
            alt="artinest-logo"
          />
        </div>

        {/* profile icon and nav content*/}
        <ul className="w-full flex md:pr-0 pr-5  md:flex-col flex-row md:justify-center justify-evenly items-center md:gap-6 gap-2 ">
          <li className="w-full flex justify-center items-center">
            <FaRegUser className="text-[#6EEB83] text-4xl " />
          </li>
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosSearch className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>search</h3>
          </li>
          <li className="w-full flex flex-col justify-center items-center">
            <IoMdTrendingUp className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>trending</h3>
          </li>
        </ul>

        {/* create  */}
        <ul className="md:w-full w-[30%] md:pr-0 pr-5">
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosAddCircleOutline className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>create</h3>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="w-[90%] md:pl-52   text-white flex flex-col md:justify-start  md:items-start items-center  h-full md:py-14 py-4 pb-20 md:pb-0 md:gap-10 gap-8">
        {/* form */}
        <form
          className="w-full flex flex-col md:flex-row gap-4 "
          style={{ fontFamily: "Lexend Deca, sans-serif" }}
        >
          {/* left section */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            {/* title input */}
            <input
              className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5]"
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
            />

            {/* slug */}
            <input
              className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5]"
              type="text"
              name="slug"
              id="slug"
              placeholder="Slug"
            />

            {/*  text editor */}
            <input
              className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5]"
              type="text"
              name="content"
              id="content"
              placeholder="Will  TinyMCE RTE Later"
            />
          </div>

          {/* right section */}
          <div className="md:w-[30%] w-full flex flex-col gap-4">
            {/* file input */}
            <input
              className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5]"
              type="file"
              name="file"
              id="file"
              placeholder="Choose File"
            />

            {/* status input */}
            <select
              className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5]"
              name=""
              id=""
            >
              <option className="text-black" value="active">
                Active
              </option>
              <option className="text-black" value="unactive">
                unActive
              </option>
            </select>

            {/* submit */}
            <input
              className="w-full py-4 bg-[#6EEB83] font-bold  text-black text-xl"
              type="submit"
              value="Add Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
