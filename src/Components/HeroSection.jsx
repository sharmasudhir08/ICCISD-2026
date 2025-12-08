import React from 'react';
import shardalogo from '../assets/shardalogo.png';
import ieeeuplogo from '../assets/ieeeup.png';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-300 pt-32 pb-16">

      {/* Graphical Background Elements - More Elegant */}
      <div className="absolute top-0 inset-x-0 h-full w-full opacity-60 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Elegant Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-200 to-pink-200 blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-[95%] md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Main Content Card with Borders */}
        <div className="relative bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-2xl shadow-blue-900/10 overflow-hidden ring-1 ring-slate-900/5 p-8 md:p-10 text-center">

          {/* Inner Border Decoration */}
          <div className="absolute inset-3 rounded-[1.8rem] border border-slate-100/80 pointer-events-none"></div>

          {/* Conference Title Section */}
          <div className="relative z-10 space-y-4 mb-8">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
              <span className="text-blue-700 text-sm md:text-base font-bold tracking-[0.15em] uppercase">
                23rd - 24th July 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] drop-shadow-sm">
              International Conference on <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 animate-gradient-x">
                Computational Intelligence
              </span> <br />
              <span className="text-slate-800">Systems and Devices</span>
            </h1>

            <div className="flex flex-col items-center gap-2 mt-2">
              <span className="text-xl md:text-2xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                (ICCISD-2026)
              </span>
              <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md shadow-slate-900/20">
                IEEE Record # 69924
              </span>
            </div>
          </div>

          {/* Organization Section */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-1 mb-8 text-slate-600 pb-6 border-b border-slate-100">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-blue-400">Organised By</p>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 font-display">
              Department of Computer Science and Applications
            </h3>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Sharda School of Computing Science & Engineering, Sharda University, Greater Noida, India
            </p>
          </div>

          {/* Logos Section - Compact & Full Color */}
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 mb-8">
            <img src={shardalogo} alt="Sharda University" className="h-16 md:h-20 object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300" />
            <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
            <img src={ieeeuplogo} alt="IEEE UP Section" className="h-16 md:h-20 object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300" />
          </div>

          {/* CTAs */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/Registration" className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-slate-900 px-6 py-3 text-white shadow-xl transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 duration-300">
              <div className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold tracking-wide">
                Register Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
            </a>

            <a href="/PaperSubmission" className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white border-2 border-slate-100 px-6 py-3 text-slate-900 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-105 active:scale-95 duration-300">
              <span className="relative z-10 text-sm font-bold tracking-wide group-hover:text-blue-600 transition-colors">
                Submit Paper
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
