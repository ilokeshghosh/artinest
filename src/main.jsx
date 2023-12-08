import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import EditPost from "./pages/EditPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import Post from "./pages/Post.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Search from "./pages/Search.jsx";
import store from "./store/store.js";
import { AuthLayout } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Construction from "./pages/Construction.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: "",
        element: (
          <AuthLayout authentication>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthLayout authentication>
            {" "}
            <Profile />
          </AuthLayout>
        ),
      },
      {
        path: "/search",
        element: (
          <AuthLayout authentication>
            {" "}
            <Search />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <SignUp />
      </AuthLayout>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

      {/* main router */}
      {/* <RouterProvider router={router} /> */}

      {/* maintenance page */}
      <Construction />

    </Provider>
  </React.StrictMode>
);
