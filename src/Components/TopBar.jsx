import React from 'react'
import shardalogo from '../assets/shardalogo.png'
import ieee from '../assets/ieee.jpg'
const TopBar = () => {
  return (
    <div className='w-[100%] h-28 flex justify-between text-6xl text-center '>
        <img src={shardalogo} className='w-96'></img>
        <div>
          <img src={ieee} className='w-44'></img>
          <h1 className='text-sm absolute top-20 right-8 text-amber-700'>to be approved</h1>
        </div>
        
    </div>
  )
}

export default TopBar