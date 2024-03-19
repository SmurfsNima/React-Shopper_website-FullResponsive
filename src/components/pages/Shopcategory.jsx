import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import dropdown_icon from "../../Assets/Assets/dropdown_icon.png";
import Item from "../Item/Item";
import all_product from '../../Assets/Assets/all_product';
const Shopcategory = (props) => {
 

  // console.log(props);
  // 

  const filteredProducts = all_product.filter((product) => product.category === props.category);
  return (
    <div className="pl-[3%]" >
      <img className="w-[80%] m-auto my-[40px] max-lg:my-[20px] max-lg:mx-auto" src={props.banner} alt="" />
      <div className="flex  items-center justify-between mx-[170px] max-lg:w-[90%] max-lg:m-auto">
        <p className="text-sm max-lg:text-[12px]">
          <span className="font-semibold">Showing 1-12</span> Out of 36 products
        </p>
        <div className="flex items-center justify-center  border-[1px] border-black rounded-[75px] px-4 py-2 text-sm max-lg:py-[5px] max-lg:px-[10px] max-lg:text-[12px]  ">
          Sort by <img className="w-[10px]" src={dropdown_icon} alt="" />
        </div>
      </div>
      <div  className="grid grid-cols-4 my-[20px] mx-auto gap-6  lg:w-[90%] lg:my-[25px] lg:mx-auto sm:grid-cols-3 sm:w-[95%] xs:grid-cols-2 ">
        {filteredProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex items-center justify-center  my-[150px] mx-auto w-[200px] h-[59px] text-lg cursor-pointer bg-slate-100 font-medium rounded-[75px] max-lg:my-[100px]">
Explore more
      </div>
    </div>
  );
};

export default Shopcategory;
