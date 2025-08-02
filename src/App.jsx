import { useState } from 'react'
import './App.css'
import Header from './Layouts/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
