import React from 'react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';
import PageBanner from '../Components/PageBanner';

const ContactUs = () => {
  return (
    <div className='bg-slate-50 font-sans min-h-screen'>
      <PageBanner title="Contact Us" subtitle="Get in touch with the organizing team." />

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
