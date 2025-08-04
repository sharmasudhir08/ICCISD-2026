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

        <div className='w-[80%] mx-auto p-4 text-lg text-left text-gray-700 tracking-wide'>
          The IEEE International Conference on Computational Intelligence for Sustainable Development (ICCISD -2026), technically sponsored by IEEE Uttar Pradesh Section and  hosted by Sharda University, Greater Noida will be held on 23rd - 24th July 2026.
          The conference offers a comprehensive platform for researchers, practitioners, and industry professionals to explore advancements in Computer Science, Information Technology, and Computational Intelligence. The conference focuses on leveraging emerging technologies to address global challenges in sustainability. It covers a broad spectrum of cutting-edge topics and applications, emphasizing the integration of intelligent systems and sustainable practices.It is planned to publish the peer reviewed and selected papers of conference as proceedings in the IEEE Xplore.
        </div>

        <h1 className='w-[80%] mx-auto mt-5 text-2xl text-gray-600 text-left font-semibold tracking-wide'>THE OBJECTIVE OF THE CONFERENCE</h1>

        <div className='w-[80%] mx-auto p-4 text-lg text-left text-amber-600 tracking-wide'>
          The conference will provide an opportunity to the students, scholars, practicing engineers, academicians, and researchers to meet in a forum to discuss various issues and its future direction of various emerging areas of science and technologies and impacts on sustainable development. The objectives of the conference are as follows.
        </div>

        <ul className='w-[80%] mx-auto p-4 text-lg text-left text-gray-700 list-disc tracking-wide'>
          <li>To bring together researchers, scientists, engineers, policymakers, and industry experts to present and discuss innovative solutions leveraging emerging science and technology to address global sustainability challenges.</li>
          <li>To promote innovative data-driven models for energy optimization, waste reduction, and climate prediction.</li>
          <li>To discuss advancements in IoT, 5G/6G, and wireless sensor networks that contribute to sustainable development.</li>
          <li>To present intelligent algorithms for efficient integration and management of renewable energy sources.</li>
          <li>To encourage the development of autonomous systems for environmental monitoring and disaster response.</li>
          <li>To address the critical role of cyber security in protecting sustainable digital infrastructures.</li>
          <li>To explore how AI, IoT, and wearable technologies can revolutionize preventive and personalized healthcare.</li>
          <li>To provide a platform for showcasing successful case studies of smart cities contributing to environmental, economic, and social sustainability.</li>
        </ul>

        <div className='w-[80%] mx-auto p-4 text-lg text-left text-gray-700 tracking-wide'>
          The conference will cover a wide range of topics related to Smart Cities and Urban Development, Artificial Intelligence and Machine Learning, Advance Data Communication and Edge Computing, Cyber Security and Privacy in Sustainable Systems, Renewable Energy and Smart Grids, Robotics Automation and Networking, Digital Health and Smart Health Informatics. The conference invites original research papers (not being considered for publication elsewhere) of 4 pages in standard IEEE conference template in one of the following tracks (but are not limited to):
        </div>

        <div className='w-[90%] mx-auto p-4 text-lg text-left text-gray-700 tracking-wide flex flex-col gap-10 bg-white my-4 rounded-2xl'>

  {/* Grouped Track Sections */}
  {[1, 2, 3].map((group, groupIndex) => {
    const trackPairs = [
      [
        {
          title: 'Track 1: Machine Learning and Data Science for Sustainable Solutions',
          topics: [
            'Core Machine Learning Techniques',
            'Advanced AI and Computational Theories',
            'Hybrid and Soft Computing Approaches',
            'Data Science Techniques',
            'Specialized and Emerging Areas',
          ],
        },
        {
          title: 'Track 2: Communication and Smart Technologies for Sustainable Systems',
          topics: [
            'Core Communication Technologies',
            'Advanced Networking Solutions',
            'Smart and Sustainable Systems',
            'Emerging and Enabling Technologies',
            'Data Management and Analysis in Communication',
            'Sustainability-Focused Approaches',
            'Smart City and Urban Solutions',
          ],
        },
      ],
      [
        {
          title: 'Track 3: Computational Intelligence in Renewable Energy Systems',
          topics: [
            'Core Computational Intelligence Techniques',
            'AI in Energy Generation and Management',
            'Advanced Monitoring and Analysis',
            'Emerging Technologies in Energy Systems',
            'Sustainability and Efficiency Enhancements',
            'Cybersecurity and Reliability',
            'Applications in Specific Energy Sectors',
          ],
        },
        {
          title: 'Track 4: Robotics and Automation for Sustainable Practices',
          topics: [
            'Core Robotics and Automation Technologies',
            'Sustainable Industrial Automation',
            'Robotics in Environmental Conservation',
            'Transportation and Logistics',
            'Agriculture and Food Production',
            'Construction and Smart Infrastructure',
            'Emerging Technologies and Human-Robot Collaboration',
            'Energy Management and Efficiency',
          ],
        },
      ],
      [
        {
          title: 'Track 5: Cyber security and Data Privacy in Sustainable Systems',
          topics: [
            'Core Cybersecurity Principles',
            'Data Privacy in Sustainable Systems',
            'Emerging Cybersecurity Technologies',
            'Cyber-Physical Security',
            'Compliance and Legal Aspects',
            'Application-Specific Security Solutions',
            'Resilience and Recovery',
            'AI and Cybersecurity Integration',
          ],
        },
        {
          title: 'Track 6: Emerging Technologies in Health Care',
          topics: [
            'Core AI and Machine Learning Applications',
            'Telemedicine and Remote Health Care Solutions',
            'Robotics and Automation in Health Care',
            'Genomics and Bioinformatics',
            'Wearable Technology and Smart Health Devices',
            'Big Data and Data Management in Health Care',
            'Emerging Health Technologies',
            'Cyber security and Data Privacy',
            'Sustainable and Equitable Health Solutions',
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

  {/* Final Track (Track 7) */}
  <div className='flex flex-col'>
    <section className='w-full'>
      <h1 className='text-xl md:text-2xl text-sky-800 font-semibold mb-2'>
        Track 7: Sustainable Infrastructure and Smart City Solutions
      </h1>
      <ul className='pl-6 list-disc space-y-1 text-gray-700'>
        {[
          'Core Smart City Technologies',
          'Sustainable Urban Infrastructure',
          'Digital Twin Technology',
          'Transportation and Mobility',
          'Security and Data Privacy in Smart Cities',
          'Sustainable Energy and Resource Management',
          'Environment and Climate Monitoring',
          'Citizen Engagement and Smart Governance',
          'Advanced Technologies and Future Trends',
          'Sustainability and Efficiency Enhancements',
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  </div>

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

        <ContactUsLayout/>
      
    </div>
  )
}

export default Home