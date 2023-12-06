import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setPosts } from "../store/postSlice";
import { Container,PostForm } from "../components";

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
            console.log('ERROR IS PAGES :: EDITPOST ::',error);
        }
    },[]);


    useEffect(()=>{
        if(slug){
            const currentPost = posts.find(post=>post.$id === slug);
            setPost(currentPost);
        }else{
            navigate('/');
        }
    },[slug, navigate,posts])

    return post ? (
        <Container>
            <PostForm post={post}/>
        </Container>
    ) : null;
}