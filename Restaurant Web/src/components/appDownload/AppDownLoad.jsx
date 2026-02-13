import React from "react";
import { assets } from "../../assets/assets";

const AppDownLoad = () => {
  return (
    <div id="app-download" className="m-auto mt-25 text-[max(3vw,20px)] text-center font-semibold">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <img className="w-[max(30vw,120px)] max-w-45 transition-[0.5s] cursor-pointer hover:scale-[1.05]" src={assets.play_store} alt="" />
        <img className="w-[max(30vw,120px)] max-w-45 transition-[0.5s] cursor-pointer hover:scale-[1.05]" src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownLoad;
