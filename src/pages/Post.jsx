import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { setPosts } from "../store/postSlice";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useEffect } from "react";
import {FaEdit,MdOutlineDeleteForever} from '../icons'
import { updateStatus, clearStatus } from "../store/statusSlice";


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
      dispatch(updateStatus({ text: 'Post Not Found', error: true }));
      setTimeout(() => {
        dispatch(clearStatus());
      }, 3000);
      navigate("/");
    }
  }, [slug, navigate, posts]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        dispatch(updateStatus({ text: 'Post Deleted', error: false }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 3000);
        navigate("/");
      }
    });
  };

  

  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return post ? (
    <Container>
      <div className="overflow-y-auto no-scrollbar py-1 gap-20 md:gap-0 w-full flex flex-col md:flex-row md:justify-between justify-start">

        {/* left section */}
        <div className="md:w-3/4 w-full  ">
          {/* meta data and title */}
          <div className="flex flex-col justify-center md:items-start items-center gap-2 mb-5 ">
            <h1
              className="text-[#6EEB83] text-4xl text-center md:text-start"
              style={{ fontFamily: "DM Serif Display, sans-serif" }}
            >
              {post.title}
            </h1>

            {/* metadata */}
            <div style={{ fontFamily: "Lexend Deca, sans-serif" }}>
              <h3 className="text-[#A5A5A5] text-center md:text-start">
                written by {post.userName}
              </h3>
              <h3 className="text-[#A5A5A5] text-center md:text-start">
                on {new Date({...post}.$createdAt).getDate()<10 ? ('0'+new Date({...post}.$createdAt).getDate()):new Date({...post}.$createdAt).getDate()} {months[new Date({...post}.$createdAt).getMonth()]} {new Date({...post}.$createdAt).getFullYear()}
              </h3>
            </div>
          </div>

          
          {/* blog content */}
          <div className="w-full h-auto pb-6 md:text-start text-center browser-css" style={{ fontFamily: "Lexend Deca, sans-serif" }}>
          {parse(post.content)}
          </div>


          {/* hash tags */}
          <div className="w-full h-12  flex flex-wrap gap-4 justify-center items-center md:justify-start">
            {post.hashTags.split(' ').map((tag)=>(<button key={tag} className="border  border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center">{tag}</button>))}
          </div>
        </div>

        {/* right section */}
        <div className="md:w-52 w-full">
          {isAuthor && (
            <div className="flex md:gap-4 gap-10 items-center md:justify-end justify-center">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="text-[#6EEB83] text-3xl  py-0 px-0"><FaEdit /></Button>
              </Link>
              <Button className="text-[#FF5E5B] text-4xl  py-0 px-0" onClick={deletePost}><MdOutlineDeleteForever /></Button>
            </div>
          )}
        </div>



      </div>
    </Container>
  ) : null;
}
