import React from "react";
import hand_icon from "../../Assets/Assets/hand_icon.png";
import arrow from "../../Assets/Assets/arrow.png";
import hero_img from "../../Assets/Assets/hero_image.png";
 import './Hero.css'
const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-pink-200 to-slate-100 flex items-center justify-center ">
      <div id="left" className="flex flex-1  flex-col justify-center  gap-5 pl-[180px] leading-[1.1]">
        <h2 className="text-2xl font-semibold">New arrivals only</h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[80px] font-bold">new</p>
            <img className="w-[105px]" src={hand_icon} alt="" />
          </div>
          <p className="text-[80px] font-bold">Collection</p>
          <p className="text-[80px] font-bold">collection for every one</p>
        </div>
        <div className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-red-400 text-white text-xl font-medium cursor-pointer">
          <div>Latest collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div id="right" className= "flex flex-1 justify-center items-center">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
