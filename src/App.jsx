import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./components";
import Construction from './pages/Construction'
import authService from "./appwrite/auth";
import { useEffect } from "react";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { LuBellRing } from "./icons";
import { updateStatus, clearStatus } from "./store/statusSlice";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // error
  const errorStatus = useSelector((state) => state.status.status);
  const error = useSelector((state) => state.status.error);
  const text = useSelector((state) => state.status.text);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));

          // dispatch(updateStatus({ text: "Login Successful", error: false }));
          // setTimeout(() => {
          //   dispatch(clearStatus());
          // }, 1000);

        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        dispatch(updateStatus({ text: error.message, error: true }));
        setTimeout(() => {
          dispatch(clearStatus());
        }, 3000);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    //  <h1 className='text-red-500 text-5xl text-center'>👷🏿‍♂️Project under Construction 🚧</h1>

    <>


      {/* wrapper */}
      <div className="w-full md:h-screen  relative flex md:flex-row flex-col-reverse justify-between items-center   bg-[#272727]">
        {/*nav bar  */}
        <Nav />

        {/* content */}
        <Outlet />

        {/* notification section */}
        {errorStatus && (
          <div className=" absolute top-5 right-5 ">
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
                  {error ? 'FAILED' : 'SUCCESS'}
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
    </>
  ) : null;
}

export default App;
