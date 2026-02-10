import React from "react";
import image1 from "../assets/image1.avif";
import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "./redux/features/cartSlice";
import { toast } from "react-toastify";

const Card = ({ id, foodImage, foodName, foodType, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-80 h-100 border rounded-md p-3 flex flex-col gap-3 bg-gray-800 border-green-300">
      <div className="rounded-md overflow-hidden">
        <img
          src={foodImage}
          className="object-cover w-full h-50 rounded-md"
          alt="image"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl pt-2">{foodName}</h1>
      </div>
      <div className="flex items-center justify-between mx-1">
        <h2 className="font-semibold text-green-500">Rs {price}/-</h2>

        <p className="text-green-500 flex items-center justify-center gap-2 ">
          <span className="mt-1">
            {" "}
            {foodType === "veg" ? <LuVegan /> : <GiChickenOven />}
          </span>{" "}
          {foodType}{" "}
        </p>
      </div>
      <div className="mt-5">
        <button
          className="cursor-pointer active:scale-95 text-center bg-green-500 w-full py-2 rounded-md font-semibold hover:bg-green-600 transition-all "
          onClick={() =>
            dispatch(
              AddItem({
                id: id,
                name: foodName,
                image: foodImage,
                price: price,
                qty: 1,
              }),
              toast.success("Item Added!"),
            )
          }
        >
          Add to Dish
        </button>
      </div>
    </div>
  );
};

export default Card;
