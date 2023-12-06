import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPosts } from "../store/postSlice";

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(true);

    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            dispatch(setPosts([]));
            localStorage.setItem("posts", null);
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);
    return loader ? <h1>Loading...</h1> : <>{children}</>;
}
