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
            <ul className="flex gap-1 sm:gap-2 items-stretch w-full flex-nowrap">
              {[
                "Organizing Chair",
                "Convener",
                "Co-Convener",
                "For Publication Related Query",
                "For Registration Related Query",
              ].map((tab) => {
                const isSmall = tab === "Convener" || tab === "Co-Convener";
                const isOrganizing = tab === "Organizing Chair";
                const isActive = currentTab === tab;
                const smallClass = `cursor-pointer px-3 rounded-md transition-all duration-200 select-none text-sm sm:text-base flex items-center justify-center border h-10 sm:h-12 flex-none`; 
                // large tabs: flex-1 normally; make Organizing Chair slightly smaller using an explicit flex factor
                const flexClass = isOrganizing
                  ? `cursor-pointer px-4 rounded-lg transition-all duration-200 select-none text-sm sm:text-base flex items-center justify-center border flex-[0.85] min-w-0 whitespace-nowrap h-10 sm:h-12`
                  : `cursor-pointer px-4 rounded-lg transition-all duration-200 select-none text-sm sm:text-base flex items-center justify-center border flex-1 min-w-0 whitespace-nowrap h-10 sm:h-12`;
                const activeClass = "bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-400 text-sky-900 font-bold shadow-lg";

                return (
                  <li
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`${isSmall ? smallClass : flexClass} ${isActive ? activeClass : 'bg-transparent text-white border-white/30 hover:bg-white/10'}`}>
                    {tab}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full mt-4 px-3 mb-16 grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-between gap-4 bg-white text-sky-800 sm:rounded-xl sm:shadow-2xl sm:shadow-gray-900 sm:p-4">
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
