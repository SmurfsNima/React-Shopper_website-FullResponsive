import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import dropdown_icon from "../../Assets/Assets/dropdown_icon.png";
import Item from "../Item/Item";
import all_product from '../../Assets/Assets/all_product';
const Shopcategory = (props) => {
 
  console.log(all_product);
  // console.log(props);
  // 
  console.log(ShopContext);
  const filteredProducts = all_product.filter((product) => product.category === props.category);
  return (
    <div >
      <img className="w-[80%] m-auto my-[40px]" src={props.banner} alt="" />
      <div className="flex  items-center justify-between mx-[170px]">
        <p className="text-sm">
          <span className="font-semibold">Showing 1-12</span> Out of 36 products
        </p>
        <div className="flex items-center justify-center  border-[1px] border-black rounded-[75px] px-4 py-2 text-sm ">
          Sort by <img className="w-[10px]" src={dropdown_icon} alt="" />
        </div>
      </div>
      <div  className="grid grid-cols-3 my-[20px] mx-[170px] gap-20">
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
      <div className="flex items-center justify-center  my-[150px] mx-auto w-[200px] h-[59px] text-lg cursor-pointer bg-slate-100 font-medium rounded-[75px]">
Explore more
      </div>
    </div>
  );
};

export default Shopcategory;
