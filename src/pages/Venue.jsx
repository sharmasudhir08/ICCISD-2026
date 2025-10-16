import React from 'react'
import Banner from '../assets/Banner.webp'
import su from '../assets/su.png' // Sharda University background image
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Venue = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className='relative w-full'>
        <img src={Banner} className='w-full h-60 md:h-80 object-cover' alt='Banner' />

        {/* Overlay with SU background */}
        <div
          className='absolute top-0 left-0 w-full h-60 md:h-80 flex flex-col justify-center items-center px-4 text-center bg-cover bg-center'
          style={{
            backgroundImage: `url(${su})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        >
          <h1 className='text-3xl md:text-5xl font-semibold text-white drop-shadow-lg'>VENUE</h1>
          <h2 className='text-base md:text-xl text-white mt-2 drop-shadow-md'>
            Sharda University, Knowledge Park III, Greater Noida, Ruhallapur, Uttar Pradesh 201310.
          </h2>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className='w-full flex justify-center mt-8 px-4'>
        <iframe
          title='Sharda University Location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7039053899697!2d77.48699927549792!3d28.474334491687706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb77a23d6423%3A0x6e1e4e777fc3a70d!2sSharda%20University!5e0!3m2!1sen!2sin!4v1712345678901'
          width='100%'
          height='400'
          className='rounded-2xl shadow-lg max-w-6xl'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>

      <ContactUsLayout />
    </div>
  )
}

export default Venue
