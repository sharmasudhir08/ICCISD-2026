import React from 'react'
import Banner from '../assets/Banner.webp'
import CommitteeLayout from '../Layouts/Committee/CommitteeLayout'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Commitee = () => {
  return (
    
    <div className='bg-white'>

      <CommitteeLayout />
      <div className='h-12 text-sky-900 text-lg text-bold '>more members to be added soon...</div>

      <ContactUsLayout/>

    </div>
  )
}

export default Commitee