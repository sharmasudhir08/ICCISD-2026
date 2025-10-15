import React from 'react';
import shardalogo from '../assets/shardalogo.png';
import ieee from '../assets/ieeeup.png';

const TopBar = () => {
  return (
  <div className="w-full px-4 py-3 flex flex-row justify-between items-center bg-gradient-to-r from-sky-100 via-white to-amber-100 shadow-md rounded-b-2xl border-b border-sky-200">
      
      <div className="flex flex-row items-center gap-6 w-full justify-between">
        <img
          src={shardalogo}
          alt="Sharda University"
          className="h-16 sm:h-20 md:h-24 object-contain drop-shadow-md bg-white rounded-xl p-2 border border-gray-200"
        />
        <img
          src={ieee}
          alt="IEEE Logo"
          className="h-12 sm:h-16 md:h-20 object-contain drop-shadow-md bg-white rounded-xl p-2 border border-gray-200"
        />
      </div>
    </div>
  );
};

export default TopBar;
