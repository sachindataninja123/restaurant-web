import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="flex flex-col gap-5">
      <h1 className="text-3xl text-[#262626] font-semibold">
        Explore our menu
      </h1>
      <p className="max-w-[60%]  text-[#808080]">
        Choose from a diverse menu featuring a detectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience.
        one delicious meal at a time.
      </p>
      <div
        id="scrollbar"
        className="flex items-center gap-8 justify-between text-center my-5 overflow-x-scroll"
      >
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              className=""
              key={index}
            >
              <img
                className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full transition-[0.2s] ${category ===item.menu_name ? "border-3 border-[tomato] p-0.5 " : ""}`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-2 cursor-pointer text-[#747474] text-[max(1.4vw,16px)]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <hr className="mt-2 h-1 bg-[#e2e2e2] border-none" />
      </div>
    </div>
  );
};

export default ExploreMenu;
