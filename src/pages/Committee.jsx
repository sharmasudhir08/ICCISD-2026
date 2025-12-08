import React from 'react'
import CommitteeLayout from '../Layouts/Committee/CommitteeLayout'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Committee = () => {
  return (
    <div className='bg-slate-50 font-sans'>

      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Committee
          </h1>
          <p className="mt-4 text-xl text-blue-200">Proposed Members and Organizing Team.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
          <CommitteeLayout />
          <div className='mt-8 p-4 text-center text-slate-500 italic bg-slate-50 rounded-lg'>
            More members to be added soon...
          </div>
        </div>

        <ContactUsLayout />
      </div>
    </div>
  )
}

export default Committee