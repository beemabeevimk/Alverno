import React, { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css'
import axios from 'axios';


import user_icon from '../Assets/user3.png'
import email_icon from '../Assets/email2.png'
import password_icon from '../Assets/pass4.png'
import phone_icon from '../Assets/phone.png'
import Navbar from '../Navbar/Navbar';
// const name = "beema";
// const data = { name: name };


// const initialRegisterState = {
//   name: '',
//   email: '',
//   password: '',
//   role: 'student', 
//   phone_number: '', 
// };


const SignupPage = () => {

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name:'',
    email: '',
    password: '',
    role: 'student', 
    phone_number: '', 
  });
  console.log(register)



  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/register/student/", register, {
    headers: {
      'Content-Type': 'application/json',
    },
      })
      .then((response) => {
        if (response.status === 201 && response.data.message === 'Student registered successfully') {
          console.log('Registration successful', response.data);
          navigate('/login');
        } else {
          // Registration was not successful
          console.log('Registration failed', response.data);
          setErrorMessage('Registration failed. Please check your data and try again.');
        }
      })
      .catch((error) => {
      console.log('Registration failed',error);
      });
  };




  return (
    <>
   <Navbar/>
    <div className='container'>
      <div className='header'>
         <div className="text">Student SignUp</div>
         <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input" >
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' name='name' onChange={(e) => {setRegister({...register, name:e.target.value})}} />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' name='email' onChange={(e) => {setRegister({...register, email:e.target.value})}}/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' name='password' onChange={(e) => {setRegister({...register, password:e.target.value})}}/>
        </div>
        <div className="input">
          <img src={phone_icon} alt="" />
          <input type="phone number" placeholder='phone number' name='phone_number' onChange={(e) => {setRegister({...register, phone_number:e.target.value })}}/>
        </div>
      </div>
      <div className="login-with-otp">Or Login with OTP <span>Click Here!</span></div>
      <div className="submit-container">
        
        <div onClick={onSubmit} className="submit">Sign Up</div>
        
        <div className="submit gray"><Link to={"/login"}>Login</Link></div>
      </div>
      </div>
      </>
  )
}

export default SignupPage
