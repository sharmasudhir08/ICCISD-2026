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
            <b className="text-orange-700">January 12, 2026</b>
          </li>
          <li>
            Notification of Acceptance:{' '}
            <b className="text-orange-700">March 8, 2026</b>
          </li>
          <li>
            Camera Ready Deadline:{' '}
            <b className="text-orange-700">March 29, 2026</b>
          </li>
          <li>
            Registration: <b className="text-orange-700">April 10, 2026</b>
          </li>
          <li>
            Conference Dates:{' '}
            <b className="text-orange-700">23rd – 24th July 2026</b>
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
          Track 1: Neural Networks, Deep Learning, and Reinforcement Learning
        </h1>
        <ul className="p-4 text-base text-gray-700 list-none space-y-2">
          <li>1.1 Explainable AI and Interpretable Deep Models</li>
          <li>1.2 Foundation Models and Large Language Models (LLMs)</li>
          <li>1.3 Prompt Engineering and Retrieval Augmented Generation</li>
          <li>1.4 Neural Architecture Search and AutoML for Devices</li>
          <li>1.5 Federated and Distributed Deep Learning on Edge Devices</li>
          <li>1.6 Adversarial Robustness in Deep Learning Systems</li>
          <li>1.7 Continual and Lifelong Learning Algorithms</li>
          <li>1.8 Reinforcement Learning in Robotics and Control Systems</li>
          <li>1.9 Generative AI for Realistic Data and Simulation</li>
          <li>1.10 Multi-Modal Deep Learning (vision, speech, text, sensors)</li>
        </ul>
      </section>

      <section className="w-full md:w-[48%]">
        <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
          Track 2: Fuzzy Systems, Evolutionary Computation, and Hybrid Intelligence
        </h1>
        <ul className="p-4 text-base text-gray-700 list-none space-y-2">
          <li>2.1 Adaptive Neuro-Fuzzy Inference Systems (ANFIS)</li>
          <li>2.2 Fuzzy Logic for Real-Time Decision-Making</li>
          <li>2.3 Swarm Intelligence and Collective Behavior Models</li>
          <li>2.4 Genetic Algorithms and Evolutionary Strategies</li>
          <li>2.5 Multi-Objective Evolutionary Optimization</li>
          <li>2.6 Bio-Inspired Algorithms (PSO, ACO, GWO, DE, Firefly, etc.)</li>
          <li>2.7 Hybrid Evolutionary-Deep Learning Models</li>
          <li>2.8 Evolutionary Computation for IoT Device Optimization</li>
          <li>2.9 Fuzzy Systems for Uncertainty in Healthcare and Robotics</li>
          <li>2.10 Evolutionary Game Theory for Smart Systems</li>
        </ul>
      </section>
    </div>

    {/* Track 3 & 4 */}
    <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
      <section className="w-full md:w-[48%]">
        <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
          Track 3: Intelligent Devices, Embedded Systems, and IoT Applications
        </h1>
        <ul className="p-4 text-base text-gray-700 list-none space-y-2">
          <li>3.1 AI-Powered Edge and Embedded Systems</li>
          <li>3.2 Neuromorphic and Low-Power AI Chips</li>
          <li>3.3 IoT Protocols for Scalability and Sustainability</li>
          <li>3.4 Digital Twins for IoT Devices and Systems</li>
          <li>3.5 Blockchain-Enabled Secure IoT Applications</li>
          <li>3.6 Intelligent Wearable and Implantable Devices</li>
          <li>3.7 Embedded Systems for Autonomous Vehicles and Drones</li>
          <li>3.8 AI in Predictive Maintenance of IoT Devices</li>
          <li>3.9 Cloud-Edge-IoT Integration Architectures</li>
          <li>3.10 AI-Driven Energy-Efficient Smart Devices</li>
        </ul>
      </section>

      <section className="w-full md:w-[48%]">
        <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
          Track 4: Robotics, Automation, and Human–Machine Interaction
        </h1>
        <ul className="p-4 text-base text-gray-700 list-none space-y-2">
          <li>4.1 Cognitive Robotics and Autonomous Decision-Making</li>
          <li>4.2 Human–Robot Collaboration in Industry 5.0</li>
          <li>4.3 Swarm Robotics for Environmental and Industrial Applications</li>
          <li>4.4 Soft Robotics for Medical and Assistive Systems</li>
          <li>4.5 Autonomous Navigation and Path Planning in Unknown Environments</li>
          <li>4.6 AI-Enhanced Vision and Perception in Robots</li>
          <li>4.7 Intelligent Drones and UAV Applications</li>
          <li>4.8 Natural Language Interfaces for Human–Machine Interaction</li>
          <li>4.9 Robotics for Disaster Response and Climate Applications</li>
          <li>4.10 Ethics, Trust, and Safety in Human–Robot Systems</li>
        </ul>
      </section>
    </div>

    {/* Track 5 & 6 */}
    <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
      <section className="w-full md:w-[48%]">
        <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
          Track 5: Signal and Image Processing using Computational Intelligence
        </h1>
        <ul className="p-4 text-base text-gray-700 list-none space-y-2">
          <li>5.1 Deep Learning for Medical Image Analysis</li>
          <li>5.2 AI for Satellite and Remote Sensing Applications</li>
          <li>5.3 Generative Models for Image Enhancement and Synthesis</li>
          <li>5.4 Multimodal Fusion of Audio, Video, and Sensor Signals</li>
          <li>5.5 Hyperspectral and Multispectral Image Processing</li>
          <li>5.6 Real-Time Video Analytics for Smart Surveillance</li>
          <li>5.7 Adversarial Attacks and Defenses in Image Processing</li>
          <li>5.8 AI-Driven Speech Recognition and Language Models</li>
          <li>5.9 Edge-AI for Low-Latency Signal Processing</li>
          <li>5.10 Virtual, Augmented, and Mixed Reality Signal Processing</li>
        </ul>
      </section>

      <section className="w-full md:w-[48%]">
        <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
          Track 6: Cybersecurity, Data Privacy, and Trustworthy Systems
        </h1>
        <ul className="p-4 text-base text-gray-700 list-none space-y-2">
          <li>6.1 Privacy-Preserving Machine Learning (Federated, Differential Privacy)</li>
          <li>6.2 AI for Intrusion Detection and Anomaly Detection</li>
          <li>6.3 Blockchain for Security in IoT and Devices</li>
          <li>6.4 Quantum-Safe Cryptography for Future-Proof Security</li>
          <li>6.5 Zero-Trust Architectures in Intelligent Systems</li>
          <li>6.6 Cyber-Physical Security in Smart Grids and Robotics</li>
          <li>6.7 Secure Data Sharing and Compliance (GDPR, HIPAA)</li>
          <li>6.8 AI-Powered Threat Intelligence and Cyber Defense</li>
          <li>6.9 Explainable and Trustworthy AI for Security Applications</li>
          <li>6.10 Risk Management and Resilient Design for Smart Devices</li>
        </ul>
      </section>
    </div>

    {/* Track 7 */}
    <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
      <section className="w-full md:w-[48%]">
        <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
          Track 7: Computational Intelligence for Sustainable Systems and Devices
        </h1>
        <ul className="p-4 text-base text-gray-700 list-none space-y-2">
          <li>7.1 AI for Climate Change Modeling and Prediction</li>
          <li>7.2 Green AI and Energy-Efficient Machine Learning Models</li>
          <li>7.3 Computational Intelligence for Renewable Energy Optimization</li>
          <li>7.4 Smart Grid Management with AI-Driven Decision Making</li>
          <li>7.5 Intelligent Transportation and Mobility Systems</li>
          <li>7.6 AI for Water Resource Management and Agriculture</li>
          <li>7.7 Waste Management and Circular Economy Systems</li>
          <li>7.8 Disaster Prediction and Climate-Resilient Infrastructure</li>
          <li>7.9 AI for Smart City Governance and Citizen Engagement</li>
          <li>7.10 Computational Intelligence for Net-Zero and Sustainability Goals</li>
        </ul>
      </section>
    </div>

  </div>
