import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Authors from './pages/Authors.jsx'
import Commitee from './pages/Commitee.jsx'
import ContactUs from './pages/ContactUs.jsx'
import PaperSubmission from './pages/PaperSubmission.jsx'
import Venue from './pages/Venue.jsx'
import Registration from './pages/Registration.jsx'
import Schedule from './pages/Schedule.jsx'
import Speakers from './pages/Speakers.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path:'authors',
          element: <Authors />
        },
        {
          path:'speakers',
          element: <Speakers />,
          
        },
        {
          path:'commitee',
          element: <Commitee />
        },
        {
          path: 'contactUs',
          element: <ContactUs />
        },
        {
          path: 'paperSubmission',
          element: <PaperSubmission />
        },
        {
          path: 'venue',
          element: <Venue />
        },
        {
          path:'registration',
          element:<Registration/>
        },
        {
          path: 'schedule',
          element: <Schedule />
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
