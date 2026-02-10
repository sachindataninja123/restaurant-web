import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import FiltersItem from "../components/FiltersItem";
import FoodItems from "../components/FoodItems";
import { food_items } from "../components/DataItems";
import { GiCrossMark } from "react-icons/gi";
import { dataContext } from "../context/UserContext";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput] = useState("");

  const { showCart, setShowCart } = useContext(dataContext);

  const filteredFood = food_items.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.food_category === selectedCategory;

    const matchSearch = item.food_name
      .toLowerCase()
      .includes(input.toLowerCase());

    return matchCategory && matchSearch;
  });

  let items = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar setInput={setInput} input={input} />
      <FiltersItem
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FoodItems foodItems={filteredFood} />

      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"} `}
      >
        <header className="w-full flex justify-between items-center text-black">
          <span className="text-green-500 font-semibold text-lg">
            Order Items
          </span>
          <span
            onClick={() => setShowCart(false)}
            className="text-green-500 text-[28px] font-semibold cursor-pointer"
          >
            <GiCrossMark />
          </span>
        </header>

        <div className="w-full mt-9 flex flex-col gap-8">
          {items.map((item) => {
            return (
              <Card2 key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            );
          })}
        </div>

        <div className="w-full border-t-2 border-gray-600">

        </div>
      </div>
    </div>
  );
};

export default Home;
