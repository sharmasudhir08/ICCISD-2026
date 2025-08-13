import React from 'react';
import Banner from '../assets/Banner.webp';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const PaperSubmission = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Banner} alt="Banner" className="w-full h-60 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            PAPER SUBMISSION
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-700 sm:text-justify">

        <h1 className="text-sky-800 text-xl sm:text-2xl font-bold mb-4">PAPER SUBMISSION</h1>
        <p className="text-base sm:text-lg leading-relaxed mb-8">
          IEEE International Conference on Computational Intelligence for Sustainable Development (ICCISD -2026),
          will be organized by Sharda University, Greater Noida, U.P., India on 21st & 22nd June 2026. The aim of
          the conference is to serve researchers, developers, educators to present as well as to exchange the
          research ideas in various cutting edge technologies. ICCISD -2026 invites authors to submit their
          original and unpublished work that demonstrates current research in all areas of science technology and
          sustainable development through Microsoft Conference Management Toolkit:
          <a href="#" className="text-sky-800 ml-1">https://cmt3.research.microsoft.com/ICCISD2026
          </a>. If you encounter problems in submitting,
          contact at <a href="#" className="text-sky-800">iccisd.conference@gmail.com</a>. Acceptance of papers will be communicated to authors by email.
        </p>

        <h2 className="text-sky-800 text-xl font-bold mt-8 sm:text-left">Author’s Guidelines</h2>
        <h3 className="text-gray-800 text-lg font-semibold mt-4 sm:text-left">Guidelines</h3>
        <p className="mt-2 text-base sm:text-lg sm:text-justify leading-relaxed">
          At least one author of an accepted paper must register and present his / her paper in conference.
          Authors are invited to submit original papers of 4 - 6 pages in A4 size using the IEEE template, with one accepted paper covered under standard registration.
        </p>

        <ul className="list-disc pl-6 mt-4 text-lg text-sky-800 sm:text-xl">
          <li><a href="#">Download Call For Papers in PDF</a></li>
        </ul>

        <h2 className="text-sky-800 text-xl font-semibold mt-8">Manuscript Preparation</h2>
        <ul className="list-disc pl-6 mt-4 text-base sm:text-lg sm:text-justify space-y-3 text-gray-700">
          <li>
            All papers are required to be prepared and submitted in the IEEE Standard two–column conference format of A4 size in English.
            Papers must be four to six pages in length, including texts, figures, photographs and references.
            <b className="text-amber-600"> Two extra pages are permissible for an additional charge of Rs 1000 per page.</b>
          </li>
          <li>The first page must include the title of the paper, author(s), affiliations, address and text.</li>
          <li>Please do not include page numbers on submitted documents. Failing to conform to the standard format will result in rejection.</li>
          <li>
            The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word template can be downloaded from: 
            <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noreferrer" className="text-sky-800 ml-1">
              Manuscript Templates for Conference Proceedings | IEEE
            </a>
          </li>
          <li>The paper shall consist of original and previously unpublished work, including specific results.</li>
          <li>All paper submissions must be electronic, using IEEE Xplore compliant PDF format (*.pdf).</li>
          <li>Type 3 fonts (bitmaps) will not be accepted. Authors can use IEEE PDF eXpress to generate compliant PDFs.</li>
        </ul>

        <h2 className="text-sky-800 text-xl font-semibold mt-8">Policy on Plagiarism</h2>
        <ul className="list-disc pl-6 mt-4 text-base sm:text-lg space-y-3 text-gray-700">
          <li>Authors are requested to kindly refrain from plagiarism in any form.</li>
          <li>Papers found to be plagiarized during any stage of review shall be rejected.</li>
          <li>As per copyright transfer agreement, Authors are deemed individually and collectively responsible for the content.</li>
          <li>It is the responsibility of each author to strive for the highest ethical standards.</li>
          <li className="text-amber-600">
            All papers will undergo plagiarism check using Turnitin, and only papers with <b>below 15%</b> (excluding references) will be considered.
          </li>
        </ul>

        {/* Contact Section */}
        <div className="mt-10">
          <ContactUsLayout />
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
