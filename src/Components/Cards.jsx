import React from 'react'

const Cards = ({source,heading,content}) => {
  return (
    <div className='w-96 h-60 p-4 m-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
      <img src={source} className='w-16 h-16 mx-auto object-cover rounded-xl'></img>
      <h1 className='text-2xl text-gray-800 font-semibold'>{heading}</h1>
      <h2 className='text-lg p-2 flex justify-center items-center'>{content}</h2>
    </div>
  )
}

export default Cards