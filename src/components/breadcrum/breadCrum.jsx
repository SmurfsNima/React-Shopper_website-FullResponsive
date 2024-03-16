import React from "react";
import arrow_icon from "../../Assets/Assets/arrow.png";
const BreadCrum = ({product}) => {
  
 
  return (
    <>
      <div>
        HOME <img src={arrow_icon} alt="" /> SHOP{" "}
        <img src={arrow_icon} alt="" /> {product.category}{" "}
        <img src={arrow_icon} alt="" /> {product.name}
      </div>
      <h2>spaoidopasidpoa</h2>
    </>
  );
};

export default BreadCrum;
