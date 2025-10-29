import React from 'react'
const Speakers = () => {



  return (
    <div>
      {/* Narrow magenta banner for Speakers (match Registration) */}
      <div className="relative w-full">
        <div className="w-full min-h-[96px] md:min-h-[140px] relative bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-500 flex items-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.35) 100%)' }}
            aria-hidden
          />
          <div className="max-w-4xl w-full px-4 py-4 mx-auto">
            <h1 className="text-white drop-shadow-md text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center">
              SPEAKERS
            </h1>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className='mt-2 text-2xl text-sky-800 font-semibold'>Keynote Speakers</h2>
        <p className='mt-4 text-lg text-gray-600'>Coming Soon...</p>

        <h2 className='mt-8 text-2xl text-sky-800 font-semibold'>Tutorial Speakers</h2>
        <p className='mt-4 text-lg text-gray-600'>Coming Soon...</p>
      </section>

    </div>
  )
}

export default Speakers