import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layouts/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100%] text-6xl text-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
