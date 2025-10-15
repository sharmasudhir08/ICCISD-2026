import React from 'react';
import shardalogo from '../assets/shardalogo.png';
import ieee from '../assets/ieeeup.png';

const TopBar = () => {
  return (
    <div className='w-full px-4 py-2 flex flex-row sm:flex-row justify-between items-center bg-white'>
      
      <img
        src={shardalogo}
        alt='Sharda University'
        className='w-48 sm:w-64 md:w-80 lg:w-96 object-contain'
      />

      
      <div className='flex flex-col items-center relative mt-4 md:mt-0'>
        <img
          src={ieee}
          alt='IEEE Logo'
          className='w-24 sm:w-32 md:w-44 object-contain'
        />
      </div>
    </div>
  );
};

export default TopBar;
