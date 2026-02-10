import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import FiltersItem from "../components/FiltersItem";
import FoodItems from "../components/FoodItems";
import { food_items } from "../components/DataItems";

const Home = () => {
  
  const [selectedCategory , setSelectedCategory] = useState("All")
  const [input, setInput] = useState("");

 const filteredFood = food_items.filter((item) => {
  const matchCategory =
    selectedCategory === "All" ||
    item.food_category === selectedCategory;

  const matchSearch = item.food_name
    .toLowerCase()
    .includes(input.toLowerCase());

  return matchCategory && matchSearch;
});
  return (
    <div>
      <Navbar setInput={setInput} input={input} />
      <FiltersItem
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FoodItems foodItems={filteredFood} />
    </div>
  );
};

export default Home;
