import { FaBars } from "react-icons/fa";
import React, { useState } from 'react';
import Log from "./Log";
import Signup from "./Signup";

export default function Navbar({ fixed }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className=" ">
      <nav className=" w-full fixed h-16 flex flex-wrap items-center justify-between px-2  bg-blue-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
             <img src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png" alt="" className="h-[32px] w-28"/>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border-2 border-solid rounded block lg:hidden "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
               <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                 <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="" className=" h-8 w-8 rounded-full"onClick={toggleMenu}/>
                </a>
                <div className="relative">
     
      {isOpen && (
        <div className="absolute top-full left-0 w-40 p-2 bg-white border border-gray-300 rounded-md shadow">
          <a
            href="Profile"
            className="block py-1 px-4 text-gray-800 hover:bg-gray-200"
          >
            Profile
          </a>
          <a
            href="Setting"
            className="block py-1 px-4 text-gray-800 hover:bg-gray-200"
          >
            Setting
          </a>
          <a
            href="/signout"
            className="block py-1 px-4 text-gray-800 hover:bg-gray-200"
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
              </li>
              <li>
                <a href="#"><h1 className="mt-2 text-white">Sourabh Singh</h1></a>
              </li>
              <li>
              <a href="/Log">
                Log in
              </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}