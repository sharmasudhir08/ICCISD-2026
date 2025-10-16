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
    <div className="mt-20 px-4">
      <section className="w-full max-w-6xl mx-auto bg-sky-900 text-white rounded-3xl border p-4">
        <h1 className="mt-10 text-3xl sm:text-4xl text-center font-bold">CONTACT US</h1>

        <div className="w-full mt-10 px-2 py-6 rounded-lg shadow-lg">
          <div className="text-base sm:text-lg font-semibold mb-4">
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-center">
              {[
                "Organizing Chair",
                "Convener",
                "Co-Convener",
                "For Publication Related Query",
                "For Registration Related Query",
              ].map((tab) => (
                <li
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-200 
                  ${
                    currentTab === tab
                      ? "bg-white text-sky-800 font-bold shadow"
                      : "hover:bg-sky-700"
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full mt-6 px-4 mb-20 grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-between gap-6 bg-white text-sky-800 sm:rounded-xl sm:shadow-2xl sm:shadow-gray-900 sm:p-6">
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
