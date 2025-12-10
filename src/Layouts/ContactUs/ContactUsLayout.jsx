import { contactDetails } from "../../utils/contactDetails";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";

const ContactUsLayout = () => {
  const [allMembers, setAllMembers] = useState(contactDetails);
  const [currentTab, setCurrentTab] = useState("Organizing Chair");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const membersConcerned = allMembers.filter(
      (e) => e.designation === currentTab
    );
    setMembers(membersConcerned);
  }, [currentTab, allMembers]);

  return (
    <div className="mt-16 mb-16 px-4">
      <section className="w-full max-w-6xl mx-auto">
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-2xl sm:text-3xl text-center font-bold mb-8">CONTACT US</h1>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "Organizing Chair",
              "Convener",
              "Co-Convener",
              "For Publication Related Query",
              "For Registration Related Query",
            ].map((tab) => {
              const isActive = currentTab === tab;
              const activeClass = "bg-blue-600 text-white shadow-md border-blue-500";
              const inactiveClass = "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700";

              return (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${isActive ? activeClass : inactiveClass}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Cards Container */}
          <div className="flex flex-wrap justify-center gap-8">
            {members.map((e, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-slate-900 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300 w-full sm:w-80">
                {/*  We can't easily reuse ContactCard if it has hardcoded styles, so inline the card for better control or assume ContactCard adapts. 
                      Let's inline a simple card structure here to guarantee the theme match requested. 
                  */}
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1">{e.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{e.designation}</p>

                <div className="space-y-2 w-full">
                  <a href={`mailto:${e.email}`} className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:underline bg-blue-50 py-2 rounded-lg w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {e.email}
                  </a>
                  {(e.phone || e.Phone) && (
                    <a href={`tel:${e.phone || e.Phone}`} className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-slate-900 bg-slate-100 py-2 rounded-lg w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {e.phone || e.Phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsLayout;
