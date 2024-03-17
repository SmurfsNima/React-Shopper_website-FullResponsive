import React from 'react'
import data_product from '../../Assets/Assets/data'
import Item from '../Item/Item'
const Related = () => {
  return (
    <div className='flex flex-col mt-[70px] h-[90vh] gap-3  items-center'>
        <h1 className='font-bold text-5xl'>Related Products</h1>
        <hr className='w-[250px] h-[6px] rounded-md bg-[#252525]' />
        <div className='grid grid-cols-4 gap-7 mt-10'>
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
