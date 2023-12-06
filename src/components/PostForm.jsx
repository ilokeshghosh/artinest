import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { useCallback } from "react";
import { useEffect } from "react";
import { Button, Input, RTE, Select } from "./";

export default function PostForm({ post }) {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const submit = async (data) => {
    if (post) {
      // const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]): null;

      // if(file){
      //     appwriteService.deleteFile(post.featuredImage);
      // }

      const dbPost = await appwriteService.updatePost(post.$id, { ...data });

      if (dbPost) {
        dispatch(
          updatePosts({
            slug: post.$id,
            data: {
              title: data.title,
              content: data.content,
              status: data.status,
            },
          })
        );

        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      // const file = await appwriteService.uploadFile(data.image[0]);

      // if(file){
      //     const fileId = file.$id
      //     data.featuredImage = fileId;
      // }

      const dbPost = await appwriteService.createPost({
        ...data,
        userId: userData.$id,
        userName: userData.userName,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex flex-col md:flex-row gap-4 "
      style={{ fontFamily: "Lexend Deca, sans-serif" }}
    >
      {/* left section */}
      <div className="md:w-1/2 w-full flex flex-col gap-4">
        {/* title input */}
        <Input
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          type="text"
          placeholder="Enter Title"
          {...register("title", { required: true })}
        />

        {/* slug */}
        <input
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          type="text"
          id="slug"
          placeholder="Slug"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        {/*  text editor */}
        <RTE
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          name="content"
          control={control}
          id="content"
          defaultValue={getValues("content")}
        />
      </div>

      {/* right section */}
      <div className="md:w-[30%] w-full flex flex-col gap-4">
        {/* file input */}
        <Input
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          type="file"
          id="file"
          //   placeholder="Choose File"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {/* {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )} */}

        {/* status input */}
        <Select
          options={["active", "inactive"]}
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          {...register("status", { required: true })}
        />

        {/* submit */}
        <Button
          className="w-full py-4 bg-[#6EEB83] font-bold  text-black text-xl"
          type="submit"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
