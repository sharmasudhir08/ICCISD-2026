import React from 'react';
import shardalogo from '../assets/shardalogo.png';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-50 pt-28">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-white opacity-40 mix-blend-multiply pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-200 blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-48 -right-24 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-pink-200 blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Conference Title */}
        <div className="space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
            23rd - 24th July 2026
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            International Conference on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Computational Intelligence
            </span> <br />
            <span className="text-slate-800">Systems and Devices</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-medium text-slate-500 tracking-wide mt-2">
            (ICCISD-2026)
          </h2>
        </div>

        {/* Organization Details */}
        <div className="mt-12 max-w-3xl mx-auto text-center space-y-2 text-slate-600">
          <p className="text-sm font-semibold tracking-wider uppercase text-slate-400">Organised By</p>
          <p className="text-lg md:text-xl font-medium">
            Department of Computer Science and Applications
          </p>
          <p className="text-base md:text-lg">
            Sharda School of Computing Science & Engineering, Sharda University, Greater Noida, India
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href="/Registration" className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1">
            Register Now
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <a href="/PaperSubmission" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm hover:shadow-md">
            Submit Paper
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
