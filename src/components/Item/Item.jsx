import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = ({ name, image, old_price, new_price, id }) => {
  return (
    <div className=" w-[260px] flex flex-col gap-5 hover:scale-[1.1] duration-[0.6s] ">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} className="w-[300px] rounded-3xl" src={image} alt="" />
      </Link>
      <p className="mx-2">{name}</p>
      <div className="flex items-center  gap-5">
        <p className="font-semibold text-[18px] "> ${new_price}</p>
        <p className="line-through">${old_price}</p>
      </div>
    </div>
  );
};

export default Item;
