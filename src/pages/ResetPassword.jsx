import { Link, useNavigate, useLocation } from "react-router-dom";
import { LuBellRing } from "../icons/index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateStatus, clearStatus } from "../store/statusSlice";
import authService from "../appwrite/auth";
import { Button, Input } from "../components";
import { useSelector } from "react-redux";

export default function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  // getting params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  // error
  const errorStatus = useSelector((state) => state.status.status);
  const error = useSelector((state) => state.status.error);
  const text = useSelector((state) => state.status.text);

  const resetPassword = async (data) => {
    if (data) {
      try {
        if (userId && secret) {
          if (
            data.password &&
            data.retypePassword &&
            data.password === data.retypePassword
          ) {
            const status = await authService.confirmPasswordResetMail(
              userId,
              secret,
              data.password,
              data.retypePassword
            );
            if (status) {
              dispatch(
                updateStatus({ text: "Password Updated", error: false })
              );
              setTimeout(() => {
                dispatch(clearStatus());
              }, 3000);

              navigate("/login");
            }
          } else {
            dispatch(updateStatus({ text: "Invalid Password", error: true }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 3000);
            navigate("/login");
          }
        }
      } catch (error) {
        dispatch(updateStatus({ text: error.message, error: true }));
        setTimeout(() => {
          dispatch(clearStatus());
        }, 3000);
      }
    }
  };

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
        <h2 className="absolute top-1/2 right-[5%]  w-full  -rotate-90 text-white text-6xl font-bold ">
          Reset Password
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
              Reset Your Password quickly
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

        <div className={`w-full text-white  h-full`}>
          <form onSubmit={handleSubmit(resetPassword)}>
            {/* reset password form section */}
            <div className={`w-full flex flex-col gap-3`}>
              {/* password */}
              <Input
                className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full"
                type="password"
                placeholder="Enter Your Password"
                {...register("password")}
              />

              {/* retype password */}
              <Input
                className="border-[#6EEB83] text-lg bg-transparent px-6 h-14 border-2 outline-none w-full"
                type="password"
                placeholder="Retype Password"
                {...register("retypePassword")}
              />

              {/* submit button section */}
              <div className="flex items-center justify-between gap-10 md:gap-0">
                <Button
                  className="bg-[#6EEB83] cursor-pointer md:text-xl text-lg font-bold text-center md:px-10 px-5 py-2 md:py-4 text-black"
                  type="submit"
                  style={{ fontFamily: "Lexend Deca, sans-serif" }}
                >
                  Reset Password
                </Button>

                <div
                  className="text-lg flex flex-col items-end md:items-start justify-center"
                  style={{ fontFamily: "Lexend Deca, sans-serif" }}
                >
                  <h3 className="w-full ">password remembered?</h3>
                  <Link to="/login">
                    <h3 className="text-[#6EEB83] cursor-pointer w-full">
                      back to login
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
