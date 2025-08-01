import React from 'react'
import Banner from '../assets/Banner.webp'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'

const Authors = () => {
  return (
    <div>
      <img src={Banner} className='w-full h-60'></img>
      <div className='w-full h-60 absolute top-40 left-0 bg-gray-800 opacity-80 flex flex-col justify-center items-center'>
        <h1 className='text-white'>AUTHORS</h1>
      </div>

      <div className='w-[80%] p-2 mx-auto h-52 mt-10'>
        <h1 className='text-3xl text-sky-800 font-semibold text-left'>Important Dates</h1>
        <ul className='text-lg text-gray-700 text-left mt-2 p-2 list-none'>
          <li>Paper Submission Deadline: <b className='text-orange-700'>15th February 2026</b></li>
          <li>Notification of Acceptance: <b className='text-orange-700'>20th March 2026</b></li>
          <li>Camera Ready Deadline: <b className='text-orange-700'>12th April 2026</b></li>
          <li>Registration: <b className='text-orange-700'>19th April 2026</b></li>
          <li>Conference Dates: <b className='text-orange-700'>21st – 22nd May 2026</b></li>
        </ul>
      </div>

      <section className='w-[80%] p-2 mx-auto mt-16'>


        <div className='p-4 text-lg text-left text-gray-700 tracking-wide flex flex-col gap-5 bg-white my-4 rounded-2xl'>

          <div className='flex flex-wrap justify-between items-start gap-4'>

            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 1: Machine Learning and Data Science for Sustainable Solutions</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li className='list-none'>
                  <h1 className='text-xl text-sky-900 font-semibold'>1.1 Core Machine Learning Techniques</h1>
                  <ul className='p-5 ml-2 text-sm list-disc'>
                    
                    <li>Supervised and Unsupervised Learning</li>
                    <li>Clustering and Classification</li>
                    <li>Reinforcement Learning</li>
                    <li>Self-Supervised Learning</li>
                    <li>Statistical Data Analysis</li>
                    <li>Time Series Analysis</li>
                  </ul>
                </li>

                <li>Advanced AI and Computational Theories</li>
                <li>Hybrid and Soft Computing Approaches</li>
                <li>Data Science Techniques</li>
                <li>Specialized and Emerging Areas</li>
              </ul>
            </section>

            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 2: Communication and smart Technologies for Sustainable Systems</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li>Core Communication Technologies</li>
                <li>Advanced Networking Solutions</li>
                <li>Smart and Sustainable Systems</li>
                <li>Emerging and Enabling Technologies</li>
                <li>Data Management and Analysis in Communication</li>
                <li>Sustainability-Focused Approaches</li>
                <li>Smart City and Urban Solutions</li>
              </ul>
            </section>

          </div>

          <div className='flex flex-wrap justify-between items-start gap-4'>
          
            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 3: Computational Intelligence in Renewable Energy Systems</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li>Core Computational Intelligence Techniques</li>
                <li>AI in Energy Generation and Management</li>
                <li>Advanced Monitoring and Analysis</li>
                <li>Emerging Technologies in Energy Systems</li>
                <li>Sustainability and Efficiency Enhancements</li>
                <li>Cybersecurity and Reliability</li>
                <li>Applications in Specific Energy Sectors</li>
              </ul>
            </section>

            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 4: Robotics and Automation for Sustainable Practices</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li>Core Robotics and Automation Technologies</li>
                <li>Sustainable Industrial Automation</li>
                <li>Robotics in Environmental Conservation</li>
                <li>Transportation and Logistics</li>
                <li>Agriculture and Food Production</li>
                <li>Construction and Smart Infrastructure</li>
                <li>Emerging Technologies and Human-Robot Collaboration</li>
                <li>Energy Management and Efficiency</li>
              </ul>
            </section>


          </div>


          <div className='flex flex-wrap justify-between items-start gap-4'>

            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 5: Cyber security and Data Privacy in Sustainable Systems</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li>Core Cybersecurity Principles</li>
                <li>Data Privacy in Sustainable Systems</li>
                <li>Emerging Cybersecurity Technologies</li>
                <li>Cyber-Physical Security</li>
                <li>Compliance and Legal Aspects</li>
                <li>Application-Specific Security Solutions</li>
                <li>Resilience and Recovery</li>
                <li>AI and Cybersecurity Integration</li>
              </ul>
            </section>

            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 6: Emerging Technologies in Health Care</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li>Core AI and Machine Learning Applications</li>
                <li>Telemedicine and Remote Health Care Solutions</li>
                <li>Robotics and Automation in Health Care</li>
                <li>Genomics and Bioinformatics</li>
                <li>Wearable Technology and Smart Health Devices</li>
                <li>Big Data and Data Management in Health Care</li>
                <li>Emerging Health Technologies</li>
                <li>Cyber security and Data Privacy</li>
                <li>Sustainable and Equitable Health Solutions</li>
              </ul>
            </section>
          
          </div>


          <div className='flex flex-wrap justify-between items-start gap-4'>

            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 7: Sustainable Infrastructure and Smart city solutions</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li>Core Smart City Technologies</li>
                <li>Sustainable Urban Infrastructure</li>
                <li>Digital Twin Technology</li>
                <li>Transportation and Mobility</li>
                <li>Security and Data Privacy in Smart Cities</li>
                <li>Sustainable Energy and Resource Management</li>
                <li>Environment and Climate Monitoring</li>
                <li>Citizen Engagement and Smart Governance</li>
                <li>Advanced Technologies and Future Trends</li>
                <li>Sustainability and Efficiency Enhancements</li>
              </ul>
            </section>
          
          </div>
          

        </div>
 


      </section>
      

      <h1 className='w-[80%] p-2 mx-auto mt-3 text-2xl text-left text-sky-800 font-bold'>Call for papers</h1>

      <ul className='w-[80%] p-3 mx-auto mt-3 text-lg text-gray-700 text-left list-disc'>
        <li><a href='#' className='text-sky-800'>Download Call For Papers in PDF</a></li>
      </ul>

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

export default Authors