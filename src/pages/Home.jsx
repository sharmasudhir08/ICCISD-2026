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

        <h1 className='w-[80%] mx-auto mt-5 text-2xl text-gray-600 text-left font-semibold'>ABOUT THE CONFERENCE</h1>

      <div className='w-[80%] mx-auto p-4 text-lg text-gray-700 tracking-wide text-justify'>
        <p>  The IEEEInternational Conference on Computational Intelligence Systems and Devices (ICCISD -2026), technically sponsored by IEEE Uttar Pradesh Section and  hosted by Sharda University, Greater Noida will be held on 23rd - 24th July 2026.
        The conference offers a comprehensive platform for researchers, practitioners, and industry professionals to explore advancements in Computer Science, Information Technology, and Computational Intelligence. The conference focuses on leveraging emerging technologies to address global challenges in sustainability. It covers a broad spectrum of cutting-edge topics and applications, emphasizing the integration of intelligent systems and sustainable practices.It is planned to publish the peer reviewed and selected papers of conference as proceedings in the IEEE Xplore.</p>
        </div>

        <h1 className='w-[80%] mx-auto mt-5 text-2xl text-gray-600 text-left font-semibold tracking-wide'>THE OBJECTIVE OF THE CONFERENCE</h1>

        <div className='w-[80%] mx-auto p-4 text-lg text-amber-600 tracking-wide text-justify'>
          The conference will provide an opportunity to the students, scholars, practicing engineers, academicians, and researchers to meet in a forum to discuss various issues and its future direction of various emerging areas of science and technologies and impacts on sustainable development. The objectives of the conference are as follows.
        </div>

        <ul className='w-[80%] mx-auto p-4 text-lg text-justify text-gray-700 list-disc tracking-wide'>
          <li>To bring together researchers, scientists, engineers, policymakers, and industry experts to present and discuss innovative solutions leveraging emerging science and technology to address global sustainability challenges.</li>
          <li>To promote innovative data-driven models for energy optimization, waste reduction, and climate prediction.</li>
          <li>To discuss advancements in IoT, 5G/6G, and wireless sensor networks that contribute to sustainable development.</li>
          <li>To present intelligent algorithms for efficient integration and management of renewable energy sources.</li>
          <li>To encourage the development of autonomous systems for environmental monitoring and disaster response.</li>
          <li>To address the critical role of cyber security in protecting sustainable digital infrastructures.</li>
          <li>To explore how AI, IoT, and wearable technologies can revolutionize preventive and personalized healthcare.</li>
          <li>To provide a platform for showcasing successful case studies of smart cities contributing to environmental, economic, and social sustainability.</li>
        </ul>

        <div className='w-[80%] mx-auto p-4 text-lg text-justify text-gray-700 tracking-wide'>
          The conference will cover a wide range of topics related to Smart Cities and Urban Development, Artificial Intelligence and Machine Learning, Advance Data Communication and Edge Computing, Cyber Security and Privacy in Sustainable Systems, Renewable Energy and Smart Grids, Robotics Automation and Networking, Digital Health and Smart Health Informatics. The conference invites original research papers (not being considered for publication elsewhere) of 5 pages in standard IEEE conference template in one of the following tracks (but are not limited to):
        </div>

        <div className='w-[90%] mx-auto p-4 text-lg text-left text-gray-700 tracking-wide flex flex-col gap-10 bg-white my-4 rounded-2xl'>

  {/* Grouped Track Sections */}
  {[1, 2, 3].map((group, groupIndex) => {
    const trackPairs = [
      [
        {
          title: 'Track 1: Neural Networks, Deep Learning, and Reinforcement Learning',
topics: [
      'Explainable AI and Interpretable Deep Models',
      'Foundation Models and Large Language Models (LLMs)',
      'Few-Shot, Zero-Shot, and Self-Supervised Learning',
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


        <h1 className='mt-5 text-2xl sm:text-4xl text-gray-800 font-semibold flex justify-center items-center gap-4'>Why <p className='text-sky-800'>ICCISD 2026?</p> </h1>
        <h2 className='w-[80%] mx-auto p-4 text-2xl my-2 font-semibold'>Join the premier international conference bridging computational intelligence and sustainable development for a better tomorrow</h2>

          <div className='w-[100%] h-auto flex flex-wrap justify-center items-center bg-gray-100 p-4'>
            <Cards source={trophy} heading='IEEE Xplore Indexing' content='All accepted papers will be published in IEEE Xplore Digital Library with DOI assignment for global visibility and citations'/>
            <Cards source={star} heading='World-Class Speakers' content='Learn from renowned experts in AI, sustainability, and computational intelligence through keynotes and invited talks'/>
            <Cards source={network} heading='Networking Excellence' content='Connect with researchers, academics, and industry leaders from around the world in both physical and virtual formats'/>
            <Cards source={researchAssets} heading='7 Research Tracks' content='AI for Sustainability, Communication, Renewable Energy, Robotics and Automation, Cyber security, Health Care, Infrastructure and Smart city'/>
            <Cards source={benefits} heading='IEEE Member Benefits' content='Special discounts for IEEE members, professional recognition, and continuing education credits for career advancement'/>
            <Cards source={Exposure} heading='Hybrid Experience' content='Participate in-person at beautiful Sharda University campus or join virtually with live streaming and interactive sessions'/>
          </div>
<div className="w-[90%] mx-auto my-6 p-4 bg-gray-100 rounded-md text-center text-sm text-gray-700">

</div>
        <ContactUsLayout/>
      
    </div>
  )
}

export default Home