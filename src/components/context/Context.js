import React, { createContext, useState } from "react";
import all_product from "../../Assets/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaulCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaulCart());

  const AddtoCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    console.log(cartItems);
  };
  const RemovefromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };
  const getTotalAmount = () => {
    let TotlalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        TotlalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return TotlalAmount;
  };
  const getTotlaCartItems = () => {
    let TotlaItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        TotlaItem += cartItems[item];
      }
    }
    return TotlaItem;
  };
  console.log(getTotalAmount);
  const contextValue = {
    cartItems,
    AddtoCart,
    RemovefromCart,
    getDefaulCart,
    getTotalAmount,
    getTotlaCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
