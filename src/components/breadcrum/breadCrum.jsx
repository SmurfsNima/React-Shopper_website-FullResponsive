import React from "react";
import arrow_icon from "../../Assets/Assets/breadcrum_arrow.png";
const BreadCrum = ({product}) => {
  
 
  return (

      <div className="flex items-center gap-2 text-lg font-semibold my-[30px]">
        HOME <img src={arrow_icon} alt="" /> SHOP{" "}
        <img src={arrow_icon} alt="" /> {product.category}{" "}
        <img src={arrow_icon} alt="" /> {product.name}
      </div>

  );
};

export default BreadCrum;
