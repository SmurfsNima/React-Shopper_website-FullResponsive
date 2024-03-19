import React from "react";
import arrow_icon from "../../Assets/Assets/breadcrum_arrow.png";
const BreadCrum = ({product}) => {
  
 
  return (

      <div className="flex items-center gap-2 text-lg font-semibold my-[30px] lg:my-[30px] lg:mx-[50px] lg:text-[14px] md:my-[30px] md:mx-[30px] md:text-[13px] sm:my-[30px] sm:mx-[12px] sm:text-[12px] xs:my-[20px] xs:mx-[10px]  xs:text-[9px] ">
        HOME <img src={arrow_icon} alt="" /> SHOP{" "}
        <img src={arrow_icon} alt="" /> {product.category}{" "}
        <img src={arrow_icon} alt="" /> {product.name}
      </div>

  );
};

export default BreadCrum;
