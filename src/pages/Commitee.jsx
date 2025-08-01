import React from 'react'
import Banner from '../assets/Banner.webp'
import CommitteeLayout from '../Layouts/Committee/CommitteeLayout'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Commitee = () => {
  return (
    
    <div className='bg-white'>

      <img src={Banner} className='w-full h-60'></img>
      <div className='w-full h-60 absolute top-40 left-0 bg-gray-800 opacity-80 flex flex-col justify-center items-center'>
        <h1 className='text-white'>COMMITTEE</h1>
      </div>
      

      <CommitteeLayout />
      <div className='h-12 text-sky-900 text-lg text-bold '>more members to be added soon...</div>

      <ContactUsLayout/>

    </div>
  )
}

export default Commitee