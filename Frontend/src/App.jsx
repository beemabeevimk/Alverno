import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Navbar from './Components/Navbar/Navbar'
import SignupPage from './Components/SignupPage/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SignupPage/>
      {/* <LoginSignup/> */}
    </>
  )
}

export default App
