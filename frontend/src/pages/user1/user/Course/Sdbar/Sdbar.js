import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaBeer } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";
import { UilUser } from '@iconscout/react-unicons'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilEnvelopeExclamation,UilFolderQuestion } from '@iconscout/react-unicons'
import { UilDashboard } from '@iconscout/react-unicons'
import FrontendCourse from "../FrontendCourse/FrontendCourse";
import Dashboard from "../Dashboard/Dashboard";
import { NavLink,Link } from "react-router-dom";
import Profile from "../Profile/Profile";


const showAvailableCourse = () => {
  let available_course = document.getElementById("available_course");
  if (available_course.style.height == "0px") {
    available_course.style.height = "100%";
  } else {
    available_course.style.height = "0px";
  }
};


const AllAvailableCourse = () => {
  let all_course = document.getElementById("all_course");
  if (all_course.style.height == "0px") {
    all_course.style.height = "100%";
  } else {
    all_course.style.height = "0px";
  }
};

const SettingCourse = () => {
  let Setting = document.getElementById("SettingCourse");
  if (Setting.style.height == "0px") {
    Setting.style.height = "100%";
  } else {
    Setting.style.height = "0px";
  }
};

const Sdbar = () => {


  const [close, Setopen] = useState(false)
  const [opens, Setclose] = useState(false)
  const [Opens, Sclose] = useState(false)


  const [open, setOpen] = useState(true);

  return (
    <>
    
    <section className=" hidden sm:block  h-screen">
      <div
        className={` bg-[#0f0333] min-h-screen ${
          open ? "w-52" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
       <div>
       <ul>
            {/* <li>
            <a className="flex gap-x-4 items-center">
          <img
            src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
            className={`cursor-pointer h-10  sm:hiddan  duration-500 ${
              open && ""
            }`}
          />
          
        </a>
           
            </li> */}
            <li className="flex gap-2 mt-4">
              <i className={`cursor-pointer h-10 duration-500 ${
              open && ""
            }`}><AiFillHome className="h-4 w-8"/></i>
              <a href="#">
                <h1  className={`text-white origin-left font-medium text-[13px] duration-200 ${
              !open && "scale-0"
            }`}>Home</h1>
              </a>
            </li>
            <li className="flex gap-2">
              <i className={`cursor-pointer h-10 duration-500 ${
              open && ""
            }`}><UilDashboard className="h-4 w-8"/></i>
              <Link to='Dashboard'>
                <h1  className={`text-white origin-left font-medium text-[13px] duration-200 ${
              !open && "scale-0"
            }`}>Deshboard</h1>
              </Link>
            </li>
             {/* <!-------HTML------> */}
             <li className="flex">
              <li><AiOutlineRead className=" h-4 w-8"/> </li>
              <span className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}>
                <a
                  href="#"  
                  className=" items-center p-2  rounded-lg dark:text-white"
                >
                  <span
                    className="flex -mt-8 text-left text-[12px]"
                    onClick={showAvailableCourse}
                  >
                    My&nbsp;Courses<AiFillCaretUp className={` cursor-pointer ml-4 mt-2 w-7 text-white  ${!close && "rotate-180"}`}
          onClick={() => Setopen(!close)}/>
                  
                  </span>
                  
                </a>
                <ul
                  id="available_course"
                  className=" text-[12px] overflow-hidden duration-500 -mt-8">
                  <Link to='FrontendCourse'>
                  <li>Frontend&nbsp;Course</li></Link>
                  <Link to='BackendCourse'>
                  <li>Backend&nbsp;Course</li></Link>

                  <li></li>

                  
                </ul>
                </span>
              </li>
           
    {/* <!-------END HTML---------> */}

    {/* <!------CSS course----> */}

    <li className="flex gap-2 mt-4">
              <i className={`cursor-pointer h-10 duration-500 ${
              open && ""
            }`}><UilFolderQuestion className="h-4 w-8"/></i>
              <Link to="CourseCategory">
                <h1  className={`text-white origin-left font-medium text-[13px] duration-200 ${
              !open && "scale-0"
            }`}>Course Category</h1>
              </Link>
            </li>
           

    {/* <!-----End CSS------> */}
            
        {/* <!-----setting----->     */}

        {/* <li className="flex mt-4 ">
              <li><AiOutlineSetting className=" h-4 w-8"/> </li>
              <span className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}>
                <a
                  href="#"  
                  className=" items-center p-2  rounded-lg dark:text-white"
                >
                  <span
                    className="flex -mt-8 text-[12px]"
                    onClick={SettingCourse}
                  >
                    &nbsp;Setting<AiFillCaretUp className={` cursor-pointer ml-2 m-8 mt-2 w-7 text-white  ${!Opens && "rotate-180"}`}
          onClick={() => Sclose(!opens)}/>
                  
                  </span>
                  
                </a>
                <ul
                  id="SettingCourse"
                  className=" text-[12px] duration-500  overflow-hidden -mt-12">
                  <li className="hover:bg-slate-300 mt-2 h-8">setting-1</li>
                  <li className="hover:bg-slate-300 mt-2 h-8">setting-1</li>
                  <li className="hover:bg-slate-300 mt-2 h-8">setting-1</li>
                  


                  



                 
                  <li></li>
                  
                </ul>
                </span>
              </li> */}
           



        {/* <!------------ end setting---------> */}
            <li className="flex gap-2 ">
              <i className={`cursor-pointer h-10 duration-500 ${
              open && ""
            }`}><UilSignOutAlt className="h-4 w-8"/></i>
              <a href="#">
                <h1  className={`text-white origin-left font-medium text-[12px] duration-200 ${
              !open && "scale-0"
            }`}>Sign Out</h1>
              </a>
            </li>
            <li className="flex gap-2 ">
              <i className={`cursor-pointer h-10 duration-500 ${
              open && ""
            }`}><UilUser className="h-4 w-8"/></i>
              <Link to='Profile'>
                <h1  className={`text-white origin-left font-medium text-[12px] duration-200 ${
              !open && "scale-0"
            }`}>Profile</h1>
              </Link>
            </li>
            <li className="flex gap-2 ">
              <i className={`cursor-pointer h-10 duration-500 ${
              open && ""
            }`}><UilFolderQuestion className="h-4 w-8"/></i>
              <a href="#">
                <h1  className={`text-white origin-left font-medium text-[12px] duration-200 ${
              !open && "scale-0"
            }`}>Help</h1>
              </a>
            </li>
        </ul>
       </div>
      </div>
      
    </section>
    </>
  );
};

export default Sdbar;