import React from 'react';
import shardalogo from '../assets/shardalogo.png';

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 min-h-[60vh] md:min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="relative max-w-screen-xl mx-auto px-4 py-12 md:py-16 text-white w-full">
          <div className="flex flex-col items-center gap-4">
            {/* Centered original banner text (kept exactly as requested) */}
            <div className="text-center space-y-1 md:space-y-2 max-w-5xl mx-auto">
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-white to-sky-100 drop-shadow-md leading-tight tracking-tight">
                <span className="block">INTERNATIONAL CONFERENCE ON</span>
                <span className="block">COMPUTATIONAL INTELLIGENCE SYSTEMS AND DEVICES</span>
              </h1>

              <h2 className="text-md sm:text-lg md:text-xl text-sky-100">(ICCISD-2026)</h2>

              <h3 className="text-sm sm:text-md md:text-lg text-sky-100">23rd - 24th July 2026</h3>

              <h4 className="text-sm sm:text-md md:text-lg font-semibold text-sky-100">ORGANISED BY:</h4>

              <h6 className="text-sm sm:text-sm md:text-sm font-bold text-sky-100">
                Department of Computer Science and Applications, Sharda School of Computing Science & Engineering
              </h6>
              <h6 className="text-sm sm:text-sm md:text-sm font-bold text-sky-100">
                Sharda University, Greater Noida, India
              </h6>
                <div className="mt-4 flex items-center gap-2 animate-fadeSlideUp justify-center">
                  <a href="/Registration" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-sky-900 font-semibold px-3 py-1.5 rounded-md shadow-md text-sm">
                    <img src={shardalogo} alt="Sharda logo" className="w-5 h-5 object-contain rounded-sm" />
                    Register
                  </a>
                  <a href="/PaperSubmission" className="inline-flex items-center gap-2 border border-white/30 px-2.5 py-1.5 rounded-md hover:bg-white/10 text-sm">
                    Call for Papers
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
