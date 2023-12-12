// imports
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPosts } from "../store/postSlice";
import { updateStatus, clearStatus } from "../store/statusSlice";

// export Protected component
export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  // get authentication status from store(authSlice)
  const authStatus = useSelector((state) => state.auth.status);

  // useEffect hook that re-renders on [authStatus, navigate, authentication]
  useEffect(() => {

    // check wether user is authenticated or not

    // if not authenticated
    if (authentication && authStatus !== authentication) {
      // dispatch reducer function setPosts and set as []
      dispatch(setPosts([]));
      // set localStorage as null
      localStorage.setItem("posts", null);

      // trigger to display the popup notification
      dispatch(updateStatus({ text: "Logged Out", error: false }));
      setTimeout(() => {
        dispatch(clearStatus());
      }, 2000);

      // navigate to login page
      navigate("/login");
    }
    // if authenticated 
    else if (!authentication && authStatus !== authentication) {
      // navigate to home page
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  // is loader true show loading section else show the children
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
