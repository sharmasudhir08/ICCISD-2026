import React from 'react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const ContactUs = () => {
  return (
    <div className='bg-slate-50 font-sans min-h-screen'>
      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-blue-200">Get in touch with the organizing team.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Contact Layout Wrapper */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <ContactUsLayout />
        </div>

      </div>
    </div>
  );
};

export default ContactUs;