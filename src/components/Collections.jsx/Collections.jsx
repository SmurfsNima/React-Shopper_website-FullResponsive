import React from "react";
import new_collections from "../../Assets/Assets/new_collections";
import Item from "../Item/Item";
const Collections = () => {
  return (
    <div className=" mb-[100px] flex flex-col  gap-3 justify-center items-center">
      <h2 className="font-bold text-4xl mt-5">NEW COLLECTION</h2>
      <hr className=" h-2 rounded-md w-[200px] mt-1 bg-black " />
      <div className="grid grid-cols-4 gap-8 mt-[50px]">
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
