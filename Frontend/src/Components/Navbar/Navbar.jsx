import React, { useState } from 'react';
import './Navbar.css';
import alv_logo from '../Assets/alverno-logo.png';

const Navbar = () => {
  // Define the navigation options as an array in the component's state
  const [navOptions, setNavOptions] = useState([
    'Home',
    'Academics',
    'Departments',
    'About',
    'Admissions',
    'Bullshit',
   
  ]);

  return (
    <div>
      <div className="nav-main">
        <div className="nav-1">
          <div className="logo">
            <img src={alv_logo} alt="" />
          </div>
        </div>
        <div className="nav-2">
          <ul className="nav-options">
            {navOptions.map((option, index) => (
              <li key={index}>
                <a href="#">{option}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
