import React, { useContext, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { food_items } from "./DataItems";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";

const Navbar = ({ input, setInput }) => {

  const {showCart , setShowCart} = useContext(dataContext);

  let items = useSelector(state => state.cart)


  return (
    <div className="flex items-center justify-between py-5 px-7 ">
      <div className="bg-white w-15 h-15 flex justify-center items-center rounded-md ">
        <FaHamburger className="text-green-500 text-2xl " />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[60%] h-15 flex items-center justify-start border rounded-md gap-3 pl-4"
      >
        <FaSearch className="text-green-500 text-xl " />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Items..."
          className="outline-none text-xl input-bordered w-24 md:w-auto"
        />
      </form>

      <div className="bg-white w-15 h-15 flex justify-center items-center  rounded-md cursor-pointer active:scale-95 relative" onClick={() => setShowCart(true)}>
        <FaCartPlus  className="text-green-500 text-2xl " />
        <span className="text-green-500 font-semibold text-[17px] absolute top-1 right-2">{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
