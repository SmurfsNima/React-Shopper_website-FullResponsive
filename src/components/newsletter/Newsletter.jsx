import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[80%] h-[40vh] rounded-3xl bg-gradient-to-b from-pink-200 to-white flex flex-col justify-center items-center m-[auto] gap-7 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3  xs: xs:h-[30vh] xs:p-0 xs:gap-[15px]'>
        <h2 className='text-3xl font-semibold  lg:text-2xl md:text-xl sm:text-lg xs:text-[14px]'> Get Exclusive Offers On Your Email</h2>
        <p className='xs:text-[13px] xs:max-w[200px] xs:text-center'>Subscribe to our Newsletter and stay updated</p>
        <div className='w-[50%]  flex justify-center items-center rounded-[80px] border-stone-400 sm:w-[320px] xs:w-[290px]'>
            <input className=' outline-none bg-transparent text-lg ml-7 w-[70%] sm:w-[150px] xs:w-[130px]' type="text" placeholder='your email' />
            <button className='bg-black text-white px-6 py-2 rounded-3xl text-md lg:px-5 sm:w-[120px] sm:h-[50px] sm:text-[16px] xs:w-[100px] xs:h-[40px] xs:text-[13px]
            '>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
