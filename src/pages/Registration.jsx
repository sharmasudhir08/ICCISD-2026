import React from 'react'
import Banner from '../assets/Banner.webp'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Registration = () => {
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
      <h1 className='w-[90%] mx-auto mt-8 text-2xl md:text-3xl text-left font-semibold text-sky-800'>Registration Fee</h1>

      {/* Registration Fee Tables */}
      <div className='w-[90%] mx-auto mt-8 flex flex-col md:flex-row justify-between items-start gap-8'>

        {/* IEEE Members */}
        <div className='w-full md:w-[45%] overflow-x-auto'>
          <table className='min-w-full border text-sm border-gray-300'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='border border-gray-300 p-2 font-bold'>IEEE Members</th>
                <th className='border border-gray-300 p-2 font-bold'>Registration Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Student", "₹ 7000"],
                ["Professional", "₹ 8000"],
                ["Industry Participants", "₹ 9500"],
                ["Foreign Participants", "300 USD"],
                ["Attendee only", "₹ 1500"],
              ].map(([label, value], i) => (
                <tr key={i}>
                  <td className='border border-gray-300 p-2'>{label}</td>
                  <td className='border border-gray-300 p-2'>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Non-IEEE Members */}
        <div className='w-full md:w-[45%] overflow-x-auto'>
          <table className='min-w-full border text-sm border-gray-300'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='border border-gray-300 p-2 font-bold'>Non IEEE Members</th>
                <th className='border border-gray-300 p-2 font-bold'>Registration Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Student", "₹ 7500"],
                ["Professional", "₹ 9000"],
                ["Industry Participants", "₹ 10000"],
                ["Foreign Participants", "350 USD"],
                ["Attendee only", "₹ 2000"],
              ].map(([label, value], i) => (
                <tr key={i}>
                  <td className='border border-gray-300 p-2'>{label}</td>
                  <td className='border border-gray-300 p-2'>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration Link */}
      <h1 className='w-[90%] mx-auto mt-12 text-base md:text-lg text-left text-gray-600'>
        <b>Registration Link:</b> <a href='#' className='text-sky-800 underline hover:text-sky-600'>Click here</a>
      </h1>

      {/* Payment Details */}
      <div className='w-[90%] mx-auto mt-10'>
        <h1 className='text-xl md:text-2xl text-gray-700 font-semibold'>Payment Details</h1>

        <div className='overflow-x-auto mt-5'>
          <table className='min-w-full text-sm font-semibold border border-gray-300'>
            <tbody>
              <tr>
                <td className='border border-gray-300 p-2'>Bank Name</td>
                <td className='border border-gray-300 p-2'>State Bank Of India</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>Branch Address</td>
                <td className='border border-gray-300 p-2'>
                  11456-ALPHA-6, Greater Noida, A3 Kaison Tower Commercial Bel, Alpha 1, Dist. Gautam Budh Nagar, Uttar Pradesh 201310
                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>Account Holder Name</td>
                <td className='border border-gray-300 p-2'>Shiva Economic Educational Development Foundation Trust</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>Account No.</td>
                <td className='border border-gray-300 p-2'>42269338564</td>
              </tr>
              <tr>
                <td className='border border-gray-300 p-2'>IFSC Code</td>
                <td className='border border-gray-300 p-2'>SBIN0011000</td>
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
