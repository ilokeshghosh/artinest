import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setPosts } from "../store/postSlice";
import { Container,PostForm } from "../components";
import { updateStatus, clearStatus } from "../store/statusSlice";

export default function EditPost(){
    const dispatch = useDispatch()
    const posts = useSelector(state=> state.post.posts);
    const {slug} = useParams();
    const navigate = useNavigate();
    const[post, setPost] = useState(null);

    useEffect(()=>{
        const localPosts = localStorage.getItem('posts');

        try{
            if(localPosts){
                const parsedPost = JSON.parse(localPosts);
                dispatch(setPosts(parsedPost));
            }
        }catch(error){
            dispatch(updateStatus({ text: error.message, error: true }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 3000);
        }
    },[]);


    useEffect(()=>{
        if(slug){
            const currentPost = posts.find(post=>post.$id === slug);
            setPost(currentPost);
        }else{
            dispatch(updateStatus({ text: 'Post Not Found', error: true }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 3000);
            navigate('/');
        }
    },[slug, navigate,posts])

    return post ? (
        <Container>
            <PostForm post={post}/>
        </Container>
    ) : null;
}