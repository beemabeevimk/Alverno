import React,{ useState } from 'react'
import './AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import email_icon from '../Assets/email2.png'
import password_icon from '../Assets/pass4.png'
import Navbar from '../Navbar/Navbar';


const AdminLogin = () => {

  const navigate = useNavigate();

  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  console.log(loginForm)
  // console.log(password)

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to your login API endpoint
      const response = await axios.post("http://127.0.0.1:8000/login/", loginForm,{
        email: loginForm.email,
        password: loginForm.password,
      });

      // Check if the login was successful
      if (response.status === 200) {
        // You can optionally set user authentication state here
        // For example, store a token in local storage or context
        // Then redirect to a protected page, like a dashboard
        navigate('/');
      } else {
        // Handle login failure, show an error message, etc.
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred while trying to login', error);
    }
  };
  

  return (
    <>
    <Navbar/>
    <form className='container'>
      <div className='header'>
         <div className="text"> Admin Login</div>
         <div className="underline"></div>
      </div>
      <div className="inputs">

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' name='email' onChange={(e) => {setloginForm({...loginForm, email:e.target.value})}} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' name='password' autoComplete="on" onChange={(e) => {setloginForm({...loginForm, password:e.target.value})}} />
        </div>
    
      </div>
      <div className="login-with-otp">Or Login with OTP <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit gray"><Link to="/signup">Sign Up</Link></div>
        <div className="submit" onClick={loginSubmit}>Login</div>
      </div>
      </form>
      </>
  )
}

export default AdminLogin
