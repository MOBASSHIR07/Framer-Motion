import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './Button.jsx'
import CountUp from 'react-countup'
import Count from './Count.jsx'
import SignIn from './SignIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* <Count start={0} end={100} duration={3} /> */}
      <SignIn></SignIn>
    </div>
  </StrictMode>,
)
