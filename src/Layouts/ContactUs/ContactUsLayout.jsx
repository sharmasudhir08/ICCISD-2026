import { contactDetails } from "../../utils/contactDetails";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";

const ContactUsLayout = () => {

    const [allMembers,setAllMembers] = useState(contactDetails)
    const [currentTab, setCurrentTab] = useState('Organizing Chair');
    const [members, setMembers]=useState([
        {
            name: "Dr. John Doe",
            designation: "Conference Chair",
            email: "john@gmail.com",
            phone: "+1-234-567-8901"
        },
        {
            name: "Dr. Jane Smith",
            designation: "Co-Chair",
            email: "jane@gmail.com"
        }
    ])


    useEffect(()=>{
        const membersConcerned=allMembers.filter((e)=>{
            return e.designation==currentTab
        })
        setMembers(membersConcerned)
    },[currentTab])

    console.log(currentTab)


  return (
    <div className="mt-20">

        <section className="w-[80%] mx-auto bg-sky-800 text-white rounded-3xl border">

            <h1 className="mt-10 text-4xl text-center font-bold">CONTACT US</h1>   

            <div className="w-[90%] mx-auto mt-10 h-20 p-8 rounded-lg shadow-lg">
            
                <div className="text-lg font-semibold mb-4">
                    <ul className="flex flex-wrap justify-between items-center gap-4">
                        {[
                            "Organizing Chair",
                            "Convener",
                            "For Publication Related Query",
                            "For Registration Related Query"
                        ].map((tab) => (
                        <li
                            key={tab}
                            onClick={() => setCurrentTab(tab)}
                            className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-200 
                            ${
                                currentTab === tab
                                ? "bg-white text-sky-800 font-bold shadow"
                                : "hover:bg-sky-700"
                            }
                        `}
                        >
                            {tab}
                        </li>
                        ))}
                    </ul>

                </div>

            
            </div>

            <div className="w-[90%] mx-auto  h-40 mb-20 flex justify-between items-center bg-white text-sky-800 rounded-xl shadow-lg shadow-gray-800 p-8 hover:shadow-gray-900 hover:shadow-xl  transition-shadow duration-300 ease-in-out">
                {
                    members.map((e)=>{
                        return (
                            <ContactCard name={e.name} email={e.email} Phone={e.Phone}/>
                        )
                    })
                }
            </div>
        
        </section>
        
    </div>
  )

}


export default ContactUsLayout;