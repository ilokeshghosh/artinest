import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import { updatePosts } from "../store/postSlice";
import { useCallback } from "react";
import { useEffect } from "react";
import { Button, Input, RTE, Select } from "./";
import { updateStatus, clearStatus } from "../store/statusSlice";

export default function PostForm({ post }) {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
        hashTags: post?.hashTags || ''
      },
    });

  const submit = async (data) => {
    if (post) {
      // const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]): null;

      // if(file){
      //     appwriteService.deleteFile(post.featuredImage);
      // }

      try {
        const dbPost = await appwriteService.updatePost(post.$id, { ...data });

        if (dbPost) {
          dispatch(
            updatePosts({
              slug: post.$id,
              data: {
                title: data.title,
                content: data.content,
                status: data.status,
                hashTags: data.hashTags
              },
            })
          );

          dispatch(updateStatus({ text: "Post Updated", error: false }));
          setTimeout(() => {
            dispatch(clearStatus());
          }, 2000);
          navigate(`/post/${dbPost.$id}`);
        }
      } catch (error) {
        dispatch(updateStatus({ text: error.message, error: true }));
        setTimeout(() => {
          dispatch(clearStatus());
        }, 3000);
      }
    } else {
      try {
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
          userName: { ...userData }.prefs.userName,
        });

        if (dbPost) {
          dispatch(updateStatus({ text: "Post Created", error: false }));
          setTimeout(() => {
            dispatch(clearStatus());
          }, 2000);
          navigate(`/post/${dbPost.$id}`);
        }
      } catch (error) {
        dispatch(updateStatus({ text: error.message, error: true }));
        setTimeout(() => {
          dispatch(clearStatus());
        }, 3000);
      }
    }
  };

  // generate slug
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  // generate hashTags
  const hashTagsTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return '#' + value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "")
        .replace(/\s+/g, ' #');
    return "";
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      } else if (name === "tags") {
        setValue("hashTags", hashTagsTransform(value.tags), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue, hashTagsTransform]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-full flex flex-col md:flex-row gap-4 pb-14"
      style={{ fontFamily: "Lexend Deca, sans-serif" }}
    >
      {/* left section */}
      <div className="md:w-1/2 w-full flex flex-col gap-4 ">
        {/* title input */}
        <Input
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          type="text"
          placeholder="Enter Title"
          {...register("title", { required: true })}
        />

        {/* slug */}
        <Input
          className="w-full border-[#6EEB83] hidden border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          type="text"
          readOnly
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
          className="w-full  border-[#6EEB83] border-2 h-[25rem] overflow-y-hidden rounded-xl   bg-transparent text-[#A5A5A5] outline-none"
          name="content"
          control={control}
          id="content"
          defaultValue={getValues("content")}
        />

      </div>

      {/* right section */}
      <div className="md:w-[30%] w-full flex flex-col gap-4 ">
        {/* status input */}
        <Select
          options={["active", "inactive"]}
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          {...register("status", { required: true })}
        />

        {/* hasTags input */}
        <Input
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          type="text"
          placeholder="Enter Tags with Space like 'html css'"
          {...register("tags")}
        />

        {/* Generate hasTags input */}
        <Input
          readOnly
          className="w-full border-[#6EEB83] border-2 py-4 px-6 bg-transparent text-[#A5A5A5] outline-none"
          type="text"
          placeholder="Generated HashTags"
          {...register("hashTags")}
          onInput={(e) => {
            setValue(
              "hashTags",
              hashTagsTransform(e.currentTarget.value),
              {
                shouldValidate: true,
              }
            );
          }}
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
