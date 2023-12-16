import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import { setPosts } from "../store/postSlice";
import { Container, PostCard } from "../components";
import parse from "html-react-parser";

export default function UserPosts() {
    const { userName } = useParams();
    const navigate = useNavigate();
    const [userPosts, setUserPosts] = useState([]);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const localPosts = localStorage.getItem("posts");
        try {
            if (localPosts) {
                const parsedPost = JSON.parse(localPosts);
                setPosts(parsedPost);
            }
        } catch (error) {
            dispatch(updateStatus({ text: error.message, error: true }));
            setTimeout(() => {
                dispatch(clearStatus());
            }, 3000);
        }
    }, []);

    useEffect(() => {
        if (posts) {
            const data = posts.filter((post) => post.userName === userName);
            setUserPosts(data);
        }
    }, [posts, userName, navigate]);

    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
    ];
    if (userPosts.length === 0) {
        return (
            <Container className="overflow-y-auto no-scrollbar h-screen">
                <div className="h-screen">
                    {/* userName wrapper */}
                    <div className="w-full  flex justify-start md:items-start items-center ">
                        {/* latest container */}
                        <div className="flex flex-col items-center justify-center self-start md:w-[10%] w-full">
                            <p className="border-2 rounded-full border-[#6EEB83] w-10"></p>
                            <h3
                                className="text-xl"
                                style={{ fontFamily: "Lexend Deca, sans-serif" }}
                            >
                                {userName}
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
    } else {
        return (
            <Container className="overflow-y-auto no-scrollbar h-screen">
                {/* wrapper */}
                <div className=" w-full h-full flex flex-col bg-cover gap-5    py-10 md:py-0">
                    {/* latest wrapper */}
                    <div className="w-full flex justify-start  md:items-start items-center ">
                        {/* latest container */}
                        <div className="flex flex-col  md:items-start items-center  justify-center self-start md:w-32 w-full">
                            <p className="border-2 rounded-full mx-auto border-[#6EEB83] w-10 "></p>
                            <h3
                                className="text-xl"
                                style={{ fontFamily: "Lexend Deca, sans-serif" }}
                            >
                                {userName}
                            </h3>
                        </div>
                    </div>

                    {/* horizontal line */}
                    <p className="w-[97%]   mx-auto md:mx-0 border-2 border-[#A5A5A5]  rounded-full"></p>

                    {/* lower section */}
                    <div className="md:w-[90%] overflow-y-auto no-scrollbar  w-full flex flex-col items-start md:mt-4 md:gap-16 gap-14 mb-1">
                        {/* card 1 */}
                        {userPosts &&
                            userPosts.slice().sort((a, b) => {
                                return a.$createdAt > b.$createdAt ? -1 : 1;
                            }).map((post) => (
                                <div
                                    className="flex flex-col items-start gap-2 w-full"
                                    key={post.$id}
                                >
                                    {/* title and meta data */}
                                    <div className="w-full flex flex-col md:items-start md:justify-start justify-center items-center">
                                        <h1
                                            className="md:text-4xl text-center md:text-start text-lg text-[#6EEB83] not-italic font-400"
                                            style={{ fontFamily: "DM Serif Display, sans-serif" }}
                                        >
                                            <Link to={`/post/${post.$id}`}>{post.title}</Link>
                                        </h1>

                                        {/* metadata */}
                                        <div
                                            className="w-full"
                                            style={{ fontFamily: "Lexend Deca, sans-serif" }}
                                        >
                                            <h3 className="text-[#A5A5A5] text-center md:text-start text-xs md:text-base">
                                                written  on{" "}
                                                {new Date(post.$createdAt).getDate() < 10
                                                    ? "0" + new Date(post.$createdAt).getDate()
                                                    : new Date(post.$createdAt).getDate()}{" "}
                                                {months[new Date(post.$createdAt).getMonth()]}{" "}
                                                {new Date(post.$createdAt).getFullYear()}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* para section */}
                                    <div
                                        className="md:text-lg  text-sm   text-center md:text-start"
                                        style={{ fontFamily: "Lexend Deca, sans-serif" }}
                                    >
                                        {/* asdf */}
                                        {parse(post.content.slice(0, 200))}
                                        <Link to={`/post/${post.$id}`}>
                                            <h4 className="inline text-[#6EEB83] cursor-pointer ">
                                                ...read more
                                            </h4>
                                        </Link>
                                    </div>
                                    {/* hastag section */}
                                    <div className="w-full flex flex-wrap gap-4 justify-center items-center md:justify-start ">
                                        {post.hashTags &&
                                            post.hashTags.split(" ").map((tag) => (
                                                <button
                                                    key={tag}
                                                    className="border  border-[#6EEB83] text-[#6EEB83] rounded-3xl px-4 py-1 text-center"
                                                >
                                                    {tag}
                                                </button>
                                            ))}

                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </Container>
        );
    }
}
