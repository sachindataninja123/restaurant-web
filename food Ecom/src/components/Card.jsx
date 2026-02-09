import React from "react";
import image1 from "../assets/image1.avif";

const Card = () => {
  return (
    <div className="w-80 h-100 border rounded-md p-3 flex flex-col gap-3 bg-gray-800 border-green-300">
      <div className="rounded-md overflow-hidden">
        <img
          src={image1}
          className="object-cover w-full h-50 rounded-md"
          alt="image"
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-2">Chicken Soup</h1>
      </div>
      <div className="flex items-center justify-between mx-1">
        <h2 className="font-semibold text-green-500">Rs 399/-</h2>
        <p className="text-green-500">non_veg</p>
      </div>
      <div className="mt-5">
        <button className="cursor-pointer active:scale-95 text-center bg-green-500 w-full py-2 rounded-md font-semibold ">
          Add to Dish
        </button>
      </div>
    </div>
  );
};

export default Card;
