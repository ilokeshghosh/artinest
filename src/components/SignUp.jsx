import "../index.css";
import { LuBellRing } from "../icons/index";
// import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    // wrapper
    <div className="w-full h-screen flex">
      {/* left section */}
      <div className="w-[30%] relative hidden  md:inline-block">
        <img
          className="w-full h-screen -z-10 border-r-4 border-[#6EEB83] "
          src="https://ik.imagekit.io/8fgpvoiai/artinest/side-img_GdZKtnVzD.png?updatedAt=1701537313413"
          alt=""
        />
        {/* text */}
        <h2 className="absolute top-1/2 right-[30%]  -rotate-90 text-white text-6xl font-bold ">
          Sign Up
        </h2>
      </div>

      {/* right section */}
      <div className="bg-[#272727] w-full md:w-[70%] flex flex-col items-start justify-start px-28">

        {/* upper title and notification area */}
        <div className="flex  w-full justify-between items-center py-14">
          {/* title & subtitle */}
          <div className="flex flex-col justify-center items-start">
            {/* title */}
            <h1
              className="text-white text-7xl"
              style={{ fontFamily: "DM Serif Display, sans-serif" }}
            >
              Welcome
            </h1>
            {/* subtitle */}
            <h2
              className="text-[#A5A5A5] text-2xl"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              Let’s sign you up quickly
            </h2>
          </div>

          {/* notification section */}
          <div className=" relative -top-10">
            <div className="bg-[#6EEB83]  flex items-center gap-[5rem] justify-between px-4 py-2">
              {/* text */}
              <div className="flex flex-col justify-center items-start">
                <h3
                  className=""
                  style={{ fontFamily: "Lexend Deca, sans-serif" }}
                >
                  SUCCESS
                </h3>
                <h3
                  className=""
                  style={{ fontFamily: "Lexend Deca, sans-serif" }}
                >
                  You can Log-in now.
                </h3>
              </div>
              <LuBellRing className="text-3xl" />
            </div>
          </div>
        </div>

        {/* form section*/}
        <div className=" w-full text-white h-full ">
           <form className="w-[90%] h-full flex flex-col item-start gap-6" >
            {/* name */}
            <input className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full" type="text" name="name" id="name" placeholder="Enter Your Name" style={{ fontFamily: "Lexend Deca, sans-serif" }} />

            {/* email */}
            <input className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full" type="email" name="email" id="email" placeholder="Enter Your Email" style={{ fontFamily: "Lexend Deca, sans-serif" }} />

            {/* password */}
            <input className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full" type="password" name="password" id="password" placeholder="Enter Your Password" style={{ fontFamily: "Lexend Deca, sans-serif" }} />

            {/* retype password */}
            <input className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full" type="password" name="re-password" id="retype-password" placeholder="Re-enter Your Password" style={{ fontFamily: "Lexend Deca, sans-serif" }}/>

            {/* submit button */}
            <div className="flex items-center justify-between">
            <input className="bg-[#6EEB83] cursor-pointer text-xl font-bold text-center px-10 py-4 text-black" type="submit" value="SUBMIT" style={{ fontFamily: "Lexend Deca, sans-serif" }} />

            <div className="text-lg flex flex-col items-start justify-center" style={{ fontFamily: "Lexend Deca, sans-serif" }}>
                <h3  >already have an account?</h3>
                {/* <Link to='/' className="text-[#6EEB83]">log-in</Link> */}
                <h3  className="text-[#6EEB83] cursor-pointer">log-in</h3>
               
            </div>
            </div>


           </form>
        </div>
      </div>
    </div>
  );
}
