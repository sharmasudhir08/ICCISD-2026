import React from 'react'

const Cards = ({source,heading,content}) => {
  return (
    <div className='w-96 h-64 p-4 m-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
      <img src={source} className='w-16 h-16 mx-auto object-cover rounded-xl'></img>
      <h1 className='text-xl text-gray-800 font-semibold sm:text-2xl'>{heading}</h1>
      <h2 className='text-sm p-2 flex justify-center items-center sm:-lg'>{content}</h2>
    </div>
  )
}

export default Cards