import React from 'react'
import data_product from '../../Assets/Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='flex h-[90vh] w-full flex-col gap-3 justify-center items-center  lg:h-[70vh] md:h-[60vh]  sm:gap-[6px] sm:h-[90vh] xs:h-[100vh]  '>
        <h2 className='font-bold text-4xl lg:text-3xl md:text-2xl sm:text-xl'>Popular in women</h2>
        <hr className='h-[6px] rounded-md w-[200px] mt-1 bg-black lg:h-[3px] lg:w-[120px] md:h-[4px] md:w-[160px] sm:h-[0px] sm:w-[100px] '/>
        <div className='flex gap-4  items-center mt-[80px] lg:gap-[20px] lg:mt-[30px] sm:my-[20px] sm:gap-[16px] sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-2 xs:gap-[20px]'>
        {data_product.map((item, index) =>{
          return  <Item key={index} id={item.id} name = {item.name} image = {item.image} old_price={item.old_price} new_price={item.new_price} />
        })}
        </div>
      
    </div>
  )
}
export default Popular

