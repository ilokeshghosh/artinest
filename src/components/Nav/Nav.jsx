// Navigation bar

// imports
import { Link, useNavigate, NavLink } from "react-router-dom";
// import icons
import {
  IoIosAddCircleOutline,
  LuHome,
  LuSearch,
  LuUser,
} from "../../icons";
import { useSelector } from "react-redux";
// import logout button component
import { LogoutBtn } from "../";

// export nav component
export default function Nav() {
  // get authentication status from store(authSlice)
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  return (
    // nav container
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
        {/* home section */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-transform duration-200 text-[#6EEB83] ${isActive ? " text-white scale-[1.1]" : "text-[#6EEB83]"
            }`
          }
        >
          <li className="w-full flex flex-col justify-center items-center">
            <LuHome className=" text-2xl md:text-4xl " />
            <h3
              className="text-sm md:text-base"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              Home
            </h3>
          </li>
        </NavLink>

        {/* profile section */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `transition-transform duration-200 text-[#6EEB83] ${isActive ? " text-white scale-[1.1]" : "text-[#6EEB83]"
            }`
          }
        >
          <li className="w-full flex flex-col justify-center items-center">
            <LuUser className=" text-2xl md:text-4xl " />
            <h3
              className="text-sm md:text-base"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              profile
            </h3>
          </li>
        </NavLink>

        {/* search section*/}
        <NavLink
          className={({ isActive }) =>
            `transition-transform duration-200 text-[#6EEB83] ${isActive ? " text-white scale-[1.1]" : "text-[#6EEB83]"
            }`
          }
          to="/search"
        >
          <li className="w-full  flex flex-col justify-center items-center">
            <LuSearch className="text-2xl md:text-4xl" />
            <h3
              className="text-sm md:text-base"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              search
            </h3>
          </li>
        </NavLink>

        {/* create post section */}
        <NavLink
          to="/add-post"
          className={({ isActive }) =>
            `transition-transform duration-200  ${isActive ? " text-white scale-[1.1]" : "text-[#6EEB83]"
            }`
          }
        >
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosAddCircleOutline className="text-2xl md:text-4xl " />
            <h3
              className="text-sm md:text-base"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              create
            </h3>
          </li>
        </NavLink>

      </ul>

      {/* logout section */}
      <ul className="md:w-full w-[30%] md:pr-0 pr-5">
        <li className="w-full flex flex-col justify-center items-center">
          <LogoutBtn />
          <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>Logout</h3>
        </li>
      </ul>
    </div>
  );
}
