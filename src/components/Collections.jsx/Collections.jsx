import React from "react";
import new_collections from "../../Assets/Assets/new_collections";
import Item from "../Item/Item";
const Collections = () => {
  return (
    <div className=" mb-[100px] flex flex-col  gap-3 justify-center items-center">
      <h2 className='font-bold text-4xl lg:text-3xl md:text-2xl sm:text-xl'>NEW COLLECTION</h2>
      <hr className='h-[6px] rounded-md w-[200px] mt-1 bg-black lg:h-[3px] lg:w-[120px] md:h-[4px] md:w-[160px] sm:h-[0px] sm:w-[100px]'/>
      <div className="grid grid-cols-4 gap-8 mt-[50px] lg:gap-[20px] lg:mt-[30px] sm:my-[20px] sm:gap-[16px] sm:grid  sm:grid-cols-2 xs:grid xs:grid-cols-2 xs:gap-[20px]">
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
