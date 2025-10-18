import React from 'react'
import HeroSection from '../Components/HeroSection'
import Cards from '../Components/Cards'
import CountDown from '../Components/CountDown'
import trophy from '../assets/trophy.png'
import star from '../assets/star.jpg'
import benefits from '../assets/benefits.jpg'
import Exposure from '../assets/Exposure.jpg'
import network from '../assets/network.jpg'
import researchAssets from '../assets/researchAssets.avif'
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout'


const Home = () => {
  return (
    <div className='bg-gray-100'>
        <HeroSection/>
        <CountDown/>

        <h2 className='max-w-6xl mx-auto mt-8 text-2xl text-gray-600 text-left font-semibold px-4'>ABOUT THE CONFERENCE</h2>

      <div className='max-w-6xl mx-auto p-4 text-lg text-gray-700 tracking-wide text-justify px-4'>
        <p>  The IEEE International Conference on Computational Intelligence Systems and Devices (ICCISD -2026), technically sponsored by IEEE Uttar Pradesh Section and  hosted by Sharda University, Greater Noida will be held on 23rd - 24th July 2026.
        The conference offers a comprehensive platform for researchers, practitioners, and industry professionals to explore advancements in Computer Science, Information Technology, and Computational Intelligence. The conference focuses on leveraging emerging technologies to address global challenges in sustainability. It covers a broad spectrum of cutting-edge topics and applications, emphasizing the integration of intelligent systems and sustainable practices.It is planned to submit the peer reviewed and selected papers of conference as proceedings for possible inclusion in IEEE Xplore.</p>
        </div>

  <h2 className='max-w-6xl mx-auto mt-6 text-2xl text-gray-600 text-left font-semibold tracking-wide px-4'>THE OBJECTIVE OF THE CONFERENCE</h2>

  <div className='max-w-6xl mx-auto p-4 text-lg text-amber-600 tracking-wide text-justify px-4'>
          The conference will provide an opportunity to the students, scholars, practicing engineers, academicians, and researchers to meet in a forum to discuss various issues and its future direction of various emerging areas of science and technologies and impacts on sustainable development. The objectives of the conference are as follows.
        </div>

  <ul className='max-w-6xl mx-auto p-4 text-lg text-justify text-gray-700 list-disc tracking-wide px-4'>
  <li>To bring together researchers, scientists, engineers, policymakers, and industry experts to present and discuss innovative solutions leveraging computational intelligence and evolutionary computation.</li>
  <li>Foster the development of intelligent, adaptive, and energy-efficient devices and embedded systems that enhance IoT scalability, security, and sustainability.</li>
  <li>Support the integration of AI and computational intelligence into sustainable systems including renewable energy, smart grids, climate modelling, and sustainable urban infrastructure.</li>
  <li>To provide a platform for showcasing successful case studies of smart cities contributing to environmental, economic, and social sustainability.</li>
  <li>Encourage breakthroughs in signal and image processing using AI to improve healthcare, remote sensing, multimedia, and real-time analytics applications.</li>
  <li>Facilitate interdisciplinary collaboration among academia, industry, and government to accelerate the translation of intelligent technologies into real-world sustainable solutions.</li>
  <li>Promote ethical, explainable, and responsible AI practices to build trust, transparency, and societal acceptance in emerging intelligent systems and technologies.</li>
  <li>Promote cutting-edge robotics, automation, and human–machine interaction technologies aimed at improving industrial efficiency, environmental conservation, and safety.</li>
</ul>


  <div className='max-w-6xl mx-auto p-4 text-lg text-justify text-gray-700 tracking-wide px-4'>
          The conference will cover a wide range of topics related to Smart Cities and Urban Development, Artificial Intelligence and Machine Learning, Advance Data Communication and Edge Computing, Cyber Security and Privacy in Sustainable Systems, Renewable Energy and Smart Grids, Robotics Automation and Networking, Digital Health and Smart Health Informatics. The conference invites original research papers (not being considered for publication elsewhere) of 5 pages in standard IEEE conference template in one of the following tracks (but are not limited to):
        </div>

  <div className='max-w-6xl mx-auto p-4 text-lg text-left text-gray-700 tracking-wide flex flex-col gap-10 bg-white my-6 rounded-2xl px-4'>

  {/* Grouped Track Sections */}
  {[1, 2, 3].map((group, groupIndex) => {
    const trackPairs = [
      [
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
          ],
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
          ],
        },
      ],
      [
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
        ],
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
          ],
        },
      ],
      [
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
          ],
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
      'Risk Management and Resilient Design for Smart Devices',          ],
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
        ],
        },
      ],
    ];

    return (
      <div key={groupIndex} className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-6'>
        {trackPairs[groupIndex].map((track, index) => (
          <section key={index} className='w-full md:w-[48%]'>
            <h1 className='text-xl md:text-2xl text-sky-800 font-semibold mb-2'>{track.title}</h1>
            <ul className='pl-6 list-disc space-y-1 text-gray-700'>
              {track.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  })}

 
</div>


        <h2 className='mt-8 text-3xl md:text-4xl text-gray-800 font-semibold text-center'>Why <span className='text-sky-800'>ICCISD 2026?</span></h2>
        <p className='max-w-4xl mx-auto p-4 text-center text-lg my-2 font-semibold text-gray-700'>Join the premier international conference bridging computational intelligence and sustainable development for a better tomorrow</p>

          <div className='max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <Cards source={trophy} alt='Trophy' heading='IEEE Xplore Indexing' content='All accepted papers will be published in IEEE Xplore Digital Library with DOI assignment for global visibility and citations'/>
            <Cards source={star} alt='Star' heading='World-Class Speakers' content='Learn from renowned experts in AI, sustainability, and computational intelligence through keynotes and invited talks'/>
            <Cards source={network} alt='Network' heading='Networking Excellence' content='Connect with researchers, academics, and industry leaders from around the world in both physical and virtual formats'/>
            <Cards source={researchAssets} alt='Research' heading='7 Research Tracks' content='AI for Sustainability, Communication, Renewable Energy, Robotics and Automation, Cyber security, Health Care, Infrastructure and Smart city'/>
            <Cards source={benefits} alt='Benefits' heading='IEEE Member Benefits' content='Special discounts for IEEE members, professional recognition, and continuing education credits for career advancement'/>
            <Cards source={Exposure} alt='Hybrid' heading='Hybrid Experience' content='Participate in-person at beautiful Sharda University campus or join virtually with live streaming and interactive sessions'/>
          </div>
<div className="w-[90%] mx-auto my-6 p-4 bg-gray-100 rounded-md text-center text-sm text-gray-700">

</div>
        <ContactUsLayout/>
      
    </div>
  )
}

export default Home