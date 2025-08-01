import React from 'react'
import Banner from '../assets/Banner.webp'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Venue = () => {
  return (
    <div>
    
      <div className='relative'>
        <img src={Banner} className='w-[100%] h-80'></img>
        <div className='w-[100%] h-80 bg-gray-800 flex flex-col gap-4 justify-center items-center opacity-70 absolute top-0 left-0 text-5xl text-white font-semibold'>
          <h1>VENUE</h1>
          <h2 className='text-xl'>Sharda University, Knowledge Park III, Greater Noida, Ruhallapur, Uttar Pradesh 201310.</h2>
        </div>
      </div>

      <ContactUsLayout/>
    </div>
  )
}

export default Venue