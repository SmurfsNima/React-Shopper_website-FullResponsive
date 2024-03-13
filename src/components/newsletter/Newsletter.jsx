import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[80%] h-[40vh] bg-gradient-to-b from-pink-200 to-white flex flex-col justify-center items-center m-[auto]'>
        <h2 className='text-3xl font-semibold'> Get Exclusive Offers On Your Email</h2>
        <p className='mt-5'>Subscribe to our Newsletter and stay updated</p>
        <div className='w-[50%] mt-5 flex justify-center items-center rounded-[80px] border-stone-400'>
            <input className=' outline-none bg-transparent text-lg ml-7 w-[70%]' type="text" placeholder='your email' />
            <button className='bg-black text-white px-6 py-2 rounded-3xl text-md'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
