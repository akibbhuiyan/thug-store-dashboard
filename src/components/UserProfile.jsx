import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { userProfileData } from "../data/dummy";
import { Button } from ".";
import avatar from "../data/avatar.jpg";
const UserProfile = () => {
  const { currentColor, handleClose } = useStateContext();
  return (
    <div className="nav-item absolute right-5 top-16 bg-white dark:bg-[#424640] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>

        <button
          type="button"
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          onClick={() => handleClose("userProfile")}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6 ">
        <img
          src={avatar}
          alt="user-profile"
          className="rounded-full h-24 w-24"
        />
        <div>
          <p className="font-semibold dark:text-gray-200 text-xl">
            Michael Roberts
          </p>
          <p className=" dark:text-gray-400 text-gray-500 text-sm">
            Administrator
          </p>
          <p className=" dark:text-gray-400 text-gray-500 text-sm font-semibold">
            info@shop@gmail.com
          </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, idx) => (
          <div
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            key={idx}
          >
            <button
              type="button"
              className="text-xl rounded-xl p-3 hover:bg-light-gray"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className=" dark:text-gray-400 text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadious="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
