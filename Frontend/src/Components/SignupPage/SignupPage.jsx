import React from 'react'
import './SignupPage.css'

import user_icon from '../Assets/user3.png'
import email_icon from '../Assets/email2.png'
import password_icon from '../Assets/pass4.png'
import phone_icon from '../Assets/phone.png'
import { useState } from 'react'

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container1'>
    <div className='container'>
      <div className='header'>
         <div className="text">{action}</div>
         <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
        {action==="Login"?<div></div>:<div className="input">
          <img src={phone_icon} alt="" />
          <input type="phonenumber" placeholder='Phone number'/>
        </div>}
         
      </div>
      <div className="login-with-otp">Or Login with OTP <span>Click Here!</span></div>
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      </div>
      </div>
  )
}

export default LoginSignup
