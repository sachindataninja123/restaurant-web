import React from "react";

const Header = () => {
  return (
    <div className="h-[34vw] my-5 mx-auto object-contain relative bg-[url('/header_img.png')] bg-no-repeat rounded-xl">
      <div className="absolute flex flex-col items-start gap-2 max-w-[50%] bottom-[10%] left-[6vw]  animation-[fadeIn] ">
        <h1 className="font-semibold text-white text-[max(4.5vw,22px)] ">
          Order your favourite food here
        </h1>
        <p className="text-white text-[1vw] font-semibold">
          Choose from a diverse menu featuring a detactable array of dishes
          crafted with the first ingredients and culinary expertise.Our mission
          is to satisfy your cravings and elevate your dining experience,one
          delicious meal at a time.
        </p>
        <button className="border-none text-[#747474] font-bold bg-white rounded-full text-[max(1vw,13px)] px-7 py-3  ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
