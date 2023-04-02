import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import { Button } from ".";
const Notification = () => {
  const { currentColor, handleClose } = useStateContext();
  return (
    <div className="nav-item absolute right-5 top-16 bg-white dark:bg-[#424640] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Message</p>

          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
        <button
          type="button"
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          onClick={() => handleClose("cart")}
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5">
        {chatData.map((item, idx) => (
          <div
            className="flex items-center gap-5 border-b-1 border-color p-3 cursor-pointer"
            key={idx}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.message}
                className="rounded-full h-10 w-10"
              />
              <span className="absolute inline-flex rounded-full h-2 w-2 right-0 top-1" />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
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
            text="See all message"
            borderRadious="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
