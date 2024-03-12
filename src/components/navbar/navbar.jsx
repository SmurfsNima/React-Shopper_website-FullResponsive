import Logo from "../../Assets/Assets/logo.png";
import cart_icon from "../../Assets/Assets/cart_icon.png";
import { useState } from "react";
import "./navbar.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMneu] = useState("shop");
  return (
    <nav className=" w-full flex justify-between items-center bg-white text-black p-[16px] shadow-md ">
      <div className="flex items-center justify-center mx-7 cursor-pointer" >
        <img className="w-[40px]" src={Logo} alt="" />
        <h2 className="ml-2 text-xl font-bold">SHOPPER</h2>
      </div>
      <ul className="w-[30%] flex justify-between items-center font-semibold ">
        <li
          onClick={() => setMneu("shop")}
          className={menu === "shop" ? "border-b-2 border-red-400 pb-1" : ""}
        >
             shop
        </li>

        <li
          onClick={() => setMneu("men")}
          className={menu === "men" ? "border-b-2 border-red-400 pb-1" : ""}
        >
          men
        </li>
        <li
          onClick={() => setMneu("women")}
          className={menu === "women" ? "border-b-2 border-red-400 pb-1" : ""}
        >
          women
        </li>
        <li
          onClick={() => setMneu("kids")}
          className={menu === "kids" ? "border-b-2 border-red-400 pb-1" : ""}
        >
          kids
        </li>
      </ul>
      <div className="flex items-center justify-center mr-10">
       
        <button className="outline-none rounded-xl border-2	border-slate-300 bg-white  text-lg cursor-pointer font-semibold py-1 px-7 mr-6  hover:bg-slate-100 ">
     
          Login
          
        </button>
       

        <img className="cursor-pointer" src={cart_icon} alt="" />
        <div className="w-[22px] h-[22px] cursor-pointer flex justify-center items-center text-[14px] rounded-lg bg-red-500 text-white mt-[-20px] ml-[-15px]">
          1
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
