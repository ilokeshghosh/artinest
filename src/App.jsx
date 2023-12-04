import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Login, SignUp, Home, Post,AddPost,Profile,SearchPage } from "./components";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    //  <h1 className='text-red-500 text-5xl text-center'>👷🏿‍♂️Project under Construction 🚧</h1>

    // <SignUp/>

    // <Login/>

    // <Home />

    // <AddPost />

    // <Profile/>


    <SearchPage/>
    
  );
}

export default App;
