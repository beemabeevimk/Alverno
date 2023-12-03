import React from 'react'
import { FaTh, FaUserAlt, FaCommentAlt, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menuItem = [
    {
      path:"/",
      name:"Profile",
      icon:<FaTh/>
    },
    {
      path:"/profile",
      name:"Profile",
      icon:<FaTh/>
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
                
              </NavLink>
            ))
          }     
       </div>
    </div>
  );
}


