import React from 'react'
import CommitteeLayout from '../Layouts/Committee/CommitteeLayout'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'
import PageBanner from '../Components/PageBanner'

const Committee = () => {
  return (
    <div className='bg-slate-50 font-sans'>

      <PageBanner title="Committee" subtitle="Proposed Members and Organizing Team." />

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
