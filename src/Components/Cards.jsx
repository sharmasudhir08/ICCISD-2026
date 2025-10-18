import React from 'react'


const Cards = ({source, heading, content, alt = ''}) => {
  return (
  <article className='bg-white rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 p-8 flex flex-col items-center text-center gap-4 w-full min-h-[280px]'>
      <div className='rounded-full p-4 flex items-center justify-center mb-3 bg-gradient-to-tr from-sky-50 to-white ring-1 ring-sky-100'>
        <img src={source} alt={alt || heading} className='w-16 h-16 object-contain rounded-sm' />
      </div>
      <h3 className='text-xl text-gray-800 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-indigo-600'>{heading}</h3>
      <p className='text-base text-gray-600 mt-1'>{content}</p>
    </article>
  )
}

export default Cards