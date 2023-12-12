import React from 'react'
import { useState } from 'react';
import { FaTh, FaUserAlt, FaCommentAlt, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Sidebar({children}) {
  const [isOpen, setIsOpen] = useState()
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
       <div className="sidebar">
          <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
             <FaBars/>
          </div>
          </div> 
          {
            menuItem.map((item, index)=>(
              <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))
          }     
      </div>
        <main>{children}</main>
    </div>
  );
}


