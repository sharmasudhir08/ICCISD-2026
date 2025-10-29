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
      {/* Banner Section (magenta gradient background) */}
      <div className="relative w-full">
  <div className="w-full min-h-[96px] md:min-h-[140px] relative bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-500 flex items-center">
          {/* subtle radial vignette to focus the center heading */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.35) 100%)'
            }}
            aria-hidden
          />
          <div className="max-w-4xl w-full px-4 py-4 mx-auto">
            <h1 className="text-white drop-shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
              REGISTRATION
            </h1>
          </div>
        </div>
      </div>

  {/* Heading */}
  <h1 className='max-w-6xl mx-auto mt-8 text-2xl md:text-3xl text-left font-semibold text-gray-900 px-4'>Registration Fee</h1>

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
      <h1 className='max-w-6xl mx-auto mt-6 px-4 text-base md:text-lg text-left text-gray-800'>
        <b>Registration Link:</b> <a href='#' className='text-gray-900 underline hover:text-gray-700'>Click here</a>
      </h1>

      {/* Payment Details */}
      <div className='max-w-6xl mx-auto px-4 mt-6'>
  <h1 className='text-xl md:text-2xl text-gray-900 font-semibold'>Payment Details</h1>

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
