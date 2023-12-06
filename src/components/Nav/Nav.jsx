import { Link, useNavigate } from "react-router-dom";
import {
  IoIosSearch,
  IoMdTrendingUp,
  FaRegUser,
  IoIosAddCircleOutline,
  LuHome,LuSearch,LuUser
} from "../../icons";
import { useSelector } from "react-redux";
import { LogoutBtn } from "../";
export default function Nav() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  return (
    <div className="md:w-[6%]  z-10  flex fixed  backdrop-blur-2xl md:backdrop-blur-0 bottom-1   w-[90%] md:h-screen h-[20px] md:border-r-2 border-2 md:border-0 border-[#6EEB83] text-white  md:flex-col flex-row items-center justify-between py-10 px-2 gap-2">
      {/* logo */}
      <div className="w-full md:inline-block hidden ">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/8fgpvoiai/artinest/artinest-logo_zEoxudr28k.png?updatedAt=1701426547541itial-scale=1.0"
            alt="artinest-logo"
          />
        </Link>
      </div>

      {/* profile icon and nav content*/}
      <ul className="w-full flex md:pr-0 pr-5  md:flex-col flex-row md:justify-center justify-evenly items-center md:gap-6 gap-4 ">

        {/* profile */}
        <Link to="/">
          <li className="w-full flex flex-col justify-center items-center">
            <LuHome  className="text-[#6EEB83] text-2xl md:text-4xl " />
            <h3 className="text-sm md:text-base" style={{ fontFamily: "Lexend Deca, sans-serif" }}>Home</h3>
          </li>
        </Link>


        {/* profile */}
        <Link to="/profile">
          <li className="w-full flex flex-col justify-center items-center">
            <LuUser className="text-[#6EEB83] text-2xl md:text-4xl " />
            <h3 className="text-sm md:text-base" style={{ fontFamily: "Lexend Deca, sans-serif" }}>profile</h3>
          </li>
        </Link>

        {/* search */}
        <Link to="/search">
          <li className="w-full  flex flex-col justify-center items-center">
            <LuSearch className="text-[#6EEB83] text-2xl md:text-4xl" />
            <h3 className="text-sm md:text-base" style={{ fontFamily: "Lexend Deca, sans-serif" }}>search</h3>
          </li>
        </Link>

        {/* create post */}
        <Link to="/add-post">
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosAddCircleOutline className="text-[#6EEB83] text-2xl md:text-4xl " />
            <h3 className="text-sm md:text-base" style={{ fontFamily: "Lexend Deca, sans-serif" }}>create</h3>
          </li>
        </Link>

        {/* <li className="w-full flex flex-col justify-center items-center ">
          <IoMdTrendingUp className="text-[#6EEB83] text-4xl font-bold" />
          <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>trending</h3>
        </li> */}
      </ul>

      {/* create  */}
      <ul className="md:w-full w-[30%] md:pr-0 pr-5">
        <li className="w-full flex flex-col justify-center items-center">
          <LogoutBtn />
          <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>Logout</h3>
        </li>
      </ul>
    </div>
  );
}
