import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import FiltersItem from "../components/FiltersItem";
import FoodItems from "../components/FoodItems";
import { food_items } from "../components/DataItems";
import { GiCrossMark } from "react-icons/gi";
import { dataContext } from "../context/UserContext";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

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

  let subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div>
      <Navbar setInput={setInput} input={input} />
      <FiltersItem
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FoodItems foodItems={filteredFood} />

      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-gray-200 shadow-xl p-6 transition-all overflow-auto duration-500 ${showCart ? "translate-x-0" : "translate-x-full"} flex flex-col items-center `}
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

      {items.length > 0 ?   <>
          <div className="w-full mt-9 flex flex-col gap-8 ">
            {items.map((item) => {
              return (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              );
            })}
          </div>

          <div className="text-black w-full border-t-2 border-b-2 border-gray-400 mt-6 flex flex-col gap-2 p-8 ">
            <div className="text-lg flex w-full items-center justify-between">
              <span className="font-semibold text-lg">Subtotal</span>
              <span className="text-green-400 font-semibold text-lg">
                Rs {subTotal} /-
              </span>
            </div>

            <div className="text-lg flex w-full items-center justify-between">
              <span className="font-semibold text-lg">Delivery Fee</span>
              <span className="text-green-400 font-semibold text-lg">
                Rs {deliveryFee} /-
              </span>
            </div>

            <div className="text-lg flex w-full items-center justify-between">
              <span className="font-semibold text-lg">Taxes</span>
              <span className="text-green-400 font-semibold text-lg">
                Rs {taxes} /-
              </span>
            </div>
          </div>
          <div className=" text-black text-lg flex w-full items-center p-9 justify-between">
            <span className="font-semibold text-2xl">Total</span>
            <span className="text-green-400 font-semibold text-2xl">
              Rs {total} /-
            </span>
          </div>

          <button className="cursor-pointer w-[80%] active:scale-95 text-center bg-green-500  py-2 rounded-md font-semibold hover:bg-green-600 transition-all " onClick={() => toast.success("Order Placed...")}>
            Place Order
          </button>
        </> : <div className="text-center text-3xl text-green-400 font-semibold pt-5">Empty Cart</div> } 
      </div>
    </div>
  );
};

export default Home;
