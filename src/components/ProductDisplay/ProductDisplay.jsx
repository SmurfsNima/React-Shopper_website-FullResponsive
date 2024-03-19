import React, { useContext } from "react";
import star from "../../Assets/Assets/star_icon.png";
import star_dull from "../../Assets/Assets/star_dull_icon.png";
import './ProductDisplay.css'
import { ShopContext } from "../context/Context";
const ProductDisplay = ({ product }) => {
  const {AddtoCart} = useContext(ShopContext)
  return (
    <div className="flex  lg:mx-[60px] md:mx-[30px] xs:flex-col">
      <div className="flex gap-5 basis-[46%] lg:gap-[10px] md:gap-[5px] sm:gap-0 sm:flex-col-reverse sm:justify-end sm:items-center xs:gap-[10px] xs:flex-row xs:m-auto">
        <div id="img-container" className="flex flex-col gap-4 lg:gap-[10px] sm:flex-row sm:gap-[6px]  sm:mt-1 xs:gap-[8px]   ">
          <img  src={product.image} alt="" />
          <img  src={product.image} alt="" />
          <img  src={product.image} alt="" />
          <img  src={product.image} alt="" />
        </div>
        <div>
          <img className="w-[563px] h-[550px] lg:w-auto lg:h-[470px] md:h-[350px]  sm:h-[400px] xs:w-[250px] xs:h-[330px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex basis-[46%] flex-col mx-[70px] max-lg:mx-[40px] sm:mx-[10px] xs:m-[5px]" >
        <h2 className="font-bold text-4xl lg:text-[22px] md:text-[18px] sm:text-[13px] xs:mt-3 xs:text-[20px] xs:font-medium ">{product.name}</h2>
        <div id="stars" className="flex my-5 gap-1 text-sm max-lg:gap-[3px] max-lg:text-[13px]  ">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" /> 
          <span>(122)</span>
        </div>
       
        <div className="flex items-center gap-4 my-6 max-lg:my-[10px] ">
        <div className="line-through">${product.old_price}</div>
        <div className="text-red-500 font-semibold text-xl">${product.new_price}</div>
        </div>
       
        <p className="text-sm lg:text-[13px] md:text-[12px] sm:text-[11px]">Lorem ipsum dol or sit amet consectetur adipisicing elit. Consectetur minima magni repellendus quis deserunt, a distinctio ipsam incidunt saepe alias.</p>
        <h1 className="mt-[40px] font-semibold text-xl text-slate-900 lg:mt-[20px] lg:text-[18px] md:my-[10px] md:mx-0 sm:mt-[10px] ">SELECT SIZE</h1>
        <div id="size-container" className="flex items-center gap-5 my-4 sm:gap-[5px] xs:my-[20px] xs:gap-[10px]">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button onClick={()=>AddtoCart(product.id)} className="bg-red-500 text-white w-[200px] font-semibold text-sm py-3 mb-6 cursor-pointer border-none outline-none lg:w-[150px] lg:py-[15px] lg:mb-[20px] sm:w-[100px] sm:text-[12px] md:py-[10px] md:px-0 xs:w-[130px] xs:text-[15px]">ADD TO CART</button>
        <p className="md:text-[12px] sm:text-[11px] "><span className="font-semibold">CATEGORY:</span> <span>{product.name}</span></p>
        <p className="md:text-[12px] sm:text-[11px] "><span className="font-semibold">Tags :</span> <span>Modern,Latest</span></p>
      </div>
      </div>
    
  );
};

export default ProductDisplay;
