import React from 'react';
import HeroSection from '../Components/HeroSection';
import Cards from '../Components/Cards';
import CountDown from '../Components/CountDown';
import trophy from '../assets/trophy.png';
import star from '../assets/star.jpg';
import benefits from '../assets/benefits.jpg';
import Exposure from '../assets/Exposure.jpg';
import network from '../assets/network.jpg';
import researchAssets from '../assets/researchAssets.avif';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const Home = () => {
  return (
    <div className='bg-slate-50 font-sans'>
      <HeroSection />
      <CountDown />

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h2 className='text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            ABOUT THE CONFERENCE
          </h2>
          <p className='text-lg text-slate-600 leading-relaxed text-justify'>
            The IEEE International Conference on Computational Intelligence Systems and Devices (ICCISD -2026), technically co-sponsored by IEEE Uttar Pradesh Section and hosted by Sharda University, Greater Noida will be held on 23rd - 24th July 2026. The conference offers a comprehensive platform for researchers, practitioners, and industry professionals to explore advancements in Computer Science, Information Technology, and Computational Intelligence. The conference focuses on leveraging emerging technologies to address global challenges in sustainability. It covers a broad spectrum of cutting-edge topics and applications, emphasizing the integration of intelligent systems and sustainable practices. It is planned to submit the peer reviewed and selected papers of conference as proceedings for possible inclusion in IEEE Xplore.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className='bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            THE OBJECTIVE OF THE CONFERENCE
          </h2>
          <p className='text-lg text-blue-600 font-medium mb-6 text-justify leading-relaxed'>
            The conference will provide an opportunity to the students, scholars, practicing engineers, academicians, and researchers to meet in a forum to discuss various issues and its future direction of various emerging areas of science and technologies and impacts on sustainable development. The objectives of the conference are as follows.
          </p>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base text-slate-600 list-none'>
            {[
              "To bring together researchers, scientists, engineers, policymakers, and industry experts to present and discuss innovative solutions leveraging computational intelligence and evolutionary computation.",
              "Foster the development of intelligent, adaptive, and energy-efficient devices and embedded systems that enhance IoT scalability, security, and sustainability.",
              "Support the integration of AI and computational intelligence into sustainable systems including renewable energy, smart grids, climate modelling, and sustainable urban infrastructure.",
              "To provide a platform for showcasing successful case studies of smart cities contributing to environmental, economic, and social sustainability.",
              "Encourage breakthroughs in signal and image processing using AI to improve healthcare, remote sensing, multimedia, and real-time analytics applications.",
              "Facilitate interdisciplinary collaboration among academia, industry, and government to accelerate the translation of intelligent technologies into real-world sustainable solutions.",
              "Promote ethical, explainable, and responsible AI practices to build trust, transparency, and societal acceptance in emerging intelligent systems and technologies.",
              "Promote cutting-edge robotics, automation, and human–machine interaction technologies aimed at improving industrial efficiency, environmental conservation, and safety."
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">

          <h2 className='text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
            Conference Tracks
          </h2>

          <div className='text-lg text-slate-600 leading-relaxed text-justify mb-12'>
            The conference will cover a wide range of topics related to Smart Cities and Urban Development, Artificial Intelligence and Machine Learning, Advance Data Communication and Edge Computing, Cyber Security and Privacy in Sustainable Systems, Renewable Energy and Smart Grids, Robotics Automation and Networking, Digital Health and Smart Health Informatics. The conference invites original research papers (not being considered for publication elsewhere) of 5 pages in standard IEEE conference template in one of the following tracks (but are not limited to):
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {[
              {
                title: 'Track 1: Neural Networks, Deep Learning, and Reinforcement Learning',
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
                title: 'Track 2: Fuzzy Systems, Evolutionary Computation, and Hybrid Intelligence',
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
                title: 'Track 3: Intelligent Devices, Embedded Systems, and IoT Applications',
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
                title: 'Track 4: Robotics, Automation, and Human–Machine Interaction',
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
                title: 'Track 5: Signal and Image Processing using Computational Intelligence',
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
                title: 'Track 6: Cybersecurity, Data Privacy, and Trustworthy Systems',
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
                title: 'Track 7: Computational Intelligence for Sustainable Systems and Devices',
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
              <div key={i} className={`bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300 ${i === 6 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto' : ''}`}>
                <h3 className='text-lg font-bold text-blue-800 mb-3'>{track.title}</h3>
                <ul className='text-slate-600 text-sm space-y-1 list-disc pl-5'>
                  {track.topics.map((topic, j) => (
                    <li key={j}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ICCISD Section */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why <span className='text-blue-400'>ICCISD 2026?</span></h2>
          <p className='max-w-3xl mx-auto text-lg text-slate-300 mb-12 font-light'>
            Join the premier international conference bridging computational intelligence and sustainable development for a better tomorrow
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left'>
            {[
              { img: trophy, title: 'IEEE Xplore Indexing', desc: 'All accepted papers will be published in IEEE Xplore Digital Library with DOI assignment for global visibility and citations' },
              { img: star, title: 'World-Class Speakers', desc: 'Learn from renowned experts in AI, sustainability, and computational intelligence through keynotes and invited talks' },
              { img: network, title: 'Networking Excellence', desc: 'Connect with researchers, academics, and industry leaders from around the world in both physical and virtual formats' },
              { img: researchAssets, title: '7 Research Tracks', desc: 'AI for Sustainability, Communication, Renewable Energy, Robotics and Automation, Cyber security, Health Care, Infrastructure and Smart city' },
              { img: benefits, title: 'IEEE Member Benefits', desc: 'Special discounts for IEEE members, professional recognition, and continuing education credits for career advancement' },
              { img: Exposure, title: 'Hybrid Experience', desc: 'Participate in-person at beautiful Sharda University campus or join virtually with live streaming and interactive sessions' }
            ].map((card, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition-colors duration-300 border border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <img src={card.img} alt={card.title} className="w-12 h-12 object-cover rounded-lg bg-white/10" />
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactUsLayout />
    </div>
  )
}

export default Home