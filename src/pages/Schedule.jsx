import React from 'react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const Schedule = () => {
  return (
    <div className='bg-slate-50 font-sans min-h-screen'>

      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Schedule
          </h1>
          <p className="mt-4 text-xl text-blue-200">Program outline and session details.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📅</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Program Schedule Coming Soon</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            We are currently finalizing the conference program. Detailed session timings and tracks will be published closer to the event date.
          </p>
        </div>

        <ContactUsLayout />
      </div>
    </div>
  );
};

export default Schedule;