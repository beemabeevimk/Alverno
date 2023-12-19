import React from 'react'
import { useState } from 'react';
import { FaTh, FaUserAlt, FaCommentAlt, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Sidebar({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path:"/",
      name:"Profile",
      icon:<FaUserAlt/>
    },
    {
      path:"/profile",
      name:"Profile",
      icon:<FaUserAlt/>
    },
    {
      path:"/course",
      name:"Course",
      icon:<FaUserAlt/>
    },
    {
      path:"/timetable",
      name:"Timetable",
      icon:<FaCommentAlt/>
    },
  ]
  return (
    <div className='container2'>
       <div style={{width: isOpen ?  "250px" : "50px"}} className="sidebar">
          <div className="top_section">
          <h1 style={{display: isOpen ?  "block" : "none"}} className="logo">Logo</h1>
          <div style={{marginLeft: isOpen ?  "50px" : "0px"}} className="bars">
             <FaBars onClick={toggle} />
          </div>
          </div> 
          {
            menuItem.map((item, index)=>(
              <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ?  "block" : "none"}} className="link_text">{item.name}</div>
              </NavLink>
            ))
          }     
      </div>
        <main>{children}</main>
    </div>
  );
}


