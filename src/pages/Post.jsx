import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setPosts } from "../store/postSlice";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useEffect } from "react";

export default function Post() {
  const [post, setPost] = useState(null);
  const posts = useSelector((state) => state.post.posts);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        dispatch(setPosts(posts.documents));
        localStorage.setItem("posts", JSON.stringify(posts.documents));
      }
    });
  }, []);

  useEffect(() => {
    if (slug) {
      const currentPost = posts.find((post) => post.$id === slug);
      setPost(currentPost);
    } else {
      navigate("/");
    }
  }, [slug, navigate, posts]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        navigate("/");
      }
    });
  };

  return post ? (
    <Container>
      {/* meta data and title */}
      <div className="flex flex-col justify-center md:items-start items-center gap-2">
        <h1
          className="text-[#6EEB83] text-4xl text-center md:text-start"
          style={{ fontFamily: "DM Serif Display, sans-serif" }}
        >
          {post.title}
        </h1>

        {/* metadata */}
        <div style={{ fontFamily: "Lexend Deca, sans-serif" }}>
          <h3 className="text-[#A5A5A5] text-center md:text-start">
            written by @lokesh293
          </h3>
          <h3 className="text-[#A5A5A5] text-center md:text-start">
            on 27 may 2022
          </h3>
        </div>
      </div>

      {/* blog content */}
      <div className="w-full h-auto pb-6 md:text-start text-center ">
        <h4 style={{ fontFamily: "Lexend Deca, sans-serif" }}>
          {post.content}
        </h4>

        {isAuthor && (
          <div className="absolute right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500" className="mr-3">
                Edit
              </Button>
            </Link>
            <Button bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </Container>
  ) : null;
}
