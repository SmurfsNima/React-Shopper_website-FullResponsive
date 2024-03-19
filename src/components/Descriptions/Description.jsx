import React from 'react'
import  './Description.css'
const Description = () => {
  return (
    <div className='mt-[80px] lg:m-[60px] sm:mx-[20px]'>
        <div id='boxes' className='flex items-center ' >
            <div className='font-semibold text'>Description</div>
            <div className='bg-[#fbfbfb] text-[#555]'>Reviews (122)</div>
        </div>
        <div className=' flex flex-col  gap-6 p-[40px] pb-[70px] border-[1px] sm:text-[14px] '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore ipsum, a atque rerum possimus similique facilis ab eos quibusdam quis mollitia minus aperiam facere culpa enim laborum rem nobis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam libero enim tenetur. Magnam, labore!</p>
        </div>
      
    </div>
  )
}

export default Description
