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

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200">
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

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {[
              { category: 'Student', ieee: '₹ 7000', nonIeee: '₹ 8000' },
              { category: 'Professional', ieee: '₹ 9000', nonIeee: '₹ 10000' },
              { category: 'Industry Participants', ieee: '₹ 11000', nonIeee: '₹ 12000' },
              { category: 'Foreign Participants', ieee: '300 USD', nonIeee: '400 USD' },
              { category: 'Attendee only', ieee: '₹ 2500', nonIeee: '₹ 3000' },
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">{item.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">IEEE Member</p>
                    <p className="text-lg font-bold text-blue-600">{item.ieee}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Non-IEEE</p>
                    <p className="text-lg font-bold text-slate-700">{item.nonIeee}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Secure Your Spot Today!</h3>
              <p className="text-blue-100 text-sm md:text-base mb-6">Join leading researchers and innovators at ICCISD 2026</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-xl shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Register Now
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                
                <a 
                  href="#qr-payment" 
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  Scan QR to Pay
                </a>
              </div>
            </div>
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
        <div id="qr-payment" className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-12 p-8 flex flex-col items-center scroll-mt-24">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-blue-500 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-blue-500 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-blue-500 rounded-br-2xl"></div>
          
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Scan &amp; Pay
          </h2>
          <p className="text-slate-500 text-sm md:text-base mb-6 text-center">Scan the QR code below to make your payment directly</p>
          
          {/* QR Code with animated border */}
          <div className="relative p-1.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-lg opacity-50"></div>
            <div className="relative rounded-xl bg-white p-5">
              <img src={qrCode} alt="Payment QR Code" className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-lg" />
            </div>
          </div>
          
          <p className="mt-6 text-base md:text-lg text-slate-700 font-semibold">Use any UPI app to scan and pay</p>
        </div>

        <ContactUsLayout />
      </div>
    </div>
  );
};

export default Registration;
