import {
  IoIosSearch,
  IoMdTrendingUp,
  FaRegUser,
  IoIosAddCircleOutline,
  MdOutlineEdit,
} from "../icons";
export default function profile() {
  return (
    <div className="w-[90%] md:pl-52  text-white flex flex-col md:justify-start  md:items-start items-center  h-full md:py-14 py-4 pb-20 md:pb-0 md:gap-2 gap-4">
      {/* profile wrapper */}
      <div className="w-full flex  justify-start md:items-start items-center">
        {/* latest container */}
        <div className="flex flex-col md:item-start item-center  justify-center self-start md:w-[10%] w-full">
          <p className="border-2 rounded-full mx-auto border-[#6EEB83] w-10 md:mx-3"></p>
          <h3
            className="text-xl w-full md:text-start text-center"
            style={{ fontFamily: "Lexend Deca, sans-serif" }}
          >
            Profile
          </h3>
        </div>
      </div>

      {/* horizontal line */}
      <p className="w-[90%] mx-auto md:mx-0 border-2 border-[#6EEB83] rounded-full"></p>

      {/* profile content */}
      <div
        className=" w-full py-1 pb-7"
        style={{ fontFamily: "Lexend Deca, sans-serif" }}
      >
        <form className=" w-full flex md:flex-row flex-col-reverse justify-between gap-4 md:gap-0">
          {/* left section */}
          <div className="flex flex-col gap-4 md:w-1/2 w-full">
            {/* name */}
            <div className="flex flex-col">
              <label className="text-center md:text-start" htmlFor="name">
                Name
              </label>
              <input
                className="outline-none bg-transparent text-center md:text-start border-2 border-[#6EEB83]  py-4 px-6 text-[#A5A5A5]"
                type="text"
                name="name"
                id="name"
                placeholder="Lokesh Ghosh"
              />
            </div>

            {/* email */}
            <div className="flex flex-col">
              <label className="text-center md:text-start" htmlFor="email">
                Email
              </label>
              <input
                className="outline-none bg-transparent text-center md:text-start border-2 border-[#6EEB83]  py-4 px-6 text-[#A5A5A5]"
                type="text"
                name="email"
                id="email"
                placeholder="ghoshlokesh@example.com"
              />
            </div>

            {/* username */}
            <div className="flex flex-col ">
              <label className="text-center md:text-start" htmlFor="username">
                Username
              </label>
              <input
                className="outline-none bg-transparent border-2 border-[#6EEB83] text-center md:text-start  py-4 px-6 text-[#A5A5A5]"
                type="text"
                name="username"
                id="username"
                placeholder="@lokeshghosh323"
              />
            </div>

            {/* update button */}
            <input
              className="bg-[#6EEB83] text-black font-bold py-4 px-6 mt-10"
              type="submit"
              value="Update Profile"
            />
            <input
              className="bg-[#FF5E5B] text-black font-bold py-4 px-6"
              type="submit"
              value="Delete Account"
            />
          </div>

          {/* right section */}
          <div className="flex flex-col gap-4 md:w-1/3 w-full  justify-center md:justify-start md:items-start items-center ">
            <div className="flex flex-col ">
              <label
                className="md:text-start text-center"
                htmlFor="profile-img"
              >
                Profile Picture
              </label>
              {/* circle */}
              <div className="border-4 border-[#6EEB83] rounded-full md:w-[210px] w-[150px] h-[150px] md:h-[210px] ml-3">
                <img
                  className="w-full h-full rounded-full p-[0.4px]"
                  src="https://ik.imagekit.io/8fgpvoiai/profile/out._Vt6Gk9Ia-p.jpg?updatedAt=1700229684772"
                  alt="profile-img"
                />
              </div>
              <div className="relative -top-14 md:left-5 left-3">
                <label
                  htmlFor="profile-img"
                  className="bg-[#6EEB83]  flex justify-center items-center text-black text-xl md:text-2xl rounded-full  md:h-[44px] h-[35px] w-[35px] md:w-[44px] absolute top-0 left-0"
                >
                  <MdOutlineEdit />
                </label>
                <input
                  className="hidden"
                  type="file"
                  name="profile-img"
                  id="profile-img"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
