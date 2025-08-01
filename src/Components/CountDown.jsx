import React from 'react'
import { useState, useEffect } from 'react'

const CountDown = () => {

  const [day,setDay]=useState(0);
  const [hour,setHour]=useState(0);
  const [min,setMin]=useState(0);
  const [sec,setSec]=useState(0);

  const targetDate = new Date('2026-05-21T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setDay(days);
        setHour(hours);
        setMin(minutes);
        setSec(seconds);
      } else {
        // Countdown complete
        setDay(0);
        setHour(0);
        setMin(0);
        setSec(0);
        clearInterval(interval);
      }
    },1000);

    return () => clearInterval(interval);

  },[]);


  return (
    <div className='w-[80%] mx-auto p-2 h-80 mt-8 border-2 border-gray-300 rounded-lg shadow-xl flex justify-between items-center  bg-gray-50'>

      <section className='width-[25%] -mt-9 p-2 text-left'>
          <h1 className='text-3xl text-sky-800 font-bold'>IMPORTANT DATES</h1>
          <ul className='mt-3 text-lg text-gray-600'>
            <li className='mt-2'>Paper Submission Deadline: <b className='text-orange-700'>15th February 2026</b></li>
            <li className='mt-2'>Notification of Acceptance: <b className='text-orange-700'>20th March 2026</b></li>
            <li className='mt-2'>Camera Ready Deadline: <b className='text-orange-700'>12th April 2026</b></li>
            <li className='mt-2'>Registration: <b className='text-orange-700'>19th April 2026</b></li>
            <li className='mt-2'>Conference Dates: <b className='text-orange-700'>21st – 22nd May 2026</b></li>
          </ul>
      </section>

      <section className='w-[40%] -mt-12 flex flex-col items-center justify-center'>
      
        <div className='text-3xl text-sky-800 font-bold'> CONFERENCE BEGINS IN </div>

        <section className='mt-8 justify-center gap-12 flex items-center'>

          <div className='w-16 h-16 border rounded-2xl border-gray-300'>
            <div className='h-[80%] text-4xl text-center text-white font-semibold bg-sky-800 flex flex-col justify-center items-center'>{day}</div>
            <div className='text-sm text-gray-800 font-semibold'>Days</div>
          </div>

          <div className='w-16 h-16 border rounded-2xl border-gray-300'>
            <div className='h-[80%] text-4xl text-center text-white font-semibold bg-sky-800 flex flex-col justify-center items-center'>{hour}</div>
            <div className='text-sm text-gray-800 font-semibold'>Hours</div>
          </div>

          <div className='w-16 h-16 border rounded-2xl border-gray-300'>
            <div className='h-[80%] text-4xl text-center text-white font-semibold bg-sky-800 flex flex-col justify-center items-center'>{min}</div>
            <div className='text-sm text-gray-800 font-semibold'>Minutes</div>
          </div>

          <div className='w-16 h-16 border rounded-2xl border-gray-300'>
            <div className='h-[80%] text-4xl text-center text-white font-semibold bg-sky-800 flex flex-col justify-center items-center'>{sec}</div>
            <div className='text-sm text-gray-800 font-semibold'>Seconds</div>
          </div>


        </section>
      
      </section>

      

    </div>
  )
}

export default CountDown