</section>

  {/* Call for Papers */}
  <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-xl sm:text-2xl text-sky-800 font-bold text-left">
  Call for Papers
  </h1>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 text-left">
  <a
    href="/CFP.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-sky-800 text-white text-sm sm:text-base font-medium px-4 py-1.5 rounded-lg hover:bg-sky-900 transition duration-200"
  >
    Download Call For Papers in PDF
  </a>
</div>



      {/* Paper Submission */}
      <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-xl sm:text-2xl text-sky-800 font-bold text-left">
        PAPER SUBMISSION
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:text-justify sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
  IEEE International Conference on Computational Intelligence Systems and Devices (ICCISD-2026) will be organized by Sharda University, Greater
  Noida, U.P., India on <strong>23rd–24th July 2026</strong>. The aim of the conference is to
  serve researchers, developers, and educators to present as well as exchange
  research ideas in various cutting-edge technologies.
  <br /><br />
  ICCISD-2026 invites authors to submit their original and unpublished work that demonstrates
  current research in all areas of science, technology, and sustainable
  development through Microsoft Conference Management Toolkit{' '}
  <a
    href="https://cmt3.research.microsoft.com/ICCISD2026"
    className="text-sky-800 underline hover:text-sky-600 break-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://cmt3.research.microsoft.com/ICCISD2026
  </a>
  . If you encounter problems in submitting, contact at{' '}
  <a
    href="mailto:iccisd.conference@sharda.ac.in"
    className="text-sky-800 underline hover:text-sky-600"
  >
    iccisd.conference@sharda.ac.in
  </a>
  . Acceptance of papers will be communicated to authors by email.
</div>

      <div className='max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center gap-4 mb-2'>
        <a href='https://cmt3.research.microsoft.com/ICCISD2026' target='_blank'><button className='p-2 text-white text-lg font-bold bg-sky-800 border rounded-xl hover:cursor-pointer'>CMT PaperSubmission Link</button></a>
        <a href='mailto:iccisd.conference@sharda.ac.in' target='_blank'><button className='p-2 text-white text-lg font-bold bg-sky-800 border rounded-xl hover:cursor-pointer'>Contact Email</button></a>
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

      <a
  href="https://www.ieee.org/conferences/publishing/templates"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-sky-800 text-white text-sm sm:text-base font-medium px-3 py-1.5 rounded-md hover:bg-sky-900 transition duration-200"
>
  Manuscript Templates for Conference Proceedings
</a>


      {/* Manuscript Preparation */}
      <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 text-xl sm:text-2xl text-sky-800 font-semibold text-left">
        Manuscript Preparation
      </h1>
      <ul className="max-w-7xl mx-auto px-4 sm:text-justify sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600 list-disc">
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
      <ul className="max-w-7xl mx-auto px-4 sm:text-justify sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600 list-disc">
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