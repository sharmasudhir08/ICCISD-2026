import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full px-4 py-8 bg-sky-700 text-white">
      <div className="max-w-screen-xl mx-auto text-center flex flex-col items-center justify-center space-y-2">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          INTERNATIONAL CONFERENCE ON COMPUTATIONAL INTELLIGENCE FOR
        </h1>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          SUSTAINABLE DEVELOPMENT
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl">(ICCISD-2026)</h2>

        <h3 className="text-lg sm:text-xl md:text-2xl">23rd - 24th July 2026</h3>

        <h4 className="text-base sm:text-lg md:text-xl font-semibold">ORGANISED BY:</h4>

        <h6 className="text-sm sm:text-base md:text-lg font-bold">
          Department of Computer Science and Applications, Sharda School of Computing Science & Engineering
        </h6>

        <h6 className="text-sm sm:text-base md:text-lg font-bold">
          Sharda University, Greater Noida, India
        </h6>
      </div>
    </div>
  );
};

export default HeroSection;
