import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodCard from "../foodcard/FoodCard";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-6">
      <h2 className="font-bold text-[max(2vw,24px)]">Top dishes near you</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-6 gap-6 ">
        {food_list.map((item, idx) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodCard
                key={idx}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
