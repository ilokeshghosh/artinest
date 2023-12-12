import { useEffect, useState } from "react";
import {
  IoIosSearch,
  IoMdTrendingUp,
  FaRegUser,
  IoIosAddCircleOutline,
  MdOutlineEdit,
} from "../icons";
import { useSelector } from "react-redux";
import authService from "../appwrite/auth";
import appwriteService from "../appwrite/config";
import { get, useForm } from "react-hook-form";
import { login } from "../store/authSlice";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { updateStatus, clearStatus } from "../store/statusSlice";
export default function profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [userName, setuserName] = useState();

  const [selectedImage, setSelectedImage] = useState(null);

  const { register, handleSubmit, setValue, control, getValues } = useForm();

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name || "");
      setValue("email", userData.email || "");
      setValue("userName", { ...userData }.prefs.userName || "");

      if (userData.prefs.avatar) {
        const imgUrl = authService.getAvatarPreview(userData.prefs.avatar);
        setValue("imgUrl", imgUrl);
      } else {
        const imgUrl = authService.getUserAvatar(userData.name);
        setValue("imgUrl", imgUrl);
      }
    }
  }, [userData, setValue]);

  const submit = async (data) => {
    if ({ ...userData }.prefs.avatar === undefined) {
      try {
        const file = await authService.uploadAvatar(data.image[0]);
        if (file) {
          const fileId = file.$id;
          const pref = await authService.setPrefs(
            "avatar",
            fileId,
            { ...userData }.prefs
          );
        }

        const updatedUser = await authService.updateName(data.name);

        if (updatedUser || pref) {
          const userData = await authService.getCurrentUser();
          if (userData) {
            dispatch(login({ userData }));
            dispatch(updateStatus({ text: "Profile Updated", error: false }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 2000);
          }
        }
      } catch (error) {
        dispatch(updateStatus({ text: error.message, error: true }));
        setTimeout(() => {
          dispatch(clearStatus());
        }, 3000);
      }
    } else {
      try {
        const file = data.image[0]
          ? await authService.uploadAvatar(data.image[0])
          : null;

        if (file) {
          await authService.deleteAvatar({ ...userData }.prefs.avatar);
          const fileId = file.$id;
          const pref = await authService.setPrefs(
            "avatar",
            fileId,
            { ...userData }.prefs
          );
        }

        const updateName = await authService.updateName(data.name);

        if (updateName || file) {
          const userData = await authService.getCurrentUser();
          if (userData) {
            
            dispatch(login({ userData }));

            dispatch(updateStatus({ text: "Profile Updated", error: false }));
            setTimeout(() => {
              dispatch(clearStatus());
            }, 2000);
          }
        }
      } catch (error) {
        dispatch(updateStatus({ text: error.message, error: true }));
        setTimeout(() => {
          dispatch(clearStatus());
        }, 3000);
      }



    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="w-[90%] md:pl-2  text-white flex flex-col md:justify-start  md:items-start items-center  h-full md:py-1 py-4 pb-20 md:pb-0 md:gap-2 gap-4">
      {/* profile wrapper */}
      <div className="w-full flex  justify-start md:items-start items-center">
        {/* latest container */}
        <div className="flex flex-col md:item-start item-center  justify-center self-start md:w-[10%] w-full">
          <p className="border-2 rounded-full mx-auto border-[#6EEB83] w-10 md:mx-3"></p>
          <h3
            className="text-xl w-full md:text-start text-center"
            style={{ fontFamily: "Lexend Deca, sans-serif" }}
          >
            Profile
          </h3>
        </div>
      </div>

      {/* horizontal line */}
      <p className="w-[90%] mx-auto md:mx-0 border-2 border-[#6EEB83] rounded-full"></p>

      {/* profile content */}
      <div
        className=" w-full py-1 pb-7"
        style={{ fontFamily: "Lexend Deca, sans-serif" }}
      >
        <form
          onSubmit={handleSubmit(submit)}
          className=" w-full flex md:flex-row flex-col-reverse justify-between gap-4 md:gap-0"
        >
          {/* left section */}
          <div className="flex flex-col gap-4 md:w-1/2 w-full">
            {/* name */}
            <div className="flex flex-col">
              <label className="text-center md:text-start" htmlFor="name">
                Name
              </label>
              <Input
                className="outline-none bg-transparent text-center md:text-start border-2 border-[#6EEB83]  py-4 px-6 text-[#A5A5A5]"
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true })}
                placeholder="Enter a Valid Name"
              />
            </div>

            {/* email */}
            <div className="flex flex-col">
              <label className="text-center md:text-start" htmlFor="email">
                Email
              </label>
              <Input
                className="outline-none bg-transparent text-center md:text-start border-2 border-[#6EEB83]  py-4 px-6 text-[#A5A5A5]"
                type="text"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter a valid email"
              />
            </div>

            {/* username */}
            <div className="flex flex-col ">
              <label className="text-center md:text-start" htmlFor="username">
                Username
              </label>
              <Input
                readOnly
                className="outline-none bg-transparent border-2 border-[#6EEB83] text-center md:text-start  py-4 px-6 text-[#A5A5A5]"
                type="text"
                name="username"
                id="username"
                {...register("userName", { required: true })}
              />
            </div>

            {/* update button */}
            <Button
              className="bg-[#6EEB83] text-black font-bold py-4 px-6 mt-10"
              type="submit"
            >
              Update Profile
            </Button>

            <Button className="bg-[#FF5E5B] hidden text-black font-bold py-4 px-6">
              Delete Account
            </Button>
          </div>

          {/* right section */}
          <div className="flex flex-col gap-4 md:w-1/3 w-full  justify-center md:justify-start md:items-start items-center ">
            <div className="flex flex-col ">
              <label
                className="md:text-start text-center"
                htmlFor="profile-img"
              >
                Profile Picture
              </label>
              {/* circle */}
              <div className="border-4 border-[#6EEB83] rounded-full md:w-[210px] w-[150px] h-[150px] md:h-[210px] ml-3">
                <img
                  className="w-full h-full rounded-full p-[0.4px]"
                  src={
                    selectedImage
                      ? selectedImage
                      : { ...userData }.prefs.avatar
                        ? authService.getAvatarPreview(
                          { ...userData }.prefs.avatar
                        )
                        : authService.getUserAvatar(userData.name)
                  }
                  alt="profile-img"
                />
              </div>
              <div className="relative -top-14 md:left-5 left-3">
                <label
                  htmlFor="profile-img"
                  className="bg-[#6EEB83]  flex justify-center items-center text-black text-xl md:text-2xl rounded-full  md:h-[44px] h-[35px] w-[35px] md:w-[44px] absolute top-0 left-0"
                >
                  <MdOutlineEdit />
                </label>
                <input
                  className="hidden"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  type="file"
                  name="profile-img"
                  id="profile-img"
                  {...register("image")}
                  onInput={onImageChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
