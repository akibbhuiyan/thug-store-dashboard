import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";
const Cart = () => {
  const { currentColor, handleClose } = useStateContext();
  const [count, setCount] = useState(0);
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out  dark:text-gray-200 dark:bg-[#484B52] bg-white transition-all md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            onClick={() => handleClose("cart")}
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-5 border-b-1 border-color dark:border-gray-600 p-4">
              <img src={item.image} alt="" className="rounded-lg h-80 w-24 " />
              <div className="flex flex-col">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                  {item.category}
                </p>
                <div className="flex items-center mt-2 gap-4">
                  <p className="font-semibold text-lg">{item.price}</p>
                  <div className="flex items-center border-1 border-r-0 border-color rounded">
                    <p
                      className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600"
                      onClick={() => setCount(count - 1)}
                    >
                      <AiOutlineMinus />
                    </p>
                    <p className="p-2 border-r-1 dark:border-gray-600 border-color text-green-600">
                      {count}
                    </p>
                    <p
                      className="p-2 border-r-1 dark:border-gray-600 border-color text-green-600"
                      onClick={() => setCount(count + 1)}
                    >
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center ">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5 ">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadious="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
