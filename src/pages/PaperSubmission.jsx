import React from 'react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const PaperSubmission = () => {
  return (
    <div className='bg-slate-50 font-sans'>

      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Paper Submission
          </h1>
          <p className="mt-4 text-xl text-blue-200">Guidelines and Policy</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Paper Submission Intro */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">PAPER SUBMISSION</h2>
          <div className="text-slate-600 leading-relaxed mb-6 space-y-4">
            <p>
              IEEE International Conference on Computational Intelligence Systems and Devices (ICCISD-2026), will be organized by Sharda University, Greater Noida, U.P., India on 23rd - 24th July 2026. The aim of the conference is to serve researchers, developers, educators to present as well as to exchange the research ideas in various cutting edge technologies. ICCISD -2026 invites authors to submit their original and unpublished work that demonstrates current research in all areas of science technology and sustainable development through Microsoft Conference Management Toolkit: <a href="https://cmt3.research.microsoft.com/ICCISD2026" className="text-blue-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://cmt3.research.microsoft.com/ICCISD2026</a>.
            </p>
            <p>
              If you encounter problems in submitting, contact at <a href="mailto:iccisd.conference@sharda.ac.in" className="text-blue-600 hover:underline">iccisd.conference@sharda.ac.in</a>. Acceptance of papers will be communicated to authors by email.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://cmt3.research.microsoft.com/ICCISD2026" target="_blank" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors">
              CMT PaperSubmission Link
            </a>
            <a href="mailto:iccisd.conference@sharda.ac.in" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-colors">
              Contact Email
            </a>
          </div>
        </div>

        {/* Guidelines Section Wrapper */}
        <section className="space-y-8">

          {/* Author’s Guidelines */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Author’s Guidelines</h2>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Guidelines</h3>
            <p className="text-slate-600 mb-4">
              At least one author of an accepted paper must register and present his / her paper in conference. Authors are invited to submit original papers of 4 - 6 pages in A4 size using the IEEE template, with one accepted paper covered under standard registration.
            </p>
            <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm">
              Manuscript Templates for Conference Proceedings
            </a>
          </div>

          {/* Manuscript Preparation */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Manuscript Preparation</h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              <li>
                All papers are required to be prepared and submitted in the IEEE Standard two–column conference format of A4 size in English. Papers must be four to six pages in length, including texts, figures, photographs and references. <strong className="text-amber-600">Two extra pages are permissible for an additional charge of Rs 1000 per page.</strong>
              </li>
              <li>The first page must include the title of the paper, author(s), affiliations, address and text.</li>
              <li>Please do not include page numbers on submitted documents. Failing to conform to the standard format will result in rejection. Detailed format information is available in IEEE Website.</li>
              <li>
                The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word template can be downloaded from: <a href="https://www.ieee.org/conferences/publishing/templates" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Manuscript Templates for Conference Proceedings | IEEE</a>
              </li>
              <li>The paper shall consist of original and previously unpublished work, including specific results. The ‘Introduction’ of the paper shall clearly indicate the unique aspects of the submission and how it is related to the previous work.</li>
              <li>All paper submissions must be electronic, using IEEE Xplore compliant PDF format (*.pdf). Failure to do so may result in the rejection of the paper.</li>
              <li>Type 3 fonts (bitmaps) will not be accepted. Authors can use IEEE PDF eXpress to generate compliant PDF Files for final submission.</li>
            </ul>
          </div>

          {/* Policy on Plagiarism */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Policy on Plagiarism</h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              <li>Authors are requested to kindly refrain from plagiarism in any form. Authors should submit their original and unpublished research work not under consideration for publication elsewhere.</li>
              <li>Papers found to be plagiarized during any stage of review shall be rejected.</li>
              <li>As per copyright transfer agreement, Authors are deemed individually and collectively responsible for the content of manuscripts published by them.</li>
              <li>Hence, it is the responsibility of each author to strive for the highest ethical standards with respect to plagiarism.</li>
              <li className="text-amber-600 font-medium">All papers will undergo Plagiarism check using Turnitin Software and only papers having plagiarism below 15% will be considered for review.</li>
            </ul>
          </div>

        </section>

        <div className="mt-12">
          <ContactUsLayout />
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
