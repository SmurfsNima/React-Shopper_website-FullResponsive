import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import all_product from "../../Assets/Assets/all_product";
import remove_icon from "../../Assets/Assets/cart_cross_icon.png";
import "./CartItem.css";
const CartItem = () => {
  const { getTotalAmount, cartItems, RemovefromCart} =
    useContext(ShopContext);
    

  return (
    <div className="m-[100px] xs:m-[20px] ">
      <div className="format-main ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-[#e2e2e2] border-none" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="carts-item-format  ">
                <img id="product-img" className=" h-[100px]  " src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-[60px] h-[45px] border-2 border-[#ebebeb] bg-white ">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img id="remove-icon"
                  className="w-4 mx-10 cursor-pointer hover:opacity-80 "
                  onClick={() => RemovefromCart(e.id)}
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr className="h-1 bg-[#e2e2e2] border-none" />
            </div>
          );
        }
        return null;
      })}
      <div id="cart-fee" className="flex my-[100px]  ">
        <div className="flex-1 flex flex-col mr-[200px] gap-10 xs:mr-0">
          <h2 className="font-bold text-2xl">cart Total</h2>
          <div className="flex flex-col gap-10">
            <div className="cartsitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr className="h-1 w-full" />
            <div className="cartsitems-total-item">
              <p>Shipping Fee</p>
              <p>free</p>
            </div>
            <hr className="h-1 w-full" />
            <div className="cartsitems-total-item">
              <p>Total</p>
              <p className="font-bold text-2xl"> ${getTotalAmount()}</p>
            </div>
          </div>
          <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-white font-semibold text-lg cursor-pointer lg:max-w-[200px] lg:h-[45px] lg:text-[14px] xs:w-[150px] xs:h-[40px]  xs:text-[10px]">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 lg:w-auto lg:max-w-[500px] xs:flex-col ">
          <p className="text-[#555]">if you have a promo code, Enter it here</p>
          <div className="w-[500px] mt-[15px] h-[45px] pl-5 bg-[#eaeaea] xs:w-full ">
            <input
              className="border-none outline-none bg-transparent w-[330px] h-[50px] xs:w-full  "
              type="text"
              placeholder="promo code"
            />
            <button className="bg-black text-white h-full float-right px-10 cursor-pointer lg:w-[120px] lg:mt-[-50px] xs:mt-[-50px]  ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
