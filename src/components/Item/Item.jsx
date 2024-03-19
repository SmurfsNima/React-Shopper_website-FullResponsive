import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = ({ name, image, old_price, new_price, id }) => {
  return (
    <div className=" w-[240px] flex flex-col gap-5 hover:scale-[1.1] duration-[0.6s]  lg:w-[200px] md:w-[180px] sm:w-[165px] xs:w-[140px] sm:mx-auto xs:mx-auto ">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} className="w-[240px] rounded-3xl lg:w-[200px] md:w-[180px] sm:w-[165px] xs:w-[140px]" src={image} alt="" />
      </Link>
      <p className="mx-2">{name}</p>
      <div className="flex items-center  gap-5">
        <p className="font-semibold text-[18px]  "> ${new_price}</p>
        <p className="line-through lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px]">${old_price}</p>
      </div>
    </div>
  );
};

export default Item;
