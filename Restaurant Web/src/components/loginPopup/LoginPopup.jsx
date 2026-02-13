import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090] grid">
      <form className="place-self-center w-[max(28vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-8 rounded-lg text-[14px]">
        <div className="flex justify-between items-center text-black">
          <h2 className="font-bold text-xl">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            className="cursor-pointer w-4"
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none border  text-black border-[#949292] p-2 rounded-sm"
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            className="outline-none border text-black border-[#949292] p-2 rounded-sm"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="outline-none border  text-black border-[#949292] p-2.5 rounded-sm"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button className="p-2.5 border-none bg-[tomato] rounded-sm text-white font-semibold cursor-pointer">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-center gap-2 -mt-5">
          <input className="-mt-5" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span className="text-[tomato] font-semibold cursor-pointer" onClick={() => setCurrState("Sign up")}>Click here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span className="text-[tomato] font-semibold cursor-pointer" onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
