import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./index.css";
import { useDispatch } from "react-redux";
import { Nav } from "./components";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(`ERROR IN :: LOGIN :: ${error}`);
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    //  <h1 className='text-red-500 text-5xl text-center'>👷🏿‍♂️Project under Construction 🚧</h1>

    // <SignUp/>

    // <Login/>

    // <Home />

    // <AddPost />

    // <Profile/>

    <>
      {/* wrapper */}
      <div className="w-full md:h-screen  flex md:flex-row flex-col-reverse justify-between items-center   bg-[#272727]">
        {/*nav bar  */}
        <Nav/>

        {/* content */}
        <Outlet/>
      </div>
    </>
  ) : null;
}

export default App;
