import React from 'react';
import su from '../assets/su.png'; // Sharda University background image
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const Venue = () => {
  return (
    <div className='bg-slate-50 font-sans'>

      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Venue
          </h1>
          <p className="mt-4 text-xl text-blue-200">Sharda University, Greater Noida</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Venue Details Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
          <div className="relative h-64 md:h-80 bg-slate-200">
            <img src={su} alt="Sharda University" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">Sharda University</h2>
              <p className="text-lg opacity-90 mt-2">Knowledge Park III, Greater Noida, Ruhallapur, Uttar Pradesh 201310</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-12">
          <iframe
            title='Sharda University Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7039053899697!2d77.48699927549792!3d28.474334491687706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb77a23d6423%3A0x6e1e4e777fc3a70d!2sSharda%20University!5e0!3m2!1sen!2sin!4v1712345678901'
            width='100%'
            height='450'
            className='rounded-xl'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>

        <ContactUsLayout />
      </div>
    </div>
  );
};

export default Venue;
