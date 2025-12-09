import React from 'react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';
import ieeelogo from '../assets/IEEE new logo.webp';

const Authors = () => {
  return (
    <div className='bg-slate-50 font-sans'>

      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            For Authors
          </h1>
          <p className="mt-4 text-xl text-blue-200">Guidelines, dates, and submission details.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Important Dates */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Important Dates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Paper Submission Deadline", date: "January 12, 2026", color: "text-red-500" },
              { label: "Notification of Acceptance", date: "March 8, 2026", color: "text-amber-600" },
              { label: "Camera Ready Deadline", date: "March 29, 2026", color: "text-blue-600" },
              { label: "Registration", date: "April 10, 2026", color: "text-green-600" },
              { label: "Conference Dates", date: "23rd – 24th July 2026", color: "text-purple-600", fullWidth: true }
            ].map((item, index) => (
              <div key={index} className={`p-4 rounded-xl bg-slate-50 border border-slate-100 ${item.fullWidth ? 'md:col-span-2 lg:col-span-3 text-center bg-blue-50 border-blue-100' : ''}`}>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                <p className={`text-lg font-bold mt-1 ${item.color}`}>{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Conference Tracks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Track 1: Neural Networks, Deep Learning, and Reinforcement Learning",
                topics: [
                  'Explainable AI and Interpretable Deep Models',
                  'Foundation Models and Large Language Models (LLMs)',
                  'Prompt Engineering and Retrieval Augmented Generation',
                  'Neural Architecture Search and AutoML for Devices',
                  'Federated and Distributed Deep Learning on Edge Devices',
                  'Adversarial Robustness in Deep Learning Systems',
                  'Continual and Lifelong Learning Algorithms',
                  'Reinforcement Learning in Robotics and Control Systems',
                  'Generative AI for Realistic Data and Simulation',
                  'Multi-Modal Deep Learning (vision, speech, text, sensors)',
                ]
              },
              {
                title: "Track 2: Fuzzy Systems, Evolutionary Computation, and Hybrid Intelligence",
                topics: [
                  'Adaptive Neuro-Fuzzy Inference Systems (ANFIS)',
                  'Fuzzy Logic for Real-Time Decision-Making',
                  'Swarm Intelligence and Collective Behavior Models',
                  'Genetic Algorithms and Evolutionary Strategies',
                  'Multi-Objective Evolutionary Optimization',
                  'Bio-Inspired Algorithms (PSO, ACO, GWO, DE, Firefly, etc.)',
                  'Hybrid Evolutionary-Deep Learning Models',
                  'Evolutionary Computation for IoT Device Optimization',
                  'Fuzzy Systems for Uncertainty in Healthcare and Robotics',
                  'Evolutionary Game Theory for Smart Systems',
                ]
              },
              {
                title: "Track 3: Intelligent Devices, Embedded Systems, and IoT Applications",
                topics: [
                  'AI-Powered Edge and Embedded Systems',
                  'Neuromorphic and Low-Power AI Chips',
                  'IoT Protocols for Scalability and Sustainability',
                  'Digital Twins for IoT Devices and Systems',
                  'Blockchain-Enabled Secure IoT Applications',
                  'Intelligent Wearable and Implantable Devices',
                  'Embedded Systems for Autonomous Vehicles and Drones',
                  'AI in Predictive Maintenance of IoT Devices',
                  'Cloud-Edge-IoT Integration Architectures',
                  'AI-Driven Energy-Efficient Smart Devices',
                ]
              },
              {
                title: "Track 4: Robotics, Automation, and Human–Machine Interaction",
                topics: [
                  'Cognitive Robotics and Autonomous Decision-Making',
                  'Human–Robot Collaboration in Industry 5.0',
                  'Swarm Robotics for Environmental and Industrial Applications',
                  'Soft Robotics for Medical and Assistive Systems',
                  'Autonomous Navigation and Path Planning in Unknown Environments',
                  'AI-Enhanced Vision and Perception in Robots',
                  'Intelligent Drones and UAV Applications',
                  'Natural Language Interfaces for Human–Machine Interaction',
                  'Robotics for Disaster Response and Climate Applications',
                  'Ethics, Trust, and Safety in Human–Robot Systems',
                ]
              },
              {
                title: "Track 5: Signal and Image Processing using Computational Intelligence",
                topics: [
                  'Deep Learning for Medical Image Analysis',
                  'AI for Satellite and Remote Sensing Applications',
                  'Generative Models for Image Enhancement and Synthesis',
                  'Multimodal Fusion of Audio, Video, and Sensor Signals',
                  'Hyperspectral and Multispectral Image Processing',
                  'Real-Time Video Analytics for Smart Surveillance',
                  'Adversarial Attacks and Defenses in Image Processing',
                  'AI-Driven Speech Recognition and Language Models',
                  'Edge-AI for Low-Latency Signal Processing',
                  'Virtual, Augmented, and Mixed Reality Signal Processing',
                ]
              },
              {
                title: "Track 6: Cybersecurity, Data Privacy, and Trustworthy Systems",
                topics: [
                  'Privacy-Preserving Machine Learning (Federated, Differential Privacy)',
                  'AI for Intrusion Detection and Anomaly Detection',
                  'Blockchain for Security in IoT and Devices',
                  'Quantum-Safe Cryptography for Future-Proof Security',
                  'Zero-Trust Architectures in Intelligent Systems',
                  'Cyber-Physical Security in Smart Grids and Robotics',
                  'Secure Data Sharing and Compliance (GDPR, HIPAA)',
                  'AI-Powered Threat Intelligence and Cyber Defense',
                  'Explainable and Trustworthy AI for Security Applications',
                  'Risk Management and Resilient Design for Smart Devices',
                ]
              },
              {
                title: "Track 7: Computational Intelligence for Sustainable Systems and Devices",
                topics: [
                  'AI for Climate Change Modeling and Prediction',
                  'Green AI and Energy-Efficient Machine Learning Models',
                  'Computational Intelligence for Renewable Energy Optimization',
                  'Smart Grid Management with AI-Driven Decision Making',
                  'Intelligent Transportation and Mobility Systems',
                  'AI for Water Resource Management and Agriculture',
                  'Waste Management and Circular Economy Systems',
                  'Disaster Prediction and Climate-Resilient Infrastructure',
                  'AI for Smart City Governance and Citizen Engagement',
                  'Computational Intelligence for Net-Zero and Sustainability Goals',
                ]
              }
            ].map((track, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-800 mb-3">{track.title}</h3>
                <ul className="text-slate-600 text-sm space-y-1 list-disc pl-5">
                  {track.topics.map((t, j) => <li key={j}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Paper Submission Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Paper Submission</h2>
          <div className="text-slate-600 leading-relaxed mb-6 space-y-4">
            <p>
              IEEE International Conference on Computational Intelligence Systems and Devices (ICCISD-2026) will be organized by Sharda University, Greater Noida, U.P., India on <strong>23rd–24th July 2026</strong>. The aim of the conference is to serve researchers, developers, and educators to present as well as exchange research ideas in various cutting-edge technologies.
            </p>
            <p>
              ICCISD-2026 invites authors to submit their original and unpublished work that demonstrates current research in all areas of science, technology, and sustainable development through Microsoft Conference Management Toolkit <a href="https://cmt3.research.microsoft.com/ICCISD2026" className="text-blue-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">https://cmt3.research.microsoft.com/ICCISD2026</a>. If you encounter problems in submitting, contact at <a href="mailto:iccisd.conference@sharda.ac.in" className="text-blue-600 hover:underline">iccisd.conference@sharda.ac.in</a>. Acceptance of papers will be communicated to authors by email.
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
        </section>

        {/* Guidelines Section */}
        <section className="space-y-8">
          {/* Author's Guidelines */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Author’s Guidelines</h2>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Guidelines</h3>
            <p className="text-slate-600 mb-4">
              At least one author of an accepted paper must register and present his / her paper in conference. Authors are invited to submit original papers of 5 - 6 pages in A4 size using the IEEE template.
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
                All papers are required to be prepared and submitted in the IEEE Standard two–column conference format of A4 size in English. Papers must be five to six pages in length, including texts, figures, photographs and references. <strong className="text-amber-600">Two extra pages are permissible for an additional charge of Rs 1000 / USD 50 per page.</strong>
              </li>
              <li>The first page must include the title of the paper, author(s), affiliations, address and text.</li>
              <li>Please do not include page numbers on submitted documents. Failing to conform to the standard format will result in rejection. Detailed format information is available in IEEE Website.</li>
              <li>
                The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word template in can be downloaded from IEEE conference template page: <a href="https://www.ieee.org/conferences/publishing/templates" className="text-blue-600 hover:underline">Manuscript Templates for Conference Proceedings | IEEE</a>
              </li>
              <li>The paper shall consist of original and previously unpublished work, including specific results. The ‘Introduction’ of the paper shall clearly indicate the unique aspects of the submission and how it is related to the previous work.</li>
              <li>Type 3 fonts (bitmaps) will not be accepted.</li>
              <li>Authors can use the IEEE PDF eXpress to generate compliant PDF Files for final submission.</li>
            </ul>
          </div>

          {/* IEEE PDF eXpress Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">IEEE PDF eXpress – Step-by-Step Author Guide</h2>
            <div className="text-slate-600 space-y-4 mb-6">
              <p>
                To ensure that all camera-ready papers comply with IEEE Xplore® formatting standards, authors of accepted papers are required to validate their final manuscript using IEEE PDF eXpress before submission.
              </p>
              <p>
                The PDF eXpress access credentials and Conference ID will be shared with the corresponding authors after paper acceptance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://www.ieee.org/conferences/publishing/pdfexpress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors">IEEE PDF eXpress Info</a>
              <a href="https://ieee-pdf-express.org/account/signup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors">Create Account</a>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">PDF Instructions for Authors</h3>
              <h4 className="font-semibold text-slate-700 mb-6">2026 International Conference on Computational Intelligence Systems and Devices (ICCISD)</h4>

              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-slate-800 mb-2">Before Creating a PDF</h5>
                  <p className="text-slate-600">Proofread your source document thoroughly to confirm that it will require no revision.</p>
                </div>

                <div>
                  <h5 className="font-bold text-slate-800 mb-2">Creating your PDF eXpress Account</h5>
                  <p className="text-slate-600 mb-2">Log in to the IEEE PDF eXpress® site</p>
                  <p className="text-slate-600 mb-2 font-medium">First-time users should do the following:</p>
                  <ol className="list-decimal pl-5 space-y-3 text-slate-600">
                    <li>Select the <a href="https://ieee-pdf-express.org/account/signup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">Create Account</a> link.</li>
                    <li>Enter the following:
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>The Conference ID (to be provided)</li>
                        <li>Your email address</li>
                        <li>A password</li>
                      </ul>
                    </li>
                    <li>Continue to enter information as prompted.</li>
                  </ol>
                  <p className="text-slate-600 mt-4">An Online confirmation will be displayed and an email confirmation will be sent verifying your account setup.</p>

                  <p className="text-slate-600 mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100 italic">
                    <span className="font-semibold not-italic">Note for Previous Users:</span> Previous users of PDF eXpress need to follow the above steps but should enter the same password that was used for previous conferences. Verify that your contact information is valid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Policy on Plagiarism */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Policy on Plagiarism</h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              <li>Authors are requested to kindly refrain from plagiarism in any form. Authors should submit their original and unpublished research work not under consideration for publication elsewhere.</li>
              <li>Papers found to be plagiarized during any stage of review shall be rejected.</li>
              <li>As per copyright transfer agreement, Authors are deemed to be individually and collectively responsible for the content of manuscripts published by them.</li>
              <li>Hence, it is the responsibility of each author to strive for the highest ethical standards with respect to plagiarism.</li>
              <li className="text-amber-600 font-medium">All papers will undergo Plagiarism check using Turnitin Software and only papers having plagiarism below 15% will be considered for review.</li>
            </ul>
          </div>

          {/* Additional Policies Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Plagiarism Policy Link */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <img src={ieeelogo} alt="IEEE" className="h-16 object-contain" />
              <div>
                <h4 className="font-bold text-slate-800">IEEE Similarity and Plagiarism Policies</h4>
                <p className="text-sm text-slate-600 mt-1">Guidelines for Maintaining Academic Integrity</p>
              </div>
              <a href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-full text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                Read Policy &rarr;
              </a>
            </div>

            {/* Copyright Process Link */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <img src={ieeelogo} alt="IEEE" className="h-16 object-contain" />
              <div>
                <h4 className="font-bold text-slate-800">IEEE E-Copyright Process Document</h4>
                <p className="text-sm text-slate-600 mt-1">Final Submission with IEEE Xplore®-Compatible PDFs</p>
              </div>
              <a href="https://www.ieee.org/publications/rights/copyright-policy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-full text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors">
                View Process &rarr;
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12">
          <ContactUsLayout />
        </div>

      </div>
    </div>
  );
};

export default Authors;