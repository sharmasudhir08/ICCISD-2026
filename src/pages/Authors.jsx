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
                Track 1: Machine Learning and Data Science for Sustainable Solutions
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    1.1	Core Machine Learning Techniques
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

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    1.2	Advanced AI and Computational Theories
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Deep Learning</li>
                    <li>Generative AI</li>
                    <li>Large Language Models (LLMs)</li>
                    <li>Computational Theories of Learning</li>
                    <li>Multi-Agent Systems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    1.3	Hybrid and Soft Computing Approaches
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Fuzzy Systems</li>
                    <li>Neural Fuzzy Systems</li>
                    <li>Genetic Algorithm and Programming</li>
                    <li>Neural Genetic Systems</li>
                    <li>Hybrid Intelligent Systems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    1.4	Data Science Techniques
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Data Mining</li>
                    <li>Data Fusion Techniques</li>
                    <li>Big Data Analytics</li>
                    <li>Bioinformatics</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    1.5	Specialized and Emerging Areas
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Federated Learning for Privacy-Preserving Solutions</li>
                    <li>Explainable AI (XAI)</li>
                    <li>Pattern Recognition</li>
                    <li>Natural Language Processing (NLP)</li>
                    <li>Bioinformatics for Sustainable Health Solutions</li>
                  </ul>
                </li>
                
              </ul>
            </section>

            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 2: Communication and Smart Technologies for Sustainable Systems
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.1	Core Communication Technologies
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Wireless Communication Protocols (e.g., 5G/6G)</li>
                    <li>IoT Communication Standards</li>
                    <li>Network Protocols for Energy Efficiency</li>
                    <li>Wireless Sensor Networks (WSNs)</li>
                    <li>Cognitive Radio Networks</li>
                  </ul>
                </li>
                
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.2	Advanced Networking Solutions
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Software-Defined Networking (SDN)</li>
                    <li>Network Function Virtualization (NFV)</li>
                    <li>Green Computing and Energy-Efficient Networking</li>
                    <li>Edge and Fog Computing for Reduced Latency and Energy Use</li>
                    <li>Cloud-Native Solutions for Sustainable Data Management</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.3	Smart and Sustainable Systems
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Smart Grid Communication and Energy Management</li>
                    <li>Smart Transportation and Connected Vehicle Systems</li>
                    <li>Smart Agriculture Communication Solutions</li>
                    <li>Intelligent Building Management Systems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.4	Emerging and Enabling Technologies
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>6G and Beyond: Advancements for Sustainable Networks</li>
                    <li>Ultra-Reliable Low-Latency Communication (URLLC)</li>
                    <li>Quantum Communication for Enhanced Security and Efficiency</li>
                    <li>Satellite Communication for Remote Sustainable Solutions</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.5	Data Management and Analysis in Communication
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Data Compression Techniques for Energy Savings</li>
                    <li>Real-Time Data Processing and Analytics</li>
                    <li>Big Data Integration in Communication Systems</li>
                    <li>Data Privacy and Security in Smart Communication Systems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.6	Sustainability-Focused Approaches
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Energy-Efficient Protocols and Algorithms</li>
                    <li>Low-Power Wide-Area Networks (LPWAN) for IoT</li>
                    <li>Optimization of Network Resources for Minimal Energy Use</li>
                    <li>Environmental Monitoring through Communication Technologies</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    2.7	Smart City and Urban Solutions
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Communication Infrastructure for Smart Cities</li>
                    <li>IoT for Urban Planning and Sustainable Development</li>
                    <li>Public Safety Networks and Emergency Communication Systems</li>
                  </ul>
                </li>


              </ul>
            </section>
          </div>

          
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

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    3.2	AI in Energy Generation and Management
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Predictive Maintenance of Renewable Energy Systems</li>
                    <li>AI for Solar Power Generation Optimization</li>
                    <li>Wind Energy Production Forecasting and Control</li>
                    <li>Hybrid Energy Systems Optimization (e.g., solar-wind, solar-battery)</li>
                    <li>AI-Driven Grid Stability and Load Balancing</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    3.3	Advanced Monitoring and Analysis
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Remote Sensing and Monitoring using AI</li>
                    <li>Data Fusion Techniques for Integrating Multiple Energy Sources</li>
                    <li>Time Series Analysis for Energy Demand Prediction</li>
                    <li>Real-Time Data Analytics for Energy Systems</li>
                  </ul>
                </li>

                 <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    3.4	Emerging Technologies in Energy Systems
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Blockchain for Transparent Energy Trading and Management</li>
                    <li>Smart Grids with AI-Based Decision-Making</li>
                    <li>Integration of IoT with Renewable Energy Systems</li>
                    <li>Edge and Fog Computing for Decentralized Energy Control</li>
                    <li>Digital Twin Technology for Energy Asset Management</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    3.5	Sustainability and Efficiency Enhancements
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Energy Storage Management using AI</li>
                    <li>Demand Response Optimization through Machine Learning</li>
                    <li>Energy Loss Reduction with Predictive Algorithms</li>
                    <li>Climate Impact Analysis for Renewable Energy Projects</li>
                    <li>Sustainable Energy Harvesting and Resource Allocation</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    3.6	Cybersecurity and Reliability
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Securing Renewable Energy Systems using AI</li>
                    <li>Cyber-Physical Security Solutions for Smart Grids</li>
                    <li>Privacy-Preserving Energy Management Systems</li>
                    <li>Risk Management and Fault Detection in Renewable Energy Infrastructures</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    3.7	Applications in Specific Energy Sectors
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Solar Photovoltaic System Performance Analysis</li>
                    <li>Wind Turbine Condition Monitoring and Optimization</li>
                    <li>Hydropower Generation Using Intelligent Systems</li>
                    <li>AI for Geothermal and Bioenergy Systems</li>
                  </ul>
                </li>
                
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
                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                  4.2	Sustainable Industrial Automation                  
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Green Manufacturing Practices through Automation</li>
                    <li>Energy-Efficient Production Lines</li>
                    <li>AI-Driven Predictive Maintenance for Industrial Robots</li>
                    <li>Collaborative Robots (Cobots) in Eco-Friendly Workflows</li>
                    <li>Automated Quality Control for Sustainable Production</li>
                  </ul>
                </li>

              <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                  4.3	Robotics in Environmental Conservation                
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Drones for Environmental Monitoring and Data Collection</li>
                    <li>Autonomous Systems for Wildlife Protection and Habitat Mapping</li>
                    <li>Robotic Solutions for Reforestation and Land Rehabilitation</li>
                    <li>Waste Collection and Recycling Automation</li>
                    <li>Ocean and Waterway Cleaning Robots</li>
                  </ul>
              </li>

              <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                     4.4	Transportation and Logistics                  
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Autonomous Vehicles for Low-Emission Transport</li>
                    <li>AI-Powered Fleet Management for Green Logistics</li>
                    <li>Last-Mile Delivery Robots and Electric Drones</li>
                    <li>Sustainable Traffic Management with Robotic Systems</li>
                    <li>Automation in Electric Vehicle (EV) Charging Stations</li>
                  </ul>
               </li>

              <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                     4.5	Agriculture and Food Production                  
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Precision Agriculture using Autonomous Machines</li>
                    <li>Robotic Systems for Sustainable Crop Management</li>
                    <li>Smart Irrigation and Water Management through Automation</li>
                    <li>AI and Robotics in Vertical Farming</li>
                    <li>Automated Harvesting and Post-Harvest Processing</li>
                  </ul>
              </li>

              <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                     4.6	Construction and Smart Infrastructure                 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>3D Printing for Sustainable Construction Materials</li>
                    <li>Robotic Bricklaying and Automated Construction Vehicles</li>
                    <li>Intelligent Building Automation for Energy Efficiency</li>
                    <li>Robotics for Inspection and Maintenance of Green Infrastructure</li>
                    <li>Digital Twin Integration in Robotic Construction Systems</li>
                  </ul>
               </li>

              <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    4.7	Emerging Technologies and Human-Robot Collaboration                 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Robotics for Disaster Response and Recovery</li>
                    <li>Human-Robot Collaboration for Eco-Friendly Industrial Tasks</li>
                    <li>Sustainable Warehouse Automation with Robotics</li>
                    <li>AI-Enabled Exoskeletons for Energy-Saving Labor</li>
                    <li>Advanced Sensors and Actuators for Sustainable Robotics</li>
                  </ul>
               </li>

               <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    4.8	Energy Management and Efficiency                 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Power Optimization in Robotic Systems</li>
                    <li>Renewable Energy-Powered Robotic Operations</li>
                    <li>Robotic Solutions for Smart Energy Distribution</li>
                    <li>AI in Battery Management for Autonomous Robots</li>
                    <li>Advanced Sensors and Actuators for Sustainable Robotics</li>
                  </ul>
               </li>
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

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.2	Data Privacy in Sustainable Systems
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Privacy-Preserving Machine Learning and AI Techniques
                    </li>
                    <li>Data Anonymization and Masking for Sustainable Data Solutions</li>
                    <li>Federated Learning for Secure Data Collaboration</li>
                    <li>Differential Privacy in Smart Systems</li>
                    <li>Blockchain for Secure and Transparent Data Management</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.3	Emerging Cybersecurity Technologies
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Quantum Cryptography for Future-Proof Security
                    </li>
                    <li>Zero-Trust Architecture for Smart and Sustainable Systems</li>
                    <li>AI-Driven Cyber Defense Mechanisms</li>
                    <li>Advanced Encryption Techniques for Green IT Solutions</li>
                    <li>Blockchain and Distributed Ledger Technology for Security</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.4	Cyber-Physical Security 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Securing IoT Devices in Smart Cities and Renewable Energy Systems
                    </li>
                    <li>Threat Detection and Mitigation in Connected Sustainable Systems</li>
                    <li>Robust Security for Smart Grids and Energy Networks</li>
                    <li>Cyber-Physical Risk Analysis for Automated Systems</li>
                    <li>AI-Powered Anomaly Detection in Sustainable Infrastructure</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.5	Compliance and Legal Aspects 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Regulatory Frameworks for Cybersecurity in Sustainability Projects
                    </li>
                    <li>Data Protection Laws and Their Application to Sustainable Systems</li>
                    <li>International Standards for Sustainable Cybersecurity Practices</li>
                    <li>GDPR and Data Privacy Compliance in Green Technologies</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.6	Application-Specific Security Solutions 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Cybersecurity for Renewable Energy Management Platforms
                    </li>
                    <li>Securing Automated and Robotic Systems for Sustainable Practices</li>
                    <li>Smart Building and Home Automation Security</li>
                    <li>Protecting Health Data in Emerging Medical Technologies</li>
                    <li>Cybersecurity for Sustainable Supply Chain Management</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.7	Resilience and Recovery 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Strategies for Building Resilient Sustainable Systems
                    </li>
                    <li>Disaster Recovery Planning for Cyber-Attacks on Green Infrastructure</li>
                    <li>AI in Adaptive Security Response for Sustainability Projects</li>
                    <li>Cybersecurity Training and Awareness for Sustainable Operations</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    5.8	AI and Cybersecurity Integration 
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>
                      Using Machine Learning for Real-Time Threat Analysis
                    </li>
                    <li>Autonomous Security Systems for Protecting Smart Infrastructure</li>
                    <li>Explainable AI for Transparent Cyber Defense Mechanisms</li>
                    <li>Collaborative AI Models for Distributed Cybersecurity Solutions</li>
                  </ul>
                </li>

              
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

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.2	Telemedicine and Remote Health Care Solutions
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Telemedicine Platforms for Improved Access to Care</li>
                    <li>Remote Patient Monitoring with IoT and Wearable Devices</li>
                    <li>Mobile Health (mHealth) Applications for Disease Management</li>
                    <li>Real-Time Data Analysis for Remote Health Monitoring</li>
                    <li>AI Chatbots and Virtual Health Assistants</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.3	Robotics and Automation in Health Care
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Surgical Robots for Minimally Invasive Procedures</li>
                    <li>Robotic Process Automation (RPA) in Health Care Administration</li>
                    <li>Assistive Robotics for Elderly and Disabled Care</li>
                    <li>Autonomous Disinfection Robots for Infection Control</li>
                    <li>AI-Powered Prosthetics and Rehabilitation Robotics</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.4	Genomics and Bioinformatics
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>AI for Genomic Data Analysis and Interpretation</li>
                    <li>Machine Learning in Personalized Genomic Medicine</li>
                    <li>Computational Biology for Disease Pathway Analysis</li>
                    <li>Bioinformatics for Drug Discovery and Vaccine Development</li>
                    <li>Integration of Multi-Omics Data for Comprehensive Insights</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.5	Wearable Technology and Smart Health Devices
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Advanced Wearables for Continuous Health Monitoring</li>
                    <li>Smart Sensors for Detecting Early Disease Symptoms</li>
                    <li>AI Algorithms for Wearable Data Interpretation</li>
                    <li>Smart Contact Lenses and Implantable Health Devices</li>
                    <li>Real-Time Alerts and Notifications for Health Emergencies</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.6	Big Data and Data Management in Health Care
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Big Data Analytics for Population Health Management</li>
                    <li>Data Integration from Multiple Health Data Sources</li>
                    <li>Secure Data Sharing and Interoperability in Health Systems</li>
                    <li>Predictive Modeling for Public Health Outbreaks</li>
                    <li>Cloud-Based Health Care Data Solutions</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.7	Emerging Health Technologies
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Blockchain for Health Record Management and Security</li>
                    <li>3D Printing for Custom Prosthetics and Bioprinting Tissues</li>
                    <li>Augmented Reality (AR) and Virtual Reality (VR) for Medical Training</li>
                    <li>AI-Enabled Drug Discovery Platforms</li>
                    <li>Internet of Medical Things (IoMT) for Connected Health Ecosystems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.8	Cybersecurity and Data Privacy
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Privacy-Preserving Technologies for Health Data</li>
                    <li>Secure Communication Protocols for Health Care IoT Devices</li>
                    <li>Cybersecurity Solutions for Protecting Patient Records</li>
                    <li>Compliance with Health Data Regulations (e.g., HIPAA, GDPR)</li>
                    <li>Risk Management in Health IT Systems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    6.9	Sustainable and Equitable Health Solutions
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Affordable AI Solutions for Low-Resource Settings</li>
                    <li>Health Care Accessibility through Emerging Technologies</li>
                    <li>Green Technology in Health Equipment Design</li>
                    <li>Telehealth and Remote Care for Rural and Underserved Areas</li>
                  </ul>
                </li>

              </ul>
            </section>
          </div>

          
          <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
            <section className="w-full md:w-[48%]">
              <h1 className="text-xl sm:text-2xl text-sky-800 font-semibold">
                Track 7: Sustainable Infrastructure and Smart City Solutions
              </h1>
              <ul className="p-4 text-base text-gray-700 list-disc">

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.1	Core Smart City Technologies
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>IoT Solutions for Smart Cities</li>
                    <li>AI and Machine Learning for Urban Planning</li>
                    <li>Sensor Networks for City-Wide Monitoring</li>
                    <li>Edge and Fog Computing for Real-Time City Data Processing</li>
                    <li>Intelligent Traffic Management Systems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.2	Sustainable Urban Infrastructure
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Green Building Technologies and Energy-Efficient Designs</li>
                    <li>Smart Grid Systems for Efficient Energy Distribution</li>
                    <li>Renewable Energy Integration in Urban Infrastructure</li>
                    <li>Sustainable Waste Management Solutions</li>
                    <li>Water Conservation and Smart Water Management Systems</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.3	Digital Twin Technology
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Digital Twins for Urban Infrastructure Planning</li>
                    <li>Simulation and Modeling of Smart City Operations</li>
                    <li>Predictive Maintenance Using Digital Twins</li>
                    <li>Integration of Digital Twins with IoT and AI</li>
                    <li>Data Visualization and Analytics for City Management</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.4	Transportation and Mobility
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Autonomous and Electric Vehicle Infrastructure</li>
                    <li>Public Transportation Optimization Using AI</li>
                    <li>Smart Parking Solutions and Traffic Flow Management</li>
                    <li>Shared Mobility Platforms and Sustainable Transport</li>
                    <li>Integration of Bike and Pedestrian-Friendly Infrastructure</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.5	Security and Data Privacy in Smart Cities
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Cybersecurity Solutions for Critical City Infrastructure</li>
                    <li>Data Privacy Regulations and Compliance in Smart City Systems</li>
                    <li>AI-Driven Surveillance and Public Safety Management</li>
                    <li>Threat Detection and Incident Response in Urban Networks</li>
                    <li>Blockchain for Secure Data Management in Smart Cities</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.6	Sustainable Energy and Resource Management
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>AI for Renewable Energy Optimization in Urban Settings</li>
                    <li>Energy Storage Solutions for Continuous Power Supply</li>
                    <li>AI-Powered Demand Response Systemst</li>
                    <li>Smart Metering and Consumption Analytics</li>
                    <li>Solar and Wind Power Integration in Urban Areas</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.7	Environment and Climate Monitoring
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Air Quality Monitoring Systems Using IoT</li>
                    <li>Urban Heat Island Effect Mitigation with Smart Technologies</li>
                    <li>Noise Pollution Control Using AI</li>
                    <li>Climate Resilient Infrastructure Planning</li>
                    <li>Sustainable Landscaping and Green Spaces</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.8	Citizen Engagement and Smart Governance
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Smart Platforms for Citizen Feedback and Participation</li>
                    <li>E-Governance Solutions for Efficient Public Service Delivery</li>
                    <li>AI-Based Decision Support Systems for Policy Making</li>
                    <li>Digital Inclusion and Bridging the Technology Gap</li>
                    <li>Platforms for Community-Based Sustainable Projects</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.9	Advanced Technologies and Future Trends
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>5G/6G Technologies for Enhanced Connectivity</li>
                    <li>Blockchain Applications for Transparent City Operations</li>
                    <li>AR/VR for Urban Development Visualization</li>
                    <li>Robotics in Infrastructure Inspection and Maintenance</li>
                    <li>Integration of AI and Robotics for Urban Emergency Response</li>
                  </ul>
                </li>

                <li className="list-none">
                  <h1 className="text-lg sm:text-xl text-sky-900 font-semibold">
                    7.10	Sustainability and Efficiency Enhancements
                  </h1>
                  <ul className="p-4 ml-2 text-sm sm:text-base list-disc">
                    <li>Resource Optimization through AI-Driven Analytics</li>
                    <li>Smart Lighting and Energy-Saving City Solutions</li>
                    <li>Waste-to-Energy Conversion Technologies</li>
                    <li>Circular Economy Principles in Urban Planning</li>
                    <li>Sustainable Supply Chain Solutions for City Development</li>
                  </ul>
                </li>

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
      <div className="max-w-7xl mx-auto px-4 sm:text-justify sm:px-6 lg:px-8 mt-5 text-base sm:text-lg text-gray-600">
        IEEE International Conference on Computational Intelligence for Sustainable
        Development (ICCISD -2026), will be organized by Sharda University, Greater
        Noida, U.P., India on 23rd-24th July 2026. The aim of the conference is to
        serve researchers, developers, educators to present as well as to exchange
        the research ideas in various cutting edge technologies. ICCISD -2026 invites
        authors to submit their original and unpublished work that demonstrates
        current research in all areas of science technology and sustainable
        development through Microsoft Conference Management Toolkit{' '}
        <a href="#" className="text-sky-800">
          https://cmt3.research.microsoft.com/
        </a>If you encounter problems in submitting, contact at{' '}
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