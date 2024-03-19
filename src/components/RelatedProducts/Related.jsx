import React from 'react'
import data_product from '../../Assets/Assets/data'
import Item from '../Item/Item'
const Related = () => {
  return (
    <div className='flex flex-col mt-[70px] h-[90vh] gap-3  items-center'>
        <h1 className= 'font-bold text-4xl lg:text-3xl md:text-2xl sm:text-xl'>Related Products</h1>
        <hr className='h-[6px] rounded-md w-[200px] mt-1 bg-black lg:h-[3px] lg:w-[120px] md:h-[4px] md:w-[160px] sm:h-[0px] sm:w-[100px]'/>
        <div className='grid grid-cols-4 gap-8 mt-[50px] lg:gap-[20px] lg:mt-[30px] sm:my-[20px] sm:gap-[16px] sm:grid  sm:grid-cols-2 xs:grid xs:grid-cols-2 xs:gap-[20px]'>
        {data_product.map((item,i)=>(
            <Item  key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
            />
        ))}
        </div>      
    </div>
  )
}

export default Related
