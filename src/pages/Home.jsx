import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Container } from "../components/";
import { Fragment } from "react";
import { PostCard } from "../components/index";
import { setPosts } from "../store/postSlice";
export default function () {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        dispatch(setPosts(posts.documents));
        localStorage.setItem("posts", JSON.stringify(posts.documents));
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <Container>
        <div className="h-screen">
          {/* latest wrapper */}
          <div className="w-full  flex justify-start md:items-start items-center ">
            {/* latest container */}
            <div className="flex flex-col items-center justify-center self-start md:w-[10%] w-full">
              <p className="border-2 rounded-full border-[#6EEB83] w-10"></p>
              <h3
                className="text-xl"
                style={{ fontFamily: "Lexend Deca, sans-serif" }}
              >
                Latest
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="p-2 w-full text-red-500 font-bold text-xl">
              <h1>No Post To Show</h1>
            </div>
          </div>
        </div>
      </Container>
    );
  }
  return (
    <Container className="overflow-y-auto no-scrollbar h-screen">
      {/* wrapper */}
      <div className=" w-full h-full flex flex-col bg-cover gap-5    py-10 md:py-0">
        {/* latest wrapper */}
        <div className="w-full flex justify-start  md:items-start items-center ">
          {/* latest container */}
          <div className="flex flex-col md:items-start items-center  justify-center self-start md:w-16 w-full">
            <p className="border-2 rounded-full mx-auto border-[#6EEB83] w-10"></p>
            <h3
              className="text-xl"
              style={{ fontFamily: "Lexend Deca, sans-serif" }}
            >
              Latest
            </h3>
          </div>
        </div>

        {/* post card gap */}
        <div className="py-10 pb-56">
          {posts.map((post) => (
            <div className="flex flex-col gap-10" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
