import React from "react";
import hand_icon from "../../Assets/Assets/hand_icon.png";
import arrow from "../../Assets/Assets/arrow.png";
import hero_img from "../../Assets/Assets/hero_image.png";
 import './Hero.css'
const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-pink-200 to-slate-100 flex items-center justify-center px-[6%] ">
     <div id="left" className="flex flex-1 flex-col justify-center gap-5 leading-[1.1] ">
        <h2 className="text-2xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div >
            <div className="flex items-center gap-5 ">
                <p className="text-[60px] font-semibold leading-[1.1]">new</p>
                <img className="w-[80px]" src={hand_icon} alt="" />
            </div>
            <p className="text-[60px] font-bold">Collection</p>
            <p  className="text-[60px] font-bold ">Collection for every one</p>
        </div>
        <div className="w-[350px] h-[70px]  gap-4 flex items-center justify-center mt-8 rounded-[75px] bg-red-500 text-white text-xl cursor-pointer">
            <p className="text-[20px]">latest collection</p>
            <img className="w-[25px]" src={arrow} alt="" />
        </div>
     </div>
     <div id="right" className="flex flex-1 items-center justify-center">
        <img className="w-[450px]" src={hero_img} alt="" />
     </div>
    </section>
  );
};

export default Hero;
