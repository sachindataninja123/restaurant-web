import React from "react";
import { food_items } from "./DataItems";
import Card from "./Card";

const FoodItems = ({ foodItems }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-7 my-8">
      {foodItems.map((item) => {
        return (
          <div key={item.id}>
            <Card
              id={item.id}
              foodImage={item.food_image}
              foodName={item.food_name}
              foodType={item.food_type}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FoodItems;
