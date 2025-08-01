import React from 'react'
import Navbar from '../../Components/Navbar'
import TopBar from '../../Components/TopBar'
import HeroSection from '../../Components/HeroSection'

const Header = () => {
  return (
    <div className='sticky top-0 left-0 w-full z-50 bg-white shadow-md'>
        <TopBar />
        <Navbar />
    </div>
  )
}

export default Header