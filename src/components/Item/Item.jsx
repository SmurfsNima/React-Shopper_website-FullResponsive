import React from 'react'
import './item.css'
const Item = ({name , image , old_price , new_price}) => {
  return (
    <div className=' w-[260px] flex flex-col gap-5 hover:scale-[1.1] duration-[0.6s] '>
      <img className='w-[300px] rounded-3xl' src={image} alt="" />
      <p className='mx-2'>{name}</p>
      <div className='flex items-center  gap-5'>
        <p className='font-semibold text-[18px] ' > ${new_price}</p>
        <p className='line-through'>${old_price}</p>
      </div>
    </div>
  )
}

export default Item
