import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[100%] h-12 flex text-lg text-bold font-semibold text-center bg-sky-800'>
        <ul className='w-[100%] mx-0 my-auto flex justify-around items-center text-white hover:cursor-pointer'>
            <li>
              <NavLink
                 to='/'
                 className={({ isActive }) =>
                    isActive ? "text-orange-400" : "inactive-class"
                 }
                 >
                 Home
              </NavLink>
            </li>

            <li>
              <NavLink to='authors'
                 className={({ isActive }) =>
                    isActive ? "text-orange-400" : "inactive-class"
                 }
                 >
                For Authors
              </NavLink>
            </li>

            <li>
                 <NavLink
                 to='speakers'
                  className={({isActive})=>{
                    return isActive ? "text-orange-400" : "inactive-class"
                  }}                  >
                  Speakers
                 </NavLink>
            </li>


            <li>
              <NavLink to='commitee'
                  className={({ isActive }) =>
                      isActive ? "text-orange-400" : "inactive-class"
                  }
              >
                Committee
              </NavLink>
            </li>


            <li>
              <NavLink 
                to='paperSubmission'
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "inactive-class"
                }
              >
              Paper Submission
              </NavLink>
            </li>

            <li>
              <NavLink 
                to='venue'
                className={({isActive})=>{
                  return isActive ? "text-orange-400" : "inactive-class"
                }}
              >Venue</NavLink>
            </li>

            <li>
              <NavLink 
                to='registration'
                className={({isActive})=>{
                  return isActive ? "text-orange-400" : "inactive-class"
                }}
              >
                Registration
              </NavLink>
            </li>

            <li>
              <NavLink
                to='schedule'
                className={({isActive})=>{
                  return isActive ? "text-orange-400" : "inactive-class"
                }}
              >
                Schedule
              </NavLink>
            </li>

            <li>
              <NavLink
                to='contactUs'
                className={({isActive})=>{
                  return isActive ? "text-orange-400" : "inactive-class"
                }}
              >
                Contact Us
              </NavLink>
            </li>
        
        </ul>
    </div>
  )
}

export default Navbar