import React, { useState } from "react";
import { assets } from "../../assets/assets";

const FoodCard = ({ id, name, description, image, price }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="w-full m-auto rounded-[15px] shadow-[0px 0px 10px #00000015] transition-all duration-300 animate-fadeIn">
      <div className="w-full relative ">
        <img className="overflow-hidden  rounded-t-2xl" src={image} alt="" />

        {!itemCount ? (
          <img
            className="w-8.75 absolute bottom-3 right-4 cursor-pointer rounded-full"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_green}
            alt=""
          />
        ) : (
          <div className="absolute bottom-3 right-4 flex items-center gap-3 p-2 rounded-4xl bg-white">
            <img className="w-7.5"
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img className="w-7.5"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[20px] font-semibold">{name}</p>
          <img className="w-17.5" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[14px]">{description}</p>
        <p className="text-[tomato] text-[22px] font-semibold mt-2 ">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
