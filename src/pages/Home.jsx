import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Container } from "../components/";
import { Fragment } from "react";
import {PostCard} from '../components/index'
import { setPosts } from '../store/postSlice';
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
    <Container>
      <div className="flex flex-wrap">
        <div className="p-2 w-full">
          {status ? (
            <h1 className="text-2xl font-bold hover:text-gray-500">
              No Post to read
            </h1>
          ) : (
            <h1 className="text-2xl font-bold hover:text-gray-500 text-white">
              Login to read and write post
            </h1>
          )}
        </div>
      </div>
    </Container>;
  }
  return <Container>
   
    {
        posts.map((post)=>{
            <Fragment key={post.$id}>
                <PostCard {...post} />
            </Fragment>
        })
    }
  </Container>;
}
