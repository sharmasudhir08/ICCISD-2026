import React from 'react';
import su from '../assets/su.png'; // Sharda University background image
import redfort from '../assets/redfort.jpg';
import qutubminar from '../assets/qutubminar.jpg';
import indiagate from '../assets/indiagate.jpg';
import rishikesh from '../assets/rishikesh.jpg';
import haridwar from '../assets/haridwar.jpg';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';

const Venue = () => {
  return (
    <div className='bg-slate-50 font-sans'>

      {/* Header Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Venue
          </h1>
          <p className="mt-4 text-xl text-blue-200">Sharda University, Greater Noida</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Venue Details Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
          <div className="relative h-64 md:h-80 bg-slate-200">
            <img src={su} alt="Sharda University" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">Sharda University</h2>
              <p className="text-lg opacity-90 mt-2">Knowledge Park III, Greater Noida, Ruhallapur, Uttar Pradesh 201310</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-12">
          <iframe
            title='Sharda University Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7039053899697!2d77.48699927549792!3d28.474334491687706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb77a23d6423%3A0x6e1e4e777fc3a70d!2sSharda%20University!5e0!3m2!1sen!2sin!4v1712345678901'
            width='100%'
            height='450'
            className='rounded-xl'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>

        {/* Tourist Attractions Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-3">
              Explore NCR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Tourist Attractions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover the rich heritage and modern marvels of NCR through these must-visit tourist attractions.
            </p>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Red Fort",
                image: redfort,
                description: "A historic fort in Delhi that served as the main residence of the Mughal emperors for nearly 200 years.",
                location: "https://maps.google.com/?q=Red+Fort+Delhi",
                distance: "~45 km"
              },
              {
                name: "Qutub Minar",
                image: qutubminar,
                description: "A 73-meter tall minaret which is a UNESCO World Heritage Site, showcasing Indo-Islamic architecture.",
                location: "https://maps.google.com/?q=Qutub+Minar+Delhi",
                distance: "~35 km"
              },
              {
                name: "India Gate",
                image: indiagate,
                description: "A war memorial located astride the Rajpath, built in memory of 70,000 Indian soldiers who died in World War I.",
                location: "https://maps.google.com/?q=India+Gate+Delhi",
                distance: "~40 km"
              },
              {
                name: "Rishikesh",
                image: rishikesh,
                description: "A spiritual city known as the 'Yoga Capital of the World', located in the foothills of the Himalayas along the Ganges.",
                location: "https://maps.google.com/?q=Rishikesh+Uttarakhand",
                distance: "~240 km"
              },
              {
                name: "Haridwar",
                image: haridwar,
                description: "One of the seven holiest places in Hinduism, famous for the Ganga Aarti at Har Ki Pauri ghat.",
                location: "https://maps.google.com/?q=Haridwar+Uttarakhand",
                distance: "~210 km"
              },
              {
                name: "Taj Mahal",
                image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
                description: "An iconic ivory-white marble mausoleum in Agra, built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
                location: "https://maps.google.com/?q=Taj+Mahal+Agra",
                distance: "~180 km"
              }
            ].map((attraction, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{attraction.name}</h3>
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
                      {attraction.distance}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  <a
                    href={attraction.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View Location
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Tips */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Travel Tips for Conference Attendees</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Best time to visit nearby attractions is early morning to avoid crowds</li>
                  <li>• Local transportation like Uber and Ola are readily available</li>
                  <li>• Delhi Metro connects well to most tourist spots in Delhi NCR</li>
                  <li>• Consider taking organized day tours for Agra, Rishikesh & Haridwar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ContactUsLayout />
      </div>
    </div>
  );
};

export default Venue;
