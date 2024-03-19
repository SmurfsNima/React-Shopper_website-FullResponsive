import Logo from "../../Assets/Assets/logo.png";
import cart_icon from "../../Assets/Assets/cart_icon.png";
import { useContext, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Context";
import nav_dropdown from "../../Assets/Assets/drop-down.jpg";
const Navbar = () => {
  const [menu, setMneu] = useState("shop");
  const { getTotlaCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  // const dropdown_toggle = (e)=>{
  //   menuRef.current.classList.toggle('sm:flex');
  //   e.target.classList.toggle('rotate-[180deg]')

  // }
  const [isClick, setClick] = useState(false);
  return (
    <nav className=" w-full flex justify-between items-center bg-white text-black p-[16px] shadow-md  sm:py-[10px] sm:px-0 lg:py-[12px] lg:px-[50px] md: py-[12px] md:px-[10px] xs:py-[8px] xs:px-0 ">
      <div className="flex items-center justify-center  cursor-pointer">
        <img className="w-[40px] lg:w-[30px] xs:w-[30px]" src={Logo} alt="" />
        <h2 className="ml-2 text-xl font-bold lg:text-lg xs:text-[14px]">
          SHOPPER
        </h2>
      </div>
      <img
        onClick={() => setClick(!isClick)}
        src={nav_dropdown}
        className={` ${
          isClick ? "rotate-[180deg]" : ""
        } hidden sm:block xs:block w-[30px]`}
        alt=""
      />
      <ul
        ref={menuRef}
        className={` flex justify-center gap-10 items-center font-semibold ${
          isClick ? "" : "sm:hidden xs:hidden"
        }  sm:absolute xs:absolute sm:top-[60px] xs:top-[50px] xs:h-[60px]  sm:h-[80px] sm:bg-white xs:bg-white sm:w-full xs:w-full lg:text-[14px] md:text-[14px] md:gap-8 lg:gap-10  `}
      >
        <li
          onClick={() => setMneu("shop")}
          className={menu === "shop" ? "border-b-2 border-red-400 pb-1" : ""}
        >
          <Link to={"/"}> shop</Link>
        </li>

        <li
          onClick={() => setMneu("men")}
          className={menu === "men" ? "border-b-2 border-red-400 pb-1" : ""}
        >
          <Link to={"/men"}> men</Link>
        </li>
        <li
          onClick={() => setMneu("women")}
          className={menu === "women" ? "border-b-2 border-red-400 pb-1" : ""}
        >
          <Link to={"/women"}>women</Link>
        </li>
        <li
          onClick={() => setMneu("kids")}
          className={menu === "kids" ? "border-b-2 border-red-400 pb-1" : ""}
        >
          <Link to="/kids"> kids</Link>
        </li>
      </ul>
      <div className="flex items-center justify-center  ">
        <Link to={"/login"}>
          <button className="outline-none rounded-xl border-2	border-slate-300 bg-white  text-lg cursor-pointer font-semibold py-1 px-7 mr-6 md:mr-2  lg:mr-3 lg:text-[16px] lg:px-5   hover:bg-slate-100 xs:mr-[-15px] xs:scale-[0.7]">
            Login
          </button>
        </Link>
        <Link to={'/cart'}>
        <img
          className="cursor-pointer md:w-[30px]   xs:scale-[0.7]"
          src={cart_icon}
          alt=""
        />
        </Link>
        <div className="w-[22px] h-[22px] cursor-pointer flex justify-center items-center text-[14px]  rounded-lg bg-red-500 text-white mt-[-20px] ml-[-15px] md:w-[14px] md:text-xs md:ml-[-10px] md:h-[14px]  lg:w-[18px] lg:h-[18px]   xs:scale-[0.6]  ">
          {getTotlaCartItems()}
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
