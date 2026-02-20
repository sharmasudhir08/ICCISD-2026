import React from 'react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';
import qrCode from '../assets/qrcode.png';

const Registration = () => {

  return (
    <div className='bg-slate-50 font-sans'>
      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Registration
          </h1>
          <p className="mt-4 text-xl text-blue-200">Join us at ICCISD 2026.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Registration Fee Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className='text-2xl font-bold text-slate-900'>Registration Fees</h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Participant Category</th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-blue-600 uppercase tracking-wider">IEEE Members</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Non-IEEE Members</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Student</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-blue-600 font-bold">₹ 7000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-slate-700 font-bold">₹ 8000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Professional</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-blue-600 font-bold">₹ 9000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-slate-700 font-bold">₹ 10000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Industry Participants</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-blue-600 font-bold">₹ 11000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-slate-700 font-bold">₹ 12000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Foreign Participants</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-blue-600 font-bold">300 USD</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-slate-700 font-bold">400 USD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Attendee only</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-blue-600 font-bold">₹ 2500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-slate-700 font-bold">₹ 3000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-center justify-between border border-blue-100">
            <span className="text-blue-800 font-medium">Ready to register?</span>
            <a href="#" className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-lg text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
              Registration Link Coming Soon &rarr;
            </a>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-12">
          <h2 className='text-2xl font-bold text-slate-900 px-8 pt-8 pb-4 flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Payment Details
          </h2>

          {/* Bank & Branch */}
          <div className="mx-8 mb-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v4m4-4v4m4-4v4" /></svg>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Bank Name</p>
                <p className="text-slate-900 font-bold text-lg">ICICI Bank Ltd.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Branch Address</p>
                <p className="text-slate-700 text-sm">Krishna Apra Royal Plaza, D-2, E(acb), Alpha-1, Greater Noida, Gautam Budh Nagar, UP- 201306</p>
              </div>
            </div>
          </div>

          {/* Detail Grid */}
          <div className="px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Account Holder Name', value: 'Sharda University-Seminar' },
              { label: 'Account No.', value: '025405005815 (Current A/C)' },
              { label: 'IFSC Code', value: 'ICIC0000254' },
              { label: 'SWIFT Code', value: 'ICICINBBCTS' },
              { label: 'MICR Code', value: '110229037' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200">
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">{item.label}</p>
                <p className="text-slate-900 font-bold text-[15px]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-12 p-8 flex flex-col items-center">
          <h2 className='text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Scan &amp; Pay
          </h2>
          <p className="text-slate-500 text-sm mb-6">Scan the QR code below to make your payment directly</p>
          <div className="rounded-2xl border-2 border-blue-100 bg-white p-4 shadow-md">
            <img src={qrCode} alt="Payment QR Code" className="w-64 h-64 object-contain rounded-xl" />
          </div>
        </div>

        <ContactUsLayout />
      </div>
    </div>
  );
};

export default Registration;
