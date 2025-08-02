import React from 'react'
import Banner from '../assets/Banner.webp'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Registration = () => {
  return (
    <div>


      <img src={Banner} className='w-full h-60'></img>
      <div className='w-full h-60 absolute top-40 left-0 bg-gray-800 opacity-80 flex flex-col justify-center items-center'>
        <h1 className='text-white'>REGISTRATION</h1>
      </div>

      <h1 className='w-[80%] mx-auto mt-3 text-3xl text-left text-bold text-sky-800 font-semibold'>Registration Fee</h1>

      <div className='w-[80%] p-2 mx-auto h-52 mt-20 flex justify-between items-center'>

        <table className='w-[45%] mx-auto mt-5 border text-sm border-gray-300'>
          <tr className='bg-gray-200'>
            <th className='border border-gray-300 p-2 font-bold'>IEEE Members</th>
            <th className='border border-gray-300 p-2 font-bold'>Registration Fee</th>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Student</td>
            <td className='border border-gray-300 p-2'>₹ 7000</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Professional</td>
            <td className='border border-gray-300 p-2'>₹ 8000</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Industry Participants</td>
            <td className='border border-gray-300 p-2'>₹ 9500</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Foreign Participants</td>
            <td className='border border-gray-300 p-2'>300USD</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Attendee only</td>
            <td className='border border-gray-300 p-2'>₹ 1500</td>
          </tr>
        </table>


        <table className='w-[45%] mx-auto mt-10 border text-sm border-gray-300'>
          <tr className='bg-gray-200'>
            <th className='border border-gray-300 p-2 font-bold'>Non IEEE member</th>
            <th className='border border-gray-300 p-2 font-bold'>Registration Fee</th>
          </tr> 
          <tr>
            <td className='border border-gray-300 p-2'>Student</td>
            <td className='border border-gray-300 p-2'>₹ 7500</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Professional</td>
            <td className='border border-gray-300 p-2'>₹ 9000</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Industry Participants</td>
            <td className='border border-gray-300 p-2'>₹ 10000</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Foreign Participants</td>
            <td className='border border-gray-300 p-2'>350USD</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Attendee only</td>
            <td className='border border-gray-300 p-2'>₹ 2000</td>
          </tr>
          </table>

      </div>

      <h1 className='w-[80%] mx-auto mt-16 text-lg text-left text-gray-600'><b>Registration Link:</b> <a hreft='#' className='text-sky-800 hover:cursor-pointer'>Click here</a></h1>

      <div className='w-[80%] mx-auto mt-5 '>
        <h1 className='mt-10 text-2xl text-gray-700 text-left font-semibold'>Payment Details</h1>

        <table className='w-[45%] text-sm font-semibold border border-gray-300 mt-5'>
          <tr>
            <td className='border border-gray-300 p-2'>Bank Name</td>
            <td className='border border-gray-300 p-2'>State Bank Of India.</td>
          </tr>
          <tr>
            <td className='border border-gray-300 p-2'>Branch Address</td>
            <td className='border border-gray-300 p-2'>11456-ALPHA-6, Greater Noida, A3 Kaison Tower Commercial Bel, Alpha 1, Dist. Gautam Budh Nagar, Uttar Pradesh 201310</td>
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
        </table>
      </div>


      <ContactUsLayout/>

    </div>
  )
}

export default Registration