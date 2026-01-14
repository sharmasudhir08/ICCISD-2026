import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const targetDate = new Date('2026-07-23T00:00:00');

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
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'>
      <div className='bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-12'>

        {/* Left Section */}
        <section className='w-full lg:w-1/2 space-y-6'>
          <h2 className='text-3xl font-bold text-slate-900 flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            IMPORTANT DATES
          </h2>
          <ul className='space-y-4 text-slate-600'>
            {[
              { label: "Paper Submission Deadline", date: "January 30, 2026", color: "text-red-500" },
              { label: "Notification of Acceptance", date: "March 8, 2026", color: "text-amber-600" },
              { label: "Camera Ready Deadline", date: "March 29, 2026", color: "text-blue-600" },
              { label: "Registration", date: "April 10, 2026", color: "text-green-600" },
              { label: "Conference Dates", date: "23rd – 24th July 2026", color: "text-purple-600" }
            ].map((item, index) => (
              <li key={index} className='flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0'>
                <span className="font-medium">{item.label}</span>
                <span className={`font-bold ${item.color}`}>{item.date}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Right Section - Countdown */}
        <section className='w-full lg:w-1/2 flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-8 border border-slate-100'>
          <h3 className='text-xl sm:text-2xl text-slate-700 font-bold mb-8 tracking-wide text-center uppercase'>
            Conference Begins In
          </h3>

          <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
            {[
              { label: 'Days', value: day },
              { label: 'Hours', value: hour },
              { label: 'Minutes', value: min },
              { label: 'Seconds', value: sec },
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-3 transform hover:scale-105 transition-transform duration-300'>
                  <span className='text-3xl sm:text-4xl font-bold text-blue-600 bg-clip-text'>
                    {item.value}
                  </span>
                </div>
                <span className='text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest'>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CountDown;
