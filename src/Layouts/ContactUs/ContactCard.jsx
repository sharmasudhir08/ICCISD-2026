import React from 'react';

const ContactCard = ({ name, email, Phone }) => {
  return (
    <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%] mb-6 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-md border border-indigo-200'>
      <h1 className='text-base sm:text-lg text-gray-900 font-semibold mb-2 break-words'>{name}</h1>
      <h2 className='text-xs sm:text-sm font-medium text-indigo-700 mb-1 break-words'>{email}</h2>
      {Phone && <h2 className='text-xs sm:text-sm font-medium text-purple-700 break-words'>{Phone}</h2>}
    </div>
  );
};

export default ContactCard;
