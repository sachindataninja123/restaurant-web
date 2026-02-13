import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div id="contact-us" className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-4 py-10 px-[10vw] mt-14">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-5">
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas
            quasi nam vitae necessitatibus! Quod doloremque omnis totam debitis
            quibusdam? Nam sint tenetur ipsa vel repudiandae ipsam suscipit
            dolor asperiores, aperiam exercitationem numquam velit natus
            eligendi placeat, soluta enim itaque? Voluptas, facere!
          </p>
          <div className="flex gap-5">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="font-bold text-2xl">COMPANY</h2>
          <ul>
            <li className="list-none mb-2 cursor-pointer">Home</li>
            <li className="list-none mb-2  cursor-pointer">About us</li>
            <li className="list-none mb-2  cursor-pointer">Delivery</li>
            <li className="list-none mb-2  cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="font-semibold text-xl">GET IN TOUCH</h2>
          <ul>
            <li className="list-none mb-2  cursor-pointer">+1-212-456-7890</li>
            <li className="list-none mb-2  cursor-pointer">
              contact@tomato.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="w-full h-0.5 m-2 bg-gray-400 border-none " />
      <p>Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
