import React from 'react';
import Banner from '../assets/Banner.webp';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const Authors = () => {
  return (
    <div className="box-border">
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src={Banner}
          className="w-full min-h-[200px] max-h-[400px] object-cover"
          alt="Conference Banner"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-80 flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            AUTHORS
          </h1>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-6">
        <h1 className="text-2xl sm:text-3xl text-sky-800 font-semibold text-left">
          Important Dates
        </h1>
        <ul className="text-base sm:text-lg text-gray-700 text-left mt-2 list-none">
          <li>
            Paper Submission Deadline:{' '}
            <b className="text-orange-700">15th February 2026</b>
          </li>
          <li>
            Notification of Acceptance:{' '}
            <b className="text-orange-700">20th March 2026</b>
          </li>
          <li>
            Camera Ready Deadline:{' '}
            <b className="text-orange-700">12th April 2026</b>
          </li>
          <li>
            Registration: <b className="text-orange-700">19th April 2026</b>
          </li>
          <li>
            Conference Dates:{' '}
            <b className="text-orange-700">21st – 22nd May 2026</b>
          </li>
        </ul>
      </div>

      {/* Tracks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-4 text-base sm:text-lg text-gray-700 text-left bg-white my-4 rounded-2xl">
          {/* Track 1 & 2 */}
          <div className="flex flex-wrap justify-between items-start gap-4">
            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 1: Machine Learning and Data Science for Sustainable Solutions
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    1.1 Core Machine Learning Techniques
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Supervised and Unsupervised Learning</li>
                    <li>Clustering and Classification</li>
                    <li>Reinforcement Learning</li>
                    <li>Self-Supervised Learning</li>
                    <li>Statistical Data Analysis</li>
                    <li>Time Series Analysis</li>
                  </ul>
                </li>
                {/* Other sub-sections for Track 1 */}
              </ul>
            </section>

            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 2: Communication and Smart Technologies for Sustainable Systems
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.1 Core Communication Technologies
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Wireless Communication Protocols (e.g., 5G/6G)</li>
                    <li>IoT Communication Standards</li>
                    <li>Network Protocols for Energy Efficiency</li>
                    <li>Wireless Sensor Networks (WSNs)</li>
                    <li>Cognitive Radio Networks</li>
                  </ul>
                </li>
                {/* Other sub-sections for Track 2 */}
              </ul>
            </section>
          </div>

          {/* Track 3 & 4 */}
          <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 3: Computational Intelligence in Renewable Energy Systems
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    3.1 Core Computational Intelligence Techniques
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Machine Learning for Energy Forecasting</li>
                    <li>Deep Learning for Renewable Energy Applications</li>
                    <li>Optimization Algorithms for Energy Efficiency</li>
                    <li>Fuzzy Logic Systems for Energy Control</li>
                    <li>Reinforcement Learning for Energy Management</li>
                  </ul>
                </li>
                {/* Other sub-sections for Track 3 */}
              </ul>
            </section>

            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 4: Robotics and Automation for Sustainable Practices
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    4.1 Core Robotics and Automation Technologies
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Autonomous Robotics for Sustainable Applications</li>
                    <li>AI-Powered Robotic Control Systems</li>
                    <li>Machine Learning in Robotic Automation</li>
                    <li>Vision-Based Systems for Robotic Operations</li>
                    <li>Multi-Agent Robotic Systems</li>
                  </ul>
                </li>
                {/* Other sub-sections for Track 4 */}
              </ul>
            </section>
          </div>

          {/* Track 5 & 6 */}
          <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 5: Cybersecurity and Data Privacy in Sustainable Systems
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.1 Core Cybersecurity Principles
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Cybersecurity Frameworks for Critical Sustainable
                      Infrastructure
                    </li>
                    <li>Risk Management and Threat Assessment in Eco-Friendly Systems</li>
                    <li>Network Security Protocols for Green Technologies</li>
                    <li>Incident Response Strategies for Sustainable Systems</li>
                    <li>Secure Software Development for Environmental Applications</li>
                  </ul>
                </li>
                {/* Other sub-sections for Track 5 */}
              </ul>
            </section>

            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 6: Emerging Technologies in Health Care
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.1 Core AI and Machine Learning Applications
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>AI-Driven Diagnostics and Predictive Analytics</li>
                    <li>Machine Learning for Personalized Medicine</li>
                    <li>Deep Learning for Image Analysis and Medical Imaging</li>
                    <li>Reinforcement Learning for Treatment Optimization</li>
                    <li>Natural Language Processing (NLP) in Medical Records and Research</li>
                  </ul>
                </li>
                {/* Other sub-sections for Track 6 */}
              </ul>
            </section>
          </div>

          {/* Track 7 */}
          <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 7: Sustainable Infrastructure and Smart City Solutions
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
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

      {/* Call for Papers */}
      <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-xl sm:text-2xl text-sky-800 font-bold text-left">
        Call for Papers
      </h1>
      <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 text-base sm:text-lg text-gray-700 text-left list-disc">
        <li>
          <a href="#" className="text-sky-800">
            Download Call For Papers in PDF
          </a>
        </li>
      </ul>

      {/* Paper Submission */}
      <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-xl sm:text-2xl text-sky-800 font-bold text-left">
        PAPER SUBMISSION
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:text-left sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600">
        IEEE International Conference on Computational Intelligence for Sustainable
        Development (ICCISD -2026), will be organized by Sharda University, Greater
        Noida, U.P., India on 21st & 22nd June 2026. The aim of the conference is to
        serve researchers, developers, educators to present as well as to exchange
        the research ideas in various cutting edge technologies. ICCISD -2026 invites
        authors to submit their original and unpublished work that demonstrates
        current research in all areas of science technology and sustainable
        development through Microsoft Conference Management Toolkit{' '}
        <a href="#" className="text-sky-800">
          https://cmt3.research.microsoft.com/
        </a>
        . If you encounter problems in submitting, contact at{' '}
        <a href="#" className="text-sky-800">
          iccisd.conference@gmail.com
        </a>
        . Acceptance of papers will be communicated to authors by email.
      </div>

      {/* Author’s Guidelines */}
      <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-xl sm:text-2xl text-sky-800 font-bold text-left">
        Author’s Guidelines
      </h1>
      <h2 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 text-lg sm:text-xl text-gray-600 font-semibold text-left">
        Guidelines
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:text-left sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600">
        At least one author of an accepted paper must register and present his / her
        paper in conference. Authors are invited to submit original papers of 4 - 6
        pages in A4 size using the IEEE template, with one accepted paper covered
        under standard registration.
      </div>
      <ul className="max-w-7xl mx-auto px-4 sm:text-left sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-sky-800 list-disc">
        <li>
          <a href="#">Download Call For Papers in PDF</a>
        </li>
      </ul>

      {/* Manuscript Preparation */}
      <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 text-xl sm:text-2xl text-sky-800 font-semibold text-left">
        Manuscript Preparation
      </h1>
      <ul className="max-w-7xl mx-auto px-4 sm:text-left sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600 list-disc">
        <li>
          All papers are required to be prepared and submitted in the IEEE Standard
          two – column conference format of A4 size in English. Papers must be four
          to six pages in length, including texts, figures, photographs and
          references.{' '}
          <b className="text-amber-600">
            Two extra pages are permissible for an additional charge of Rs 1000 per
            page
          </b>
          .
        </li>
        <li>
          The first page must include the title of the paper, author(s),
          affiliations, address and text.
        </li>
        <li>
          Please do not include page numbers on submitted documents. Failing to
          conform to the standard format will result in rejection. Detailed format
          information is available in IEEE Website.
        </li>
        <li>
          The authors are required to use the standard IEEE manuscript template for
          conferences. The Microsoft Word template in can be downloaded from IEEE
          conference template page:{' '}
          <a
            href="https://www.ieee.org/conferences/publishing/templates"
            className="text-sky-800"
          >
            Manuscript Templates for Conference Proceedings | IEEE
          </a>
        </li>
        <li>
          The paper shall consist of original and previously unpublished work,
          including specific results. The ‘Introduction’ of the paper shall clearly
          indicate the unique aspects of the submission and how it is related to the
          previous work.
        </li>
        <li>
          All paper submissions must be electronic, using IEEE Xplore compliant PDF
          format (*.pdf). Failure to do so may result in the rejection of the paper.
        </li>
        <li>
          Type 3 fonts (bitmaps) will not be accepted. Authors can use the IEEE PDF
          eXpress to generate compliant PDF Files for final submission.
        </li>
      </ul>

      {/* Policy on Plagiarism */}
      <h1 className="max-w-7xl mx-auto px-4 sm:text-left sm:px-6 lg:px-8 mt-5 text-xl sm:text-2xl text-sky-800 font-semibold text-left">
        Policy on Plagiarism
      </h1>
      <ul className="max-w-7xl mx-auto px-4 sm:text-left sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600 list-disc">
        <li>
          Authors are requested to kindly refrain from plagiarism in any form.
          Authors should submit their original and unpublished research work not
          under consideration for publication elsewhere.
        </li>
        <li>Papers found to be plagiarized during any stage of review shall be rejected.</li>
        <li>
          As per copyright transfer agreement, Authors are deemed to be individually
          and collectively responsible for the content of manuscripts published by
          them.
        </li>
        <li>
          Hence, it is the responsibility of each author to strive for the highest
          ethical standards with respect to plagiarism.
        </li>
        <li className="text-amber-600">
          All papers will undergo Plagiarism check using Turnitin Software and only
          papers having plagiarism below 15% (excluding references) will be
          considered for review.
        </li>
      </ul>

      <ContactUsLayout />
    </div>
  );
};

export default Authors;