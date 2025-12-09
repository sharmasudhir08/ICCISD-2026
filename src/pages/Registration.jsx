import React from 'react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

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

        {/* Payment Details (Placeholder for now) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-medium">Bank Name</span>
                <span className="text-slate-400">Coming soon...</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-medium">Account Name</span>
                <span className="text-slate-400">Coming soon...</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-medium">Account Number</span>
                <span className="text-slate-400">Coming soon...</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-medium">IFSC Code</span>
                <span className="text-slate-400">Coming soon...</span>
              </div>
            </div>
          </div>
        </div>

        <ContactUsLayout />
      </div>
    </div>
  );
};

export default Registration;
