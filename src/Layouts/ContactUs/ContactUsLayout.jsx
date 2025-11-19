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
    <div className="mt-16 px-4">
      <section className="w-full max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-4">
        <h1 className="mt-8 text-2xl sm:text-3xl text-center font-bold">CONTACT US</h1>

        <div className="w-full mt-8 px-2 py-4 rounded-lg">
          <div className="text-base sm:text-lg font-semibold mb-3">
            <ul className="flex gap-2 items-stretch w-full flex-wrap justify-center sm:justify-start">
              {[
                "Organizing Chair",
                "Convener",
                "Co-Convener",
                "For Publication Related Query",
                "For Registration Related Query",
              ].map((tab) => {
                const isSmall = tab === "Convener" || tab === "Co-Convener";
                const isActive = currentTab === tab;
                const baseClass = `cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 select-none text-xs sm:text-sm flex items-center justify-center text-center border min-h-[3rem] sm:min-h-[3rem]`;
                const sizeClass = isSmall ? 'w-[48%] sm:w-auto sm:flex-none' : 'w-full sm:flex-1';
                const activeClass = "bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-400 text-sky-900 font-bold shadow-lg";

                return (
                  <li
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`${baseClass} ${sizeClass} ${isActive ? activeClass : 'bg-transparent text-white border-white/30 hover:bg-white/10'}`}>
                    <span className="text-center leading-tight px-1">{tab}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full mt-4 px-2 sm:px-4 mb-16 flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-4 bg-white text-sky-800 rounded-xl shadow-2xl shadow-gray-900 p-3 sm:p-6">
          {members.map((e, index) => (
            <ContactCard
              key={index}
              name={e.name}
              email={e.email}
              Phone={e.phone || e.Phone}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUsLayout;
