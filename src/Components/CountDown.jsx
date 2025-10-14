import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

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
        setDay(0);
        setHour(0);
        setMin(0);
        setSec(0);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-[90%] mx-auto p-4 h-auto mt-8 border-2 border-gray-300 rounded-lg shadow-xl flex flex-col lg:flex-row justify-between items-center bg-gray-50 gap-6'>

      {/* Left Section */}
      <section className='w-full lg:w-[50%] p-2 text-left'>
        <h1 className='text-2xl md:text-3xl text-sky-800 font-bold'>IMPORTANT DATES</h1>
        <ul className='mt-3 text-base md:text-lg text-gray-600'>
          <li className='mt-2'>Paper Submission Deadline: <b className='text-orange-700'>January 12, 2026</b></li>
          <li className='mt-2'>Notification of Acceptance: <b className='text-orange-700'>March 8, 2026</b></li>
          <li className='mt-2'>Camera Ready Deadline: <b className='text-orange-700'>March 29, 2026</b></li>
          <li className='mt-2'>Registration: <b className='text-orange-700'>April 10, 2026</b></li>
          <li className='mt-2'>Conference Dates: <b className='text-orange-700'>23rd –24th July 2026</b></li>
        </ul>
      </section>

      {/* Right Section */}
      <section className='w-full lg:w-[40%] flex flex-col items-center justify-center'>
        <div className='text-2xl md:text-3xl text-sky-800 font-bold text-center'>CONFERENCE BEGINS IN</div>

        <section className='mt-6 flex flex-wrap justify-around sm:flex sm:flex-row sm:justify-between sm:gap-3'>

          {[
            { label: 'Days', value: day },
            { label: 'Hours', value: hour },
            { label: 'Minutes', value: min },
            { label: 'Seconds', value: sec },
          ].map((item, index) => (
            <div key={index} className='w-16 h-16 sm:w-16 sm:h-16 border rounded-2xl border-gray-300 flex flex-col justify-center items-center'>
              <div className='h-[70%] w-full text-3xl sm:text-4xl text-white font-semibold bg-sky-800 flex justify-center items-center rounded-t-2xl'>{item.value}</div>
              <div className='text-sm text-gray-800 font-semibold mt-1'>{item.label}</div>
            </div>
          ))}

        </section>

      </section>
    </div>
  );
};

export default CountDown;
