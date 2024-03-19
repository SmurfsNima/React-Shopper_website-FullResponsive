import React from 'react'
import exclusive from '../../Assets/Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='w-[80%] h-[60vh] rounded-3xl mb-[150px] m-[auto] flex items-center justify-center bg-gradient-to-b from-pink-200 to-white px-[100px] lg:px-[80px] lg:mb-[120px] md:px-[60px] md:mb-[80px] md:h-[40vh] sm:px-[40px] sm:pt sm:h-[40vh] sm:mb-[60px] xs:h-[25vh]   xs:mb-[40px] xs:px-[20px] '>
      <div className='flex-1 flex gap-5 flex-col justify-center '>
        <h1 className='font-semibold text-6xl lg:text-3xl md:text-2xl sm:text-[16px] xs:text-[16px] '>Exclusive</h1>
        <h1 className='font-semibold text-5xl lg:text-3xl md:text-2xl sm:text-[16px] xs:text-[16px] '>Offers For You</h1>
        <p className='text-[22px] font-semibold lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[12px]'>Only ON BEST SELLERS PRODUCTS</p>
        <button className='bg-red-500 text-white w-[250px] h-[60px] rounded-[35px] border-none font-medium mt-[20px] lg:w-[220px] lg:h-[50px] lg:text-lg md:w-[190px] md:h-[40px] md:text-[14px] md:mt-[10px] sm:w-[150px] sm:h-[30px] xs:w-[100px] xs:h-[25px] xs:text-[10px] xs:mt-0'>Check Now</button>
      </div>
      <div className='flex flex-1 items-center justify-end pt-[70px] lg:pt-[30px] md:pt-[8px] sm:pt-0  xs:pt-0'>
        <img className='w-[350px] md:w-[220px] sm:w-[180px] xs:w-[140px]' src={exclusive} alt="" />
      </div>
    </div>
  )
}

export default Offers
