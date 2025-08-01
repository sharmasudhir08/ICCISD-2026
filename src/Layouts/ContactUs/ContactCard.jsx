import React from 'react'

const ContactCard = ({name,email,Phone}) => {
  return (
    <div className='w-[50%]'>
        <h1 className='text-lg text-gray-900 font-semibold'>{name}</h1>
        <h2 className='text-sm font-semibold'>{email}</h2>
        {Phone?<h2 className='text-sm font-semibold'>{Phone}</h2>:<div></div>}
    </div>
  )
}

export default ContactCard