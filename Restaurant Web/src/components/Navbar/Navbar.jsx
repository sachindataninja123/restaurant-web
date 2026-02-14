import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="py-5 px-0 flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-37.5 " />
      </Link>
      <ul className="flex list-none gap-5 uppercase text-[#49557e] ">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "border-b-2 pb-1 " : ""} cursor-pointer`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "border-b-2 pb-1 " : ""} cursor-pointer`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={`${menu === "mobile-app" ? "border-b-2 pb-1 " : ""} cursor-pointer`}
        >
          mobile-app
        </a>
        <a
          href="#contact-us"
          onClick={() => setMenu("contact-us")}
          className={`${menu === "contact-us" ? "border-b-2 pb-1 " : ""} cursor-pointer`}
        >
          contact-us
        </a>
      </ul>
      <div className="flex items-center gap-8 ">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={`${getTotalCartAmount() === 0 ? "" : "absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[tomato] "}`}
          ></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="text-[16px] text-[#49557e] bg-transparent border-[tomato] border rounded-[50px] cursor-pointer py-2 px-6 hover:bg-[#fff4f2] transition-all duration-300"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
