import React from 'react';
import shardalogo from '../assets/shardalogo.png';

const HeroSection = () => {
  return (
    <div className="w-full">
  <div className="relative bg-gradient-to-r from-stone-200 via-neutral-200 to-slate-100 min-h-[96px] md:min-h-[140px] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(15,23,42,0.45) 100%)' }}
          aria-hidden
        />
  <div className="relative max-w-4xl mx-auto px-4 py-4 md:py-6 w-full">
          <div className="flex flex-col items-center gap-4">
            {/* Centered original banner text (kept exactly as requested) */}
            <div className="text-center space-y-1 md:space-y-2 max-w-4xl mx-auto">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
                <span className="block">INTERNATIONAL CONFERENCE ON</span>
                <span className="block">COMPUTATIONAL INTELLIGENCE SYSTEMS AND DEVICES</span>
              </h1>

              <h2 className="text-md sm:text-lg md:text-xl text-sky-800">(ICCISD-2026)</h2>

              <h3 className="text-sm sm:text-md md:text-lg text-sky-800">23rd - 24th July 2026</h3>

              <h4 className="text-sm sm:text-md md:text-lg font-semibold text-slate-900">ORGANISED BY:</h4>

              <h6 className="text-sm sm:text-sm md:text-sm font-bold text-slate-900">
                Department of Computer Science and Applications, Sharda School of Computing Science & Engineering
              </h6>
              <h6 className="text-sm sm:text-sm md:text-sm font-bold text-slate-900">
                Sharda University, Greater Noida, India
              </h6>
                <div className="mt-4 flex items-center gap-2 animate-fadeSlideUp justify-center">
                  {/* Primary CTA: match the lighter secondary CTA style (lighter amber/orange gradient with border) */}
                  <a href="/Registration" className="inline-flex items-center gap-2 border border-amber-200 bg-gradient-to-r from-amber-100 via-amber-200 to-orange-100 px-3 py-1.5 rounded-md hover:from-amber-50 hover:to-amber-200 text-slate-900 text-sm">
                    Register
                  </a>

                  {/* Secondary CTA: lighter orange-related gradient with border */}
                  <a href="/PaperSubmission" className="inline-flex items-center gap-2 border border-amber-200 bg-gradient-to-r from-amber-100 via-amber-200 to-orange-100 px-2.5 py-1.5 rounded-md hover:from-amber-50 hover:to-amber-200 text-slate-900 text-sm">
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
