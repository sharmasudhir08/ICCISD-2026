import React, { useState } from 'react'
import Banner from '../assets/Banner.webp'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Registration = () => {
  const [tab, setTab] = useState('ieee')

  const ieeeRows = [
    ["Student", "₹ 7000"],
    ["Professional", "₹ 9000"],
    ["Industry Participants", "₹ 11000"],
    ["Foreign Participants", "300 USD"],
    ["Attendee only", "₹ 2500"],
  ]

  const nonIeeeRows = [
    ["Student", "₹ 8000"],
    ["Professional", "₹ 10000"],
    ["Industry Participants", "₹ 12000"],
    ["Foreign Participants", "400 USD"],
    ["Attendee only", "₹ 3000"],
  ]

  return (
    <div>
      {/* Banner Section */}
      <div className='relative w-full'>
        <img src={Banner} className='w-full h-60 md:h-80 object-cover' alt="Banner" />
        <div className='absolute top-0 left-0 w-full h-60 md:h-80 bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center text-center px-4'>
          <h1 className='text-white text-3xl md:text-5xl font-bold'>REGISTRATION</h1>
        </div>
      </div>

      {/* Heading */}
      <h1 className='max-w-6xl mx-auto mt-8 text-2xl md:text-3xl text-left font-semibold text-sky-800 px-4'>Registration Fee</h1>

      {/* Tabbed Fee Card */}
      <div className='max-w-6xl mx-auto px-4 mt-6'>
        <div className='bg-white rounded-2xl shadow-md p-4'>
          <div className='flex gap-3 items-center'>
            <button
              onClick={() => setTab('ieee')}
              className={`px-3 py-1.5 rounded-full font-semibold text-sm md:text-base transition ${tab === 'ieee' ? 'bg-amber-500 text-sky-900' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              IEEE Members
            </button>

            <button
              onClick={() => setTab('non')}
              className={`px-3 py-1.5 rounded-full font-semibold text-sm md:text-base transition ${tab === 'non' ? 'bg-amber-500 text-sky-900' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Non-IEEE Members
            </button>
          </div>

          <div className='mt-4 overflow-x-auto'>
            <table className='min-w-full text-sm border border-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='p-3 text-center text-sm font-medium'>{tab === 'ieee' ? 'IEEE Members' : 'Non IEEE Members'}</th>
                  <th className='p-3 text-center text-sm font-medium'>Registration Fee</th>
                </tr>
              </thead>
              <tbody>
                {(tab === 'ieee' ? ieeeRows : nonIeeeRows).map(([label, value], i) => (
                  <tr key={i} className='even:bg-gray-50'>
                    <td className='p-3 border-t border-gray-100 text-center'>{label}</td>
                    <td className='p-3 border-t border-gray-100 text-center'>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Registration Link */}
      <h1 className='max-w-6xl mx-auto mt-6 px-4 text-base md:text-lg text-left text-gray-600'>
        <b>Registration Link:</b> <a href='#' className='text-sky-800 underline hover:text-sky-600'>Click here</a>
      </h1>

      {/* Payment Details */}
      <div className='max-w-6xl mx-auto px-4 mt-6'>
        <h1 className='text-xl md:text-2xl text-gray-700 font-semibold'>Payment Details</h1>

        <div className='overflow-x-auto mt-5'>
          <table className='min-w-full text-sm font-semibold border border-gray-300'>
            <tbody>
              <tr>
                <td className='border border-gray-300 p-2 text-center'>Bank Name</td>
                <td className='border border-gray-300 p-2 text-center'>Coming soon...</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2 text-center'>Branch Address</td>
                <td className='border border-gray-300 p-2 text-center'>
                  Coming soon...
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2 text-center'>Account Holder Name</td>
                <td className='border border-gray-300 p-2 text-center'>Coming soon...</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2 text-center'>Account No.</td>
                <td className='border border-gray-300 p-2 text-center'>Coming soon...</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2 text-center'>IFSC Code</td>
                <td className='border border-gray-300 p-2 text-center'>Coming soon...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Section */}
      <ContactUsLayout />
    </div>
  )
}

export default Registration
