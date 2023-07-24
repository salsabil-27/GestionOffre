import React, { useState } from "react";
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FaTachometerAlt, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"
import { FiLogOut } from 'react-icons/fi';
import refresh from "../assets/refresh.png";
import logo from "../assets/logo.png";
import login from "./login.tsx" ;

import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(true);

  const handleLogout = () => {
   
    window.location.href = "/login"; 
  };
 
  return (
    <div className="flex  md:p-2 min-[320px]:text-center max-[600px] bg-gray-250">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-blue-900  h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={refresh}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open ? "rotate-[360deg] h-15 w-12" : ""
            }`}
          />
          <h1
            className={`text-gray-300  origin-left font-medium text-60px duration-200 ${
              !open ? "scale-0" : ""
            }`}
          >
            SEA ERP
          </h1>
          <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
       </div>
          </div>
          <div className='flex items-center gap-[15px] pt-[50px] pb-5 border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
                </span>
            </div>
               
                
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
             
        <ul className="pt-6">
        <li
      className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-1  ${
        open ? "" : "bg-light-white"
      }`}
     
    >
       <AiOutlineUsergroupAdd />
      <span className={`${!open && "hidden"} origin-left duration-200`}>
    
       liste des employées
      </span>
    </li>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9 mt-2 ${
              open ? "bg-light-white" : ""
            }`}
            onClick={handleLogout}
          >
             
           <FiLogOut />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
             
          déconnection
            </span>
          </li>
         
        </ul>
      </div>
    
      </div>
               </div>
               </div>
    
  );
};

export default SideBar;