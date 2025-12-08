import React from 'react'

const Speakers = () => {
  return (
    <div className='bg-slate-50 font-sans min-h-screen'>

      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Speakers
          </h1>
          <p className="mt-4 text-xl text-blue-200">Hear from global experts and visionaries.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Placeholder for Keynote Speakers */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Keynote Speakers
          </h2>
          <div className="flex flex-col items-center justify-center py-12 text-center rounded-xl bg-slate-50 border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎙️</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">Coming Soon</h3>
            <p className="text-slate-500 max-w-sm mt-2">
              We are finalizing our lineup of distinguished keynote speakers. Check back soon for updates.
            </p>
          </div>
        </div>

        {/* Placeholder for Tutorial Speakers */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-purple-600 rounded-full"></span>
            Tutorial Speakers
          </h2>
          <div className="flex flex-col items-center justify-center py-12 text-center rounded-xl bg-slate-50 border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">Coming Soon</h3>
            <p className="text-slate-500 max-w-sm mt-2">
              Detailed tutorial sessions and speaker profiles will be announced shortly.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Speakers