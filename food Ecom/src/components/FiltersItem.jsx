import React from "react";
import Categories from "./Category";

const FiltersItem = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-6 md:gap-5   ">
      {Categories.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setSelectedCategory(item.name)}
            className={`flex flex-col gap-5 w-38 md:w-33 h-36 md:h-35 rounded-md p-3 transition-all active:scale-95 cursor-pointer border hover:bg-green-100 ${
              selectedCategory === item.name
                ? "bg-green-300 "
                : "bg-white/90"
            }`}
            
          >
            {item.icon}
            <div className="text-xl text-gray-700  font-semibold">
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FiltersItem;
