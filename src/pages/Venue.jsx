import React from 'react'
import Banner from '../assets/Banner.webp'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Venue = () => {
  return (
    <div>
      <div className='relative w-full'>
        <img src={Banner} className='w-full h-60 md:h-80 object-cover' alt='Banner' />

        <div className='absolute top-0 left-0 w-full h-60 md:h-80 bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center px-4 text-center'>
          <h1 className='text-3xl md:text-5xl font-semibold text-white'>VENUE</h1>
          <h2 className='text-base md:text-xl text-white mt-2'>
            Sharda University, Knowledge Park III, Greater Noida, Ruhallapur, Uttar Pradesh 201310.
          </h2>
        </div>
      </div>

      <ContactUsLayout />
    </div>
  )
}

export default Venue
