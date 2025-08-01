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
          The IEEE International Conference on Computational Intelligence for Sustainable Development (ICCISD -2026), technically sponsored by IEEE Uttar Pradesh Section and  hosted by Sharda University, Greater Noida will be held on 21st and 22nd June 2026.
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

        <div className='w-[80%] mx-auto p-4 text-lg text-left text-gray-700 tracking-wide flex flex-col gap-5 bg-white my-4 rounded-2xl'>

          <div className='flex flex-wrap justify-between items-start gap-4'>

            <section className='w-[48%]'>
              <h1 className='text-2xl text-sky-800 font-semibold'>Track 1: Machine Learning and Data Science for Sustainable Solutions</h1>
              <ul className=' p-4 text-lg text-left text-gray-700 list-disc'>
                <li>Core Machine Learning Techniques</li>
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

        <h1 className='mt-5 text-4xl text-gray-800 font-semibold flex justify-center items-center gap-4'>Why <p className='text-sky-800'>ICCISD 2026?</p> </h1>
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