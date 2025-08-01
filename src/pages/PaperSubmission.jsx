import React from 'react'
import Banner from '../assets/Banner.webp'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const PaperSubmission = () => {
  return (
    <div>


      <img src={Banner} className='w-full h-60'></img>
      <div className='w-full h-60 absolute top-40 left-0 bg-gray-800 opacity-80 flex flex-col justify-center items-center'>
        <h1 className='text-white'>PAPER SUBMISSION</h1>
      </div>

      <h1 className='w-[80%] mx-auto mt-8 text-xl text-left text-sky-800 font-bold'>PAPER SUBMISSION</h1>

      <div className='w-[80%] mx-auto mt-5 text-lg text-left text-gray-600'>
        IEEE International Conference on Computational Intelligence for Sustainable Development (ICCISD -2026), will be organized by Sharda University, Greater Noida, U.P., India on 21st& 22nd  June 2026. The aim of the conference is to serve researchers, developers, educators to present as well as to exchange the research ideas in various cutting edge technologies. ICCISD -2026 invites authors to submit their original and unpublished work that demonstrates current research in all areas of science technology and sustainable development through Microsoft Conference Management Toolkit <a href='#' className='text-sky-800'>https://cmt3.research.microsoft.com/</a>. If you encounter problems in submitting, contact at <a href='#' className='text-sky-800'>iccisd.conference@gmail.com</a>. Acceptance of papers will be communicated to authors by email.
      </div>

      <h1 className='w-[80%] mx-auto mt-8 text-xl text-left text-sky-800 font-bold'>Author’s Guidelines</h1>
      <h2 className='w-[80%] mx-auto mt-5 text-lg text-left text-gray-600 font-semibold'>Guidelines</h2>

      <div className='w-[80%] mx-auto mt-8 text-lg text-left text-gray-600'>
        At least one author of an accepted paper must register and present his / her paper in conference. Authors are invited to submit original papers of 4 - 6 pages in A4 size using the IEEE template, with one accepted paper covered under standard registration.
      </div>

      <ul className='w-[80%] mx-auto mt-5 text-lg text-left text-sky-800 list-disc pl-5'>
        <li><a href='#'>Download Call For Papers in PDF</a></li>
      </ul>

      <h1 className='w-[80%] mx-auto mt-5 text-xl text-sky-800 text-left font-semibold'>Manuscript Preparation</h1>

      <ul className='w-[80%] mx-auto mt-5 text-lg text-left text-gray-600 list-disc pl-5'>
        <li>All papers are required to be prepared and submitted in the IEEE Standard two – column conference format of A4 size in English. Papers must be four to sixpages in length, including texts, figures, photographs and references. <b className='text-amber-600'>Two extra pagesare permissible for an additional charge of Rs 1000 per page</b>.</li>
        <li>The first page must include the title of the paper, author(s), affiliations, address and text. </li>
        <li>Please do not include page numbers on submitted documents. Failing to conform to the standard format will result in rejection. Detailed format information is available in IEEE Website.</li>
        <li>The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word template in can be downloaded from IEEE conference template page:  <a href='https://www.ieee.org/conferences/publishing/templates' className='text-sky-800'>Manuscript Templates for Conference Proceedings | IEEE</a></li>
        <li>The paper shall consist of original and previously unpublished work, including specific results. The ‘Introduction’ of the paper shall clearly indicate the unique aspects of the submission and how it is related to the previous work.</li>
        <li>All paper submissions must be electronic, using IEEE Xplore compliant PDF format (*.pdf). Failure to do so may result in the rejection of the paper.</li>
        <li>Type 3 fonts (bitmaps) will not be accepted. Authors can use the IEEE PDF eXpress to generate compliant PDF Files for final submission.</li>
      </ul>

      <h1 className='w-[80%] mx-auto mt-5 text-xl text-sky-800 text-left font-semibold'>Policy on Plagiarism</h1>

      <ul className='w-[80%] mx-auto mt-5 text-lg text-left text-gray-600 list-disc pl-5'>
        <li>Authors are requested to kindly refrain from plagiarism in any form. Authors should submit their original and unpublished research work not under consideration for publication elsewhere.</li>
        <li>Papers found to be plagiarized during any stage of review shall be rejected.</li>
        <li>As per copyright transfer agreement, Authors are deemed to be individually and collectively responsible for the content of manuscripts published by them.</li>
        <li>Hence, it is the responsibility of each author to strive for the highest ethical standards with respect to plagiarism.</li>
        <li className='text-amber-600'>All papers will undergo Plagiarism check using Turnitin Software and only papers having plagiarism below 15% (excluding references) will be considered for review.</li>
      </ul>

      <ContactUsLayout/>

    </div>
  )
}

export default PaperSubmission