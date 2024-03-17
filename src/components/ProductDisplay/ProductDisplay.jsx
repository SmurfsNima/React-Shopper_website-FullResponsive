import React, { useContext } from "react";
import star from "../../Assets/Assets/star_icon.png";
import star_dull from "../../Assets/Assets/star_dull_icon.png";
import './ProductDisplay.css'
import { ShopContext } from "../context/Context";
const ProductDisplay = ({ product }) => {
  const {AddtoCart} = useContext(ShopContext)
  return (
    <div className="flex my-0 mx-170px">
      <div className="flex gap-5 basis-[46%]">
        <div id="img-container" className="flex flex-col gap-4  ">
          <img  src={product.image} alt="" />
          <img  src={product.image} alt="" />
          <img  src={product.image} alt="" />
          <img  src={product.image} alt="" />
        </div>
        <div>
          <img className="w-[563px] h-[550px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex basis-[46%] flex-col mx-[70px]">
        <h2>{product.name}</h2>
        <div className="flex my-2 gap-1 text-sm">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" /> 
          <span>(122)</span>
        </div>
       
        <div className="flex items-center gap-4 my-6">
        <div className="line-through">${product.old_price}</div>
        <div className="text-red-500 font-semibold text-xl">${product.new_price}</div>
        </div>
       
        <p className="text-sm">Lorem ipsum dol or sit amet consectetur adipisicing elit. Consectetur minima magni repellendus quis deserunt, a distinctio ipsam incidunt saepe alias.</p>
        <h1 className="mt-[40px] font-semibold text-xl text-slate-900">SELECT SIZE</h1>
        <div id="size-container" className="flex items-center gap-5 my-4 ">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button onClick={()=>AddtoCart(product.id)} className="bg-red-500 text-white w-[200px] font-semibold text-sm py-3 mb-6 cursor-pointer border-none outline-none">ADD TO CART</button>
        <p><span className="font-semibold">CATEGORY:</span> <span>{product.name}</span></p>
        <p><span className="font-semibold">Tags :</span> <span>Modern,Latest</span></p>
      </div>
      </div>
    
  );
};

export default ProductDisplay;
