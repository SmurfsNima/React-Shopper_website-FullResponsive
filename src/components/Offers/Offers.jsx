import React from 'react'
import exclusive from '../../Assets/Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='w-[80%] h-[60vh] rounded-3xl mb-[150px] m-[auto] flex items-center justify-center bg-gradient-to-b from-pink-200 to-white px-[100px]'>
      <div className='flex-1 flex gap-5 flex-col justify-center '>
        <h1 className='font-semibold text-6xl'>Exclusive</h1>
        <h1 className='font-semibold text-5xl'>Offers For You</h1>
        <p className='text-[22px] font-semibold'>Only ON BEST SELLERS PRODUCTS</p>
        <button className='bg-red-500 text-white w-[250px] h-[60px] rounded-[35px] border-none font-medium mt-[20px]'>Check Now</button>
      </div>
      <div className='flex flex-1 items-center justify-end pt-[70px] '>
        <img className='w-[350px]' src={exclusive} alt="" />
      </div>
    </div>
  )
}

export default Offers
