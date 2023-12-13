// imports
import { Link, useNavigate } from "react-router-dom";
import { LuBellRing } from "../icons/index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login as authLogin } from "../store/authSlice";
import { updateStatus, clearStatus } from "../store/statusSlice";
import authService from "../appwrite/auth";
import appwriteService from "../appwrite/config";
import { Button, Input } from "./index";
import { useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";

// export Login component
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [verified, setVerified] = useState(false);

  // error
  const errorStatus = useSelector((state) => state.status.status);
  const error = useSelector((state) => state.status.error);
  const text = useSelector((state) => state.status.text);

  // handle form submit
  const login = async (data) => {
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          const posts = await appwriteService.getPosts();
          if (posts) {
            dispatch(authLogin({ userData }));

            dispatch(updateStatus({ text: "Logged In", error: false }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 1000);

            navigate("/");
          }
        }
      }
    } catch (error) {
      dispatch(updateStatus({ text: error.message, error: true }));
      setTimeout(() => {
        dispatch(clearStatus());
      }, 3000);
    }
  };

  function onChange() {
    setVerified(true);
  }
  return (
    // wrapper
    <div className="w-full h-screen flex ">
      {/* left section */}
      <div className="w-[30%] relative  md:inline-block hidden">
        <img
          className="w-full h-screen -z-10 border-r-4 border-[#6EEB83] "
          src="https://ik.imagekit.io/8fgpvoiai/artinest/side-img_GdZKtnVzD.png?updatedAt=1701537313413"
          alt=""
        />
        {/* text */}
        <h2 className="absolute top-1/2 right-[30%]  -rotate-90 text-white text-6xl font-bold ">
          Login
        </h2>
      </div>

      {/* right section */}
      <div className="bg-[#272727] md:w-[70%] w-full flex  flex-col items-center md:items-start justify-center md:justify-start md:px-28 p-4">
        {/* upper title and notification area */}
        <div className="flex md:flex-row flex-col-reverse  w-full justify-between items-center md:py-14 py-12">
          {/* title & subtitle */}
          <div className="flex flex-col justify-center items-start">
            {/* title */}
            <h1
              className="text-white w-full md:w-auto text-5xl md:text-7xl md:text-start text-center"
              style={{ fontFamily: "DM Serif Display, sans-serif" }}
            >
              Welcome
            </h1>
            {/* subtitle */}
            <h2
              className="text-[#A5A5A5] w-full md:w-auto text-xl md:text-2xl md:text-start text-center"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              Let’s log you up quickly
            </h2>
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
        </div>

        {/* form section*/}
        <div className=" w-full text-white h-full ">
          <form
            onSubmit={handleSubmit(login)}
            className="md:w-[90%] w-full h-full flex flex-col  item-start md:gap-6 gap-4 px-4 md:px-0"
          >
            {/* email */}
            <Input
              className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full"
              type="email"
              placeholder="Enter Your Email"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            {/* password */}
            <input
              className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full"
              type="password"
              placeholder="Enter Your Password"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
              {...register("password", {
                required: true,
              })}
            />

            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />

            {/* submit button */}
            <div className="flex items-center justify-between gap-10 md:gap-0">
              <Button
                className="bg-[#6EEB83] cursor-pointer md:text-xl text-lg font-bold text-center md:px-10 px-5 py-2 md:py-4 text-black disabled:opacity-50"
                type="submit"
                style={{ fontFamily: "Lexend Deca, sans-serif" }}
                disabled={!verified}
              >
                Sign in
              </Button>

              <div
                className="text-lg flex flex-col items-end md:items-start justify-center"
                style={{ fontFamily: "Lexend Deca, sans-serif" }}
              >
                <h3 className="w-full ">don't have any account?</h3>
                <Link to="/signup">
                  <h3 className="text-[#6EEB83] cursor-pointer w-full">
                    sign-up
                  </h3>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
