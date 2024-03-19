import React from "react";
import footer_logo from "../../Assets/Assets/logo_big.png";
import instagram from "../../Assets/Assets/instagram_icon.png";
import pinterst from "../../Assets/Assets/pintester_icon.png";
import whatsapp from "../../Assets/Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-10 mt-[100px]">
      <div className="flex justify-center items-center gap-5">
        <img className="w-[60px] sm:w-[45px] xs:w-[35px]" src={footer_logo} alt="" />
        <p className="text-3xl sm:text-xl xs:text-[16px] font-bold">SHOPPER</p>
      </div>
      <ul className="flex gap-6 sm:gap-5 xs:gap-[14px] ">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-[20px] text-[20px]">
        <div className="pb-2 border-[1px] p-[10px] border-gray-300">
          <img className="sm:w-[30px] xs:w-[22px]" src={instagram} alt="" />
        </div>
        <div className="pb-2 border-[1px] p-[10px] border-gray-300">
          <img className="sm:w-[30px] xs:w-[22px]" src={pinterst} alt="" />
        </div>
        <div className="pb-2 border-[1px] p-[10px] border-gray-300">
          <img className="sm:w-[30px] xs:w-[22px]" src={whatsapp} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 w-[100%] mb-[30px] text-xl">
        <hr className=" h-[3px] border-none rounded-lg w-[80%]  bg-gray-400 " />
        <p className="sm:text-[16px] xs:text-[14px]">copyright 2024 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
