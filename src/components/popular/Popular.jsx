import React from 'react'
import data_product from '../../Assets/Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='flex h-[90vh] flex-col gap-3 justify-center items-center '>
        <h2 className='font-bold text-4xl'>Popular in women</h2>
        <hr className='h-[6px] rounded-md w-[200px] mt-1 bg-black '/>
        <div className='flex gap-4 items-center mt-[80px]'>
        {data_product.map((item, index) =>{
          return  <Item key={index} id={item.id} name = {item.name} image = {item.image} old_price={item.old_price} new_price={item.new_price} />
        })}
        </div>
      
    </div>
  )
}
export default Popular

