import React, { useState } from "react";
import {
  UilSearch,
  UilUserCircle,
  UilListUl,
  UilListUiAlt,
  UilChart,
  UilCreateDashboard,
  UilBook,
  UilBookOpen,
  UilPresentationCheck,
  UilUsersAlt,
  UilSignOutAlt,
  UilTimesCircle,
  UilSetting,
  UilFolderQuestion,
} from "@iconscout/react-unicons";

import { NavLink } from "react-router-dom";
export default function Navbar() {
  var mobileNav = document.getElementById("mobileNav");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function openSideNav() {
    if (mobileNav.style.left === "-100%") {
      console.log("eklfnqe");
      mobileNav.style.left = "0";
    } else {
      mobileNav.style.left = "-100%";
    }
  }
  return (
    <>
      <div
        id="mobileNav"
        className="sm:hidden ease-linear bg-[#0f0333]/90  duration-300 absolute h-screen w-full mt-12  "
        style={{
          left: "-100%",
        }}
      >
        <ul className="mt-20 leading-[50px] text-heading grid place-content-center  ">
          <li>
            <img
              src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
              className="w-30 h-14"
            />
          </li>
          <li className=" text-center text-gray-400 hover:text-white hover:font-bold border-b-2">
            {/* <li><UilChart/></li> */}
            <NavLink to="/" className="-mt-2  ">
              Home
            </NavLink>
          </li>
          <li className="text-center  text-gray-400 hover:text-white hover:font-bold border-b-2">
            {/* <li><UilCreateDashboard/></li> */}
            <NavLink to="/Dashboard" className="-mt-2">
              Dashboard
            </NavLink>
          </li>
          <li className="text-center  text-gray-400 hover:text-white hover:font-bold border-b-2">
            {/* <li><UilBook/></li> */}
            <NavLink to="Mycourse" className="-mt-2">
              My Course
            </NavLink>
          </li>
          <li className="text-center  text-gray-400 hover:text-white hover:font-bold border-b-2">
            {/* <li><UilBookOpen/></li> */}
            <NavLink to="lesson" className="-mt-2">
              All Course
            </NavLink>
          </li>
          <li className="text-center  text-gray-400 hover:text-white hover:font-bold border-b-2">
            {/* <li><UilPresentationCheck/></li> */}
            <NavLink to="lecture" className="-mt-2">
              Purchase Course
            </NavLink>
          </li>
          <li className="text-center  text-gray-400 hover:text-white hover:font-bold border-b-2">
            {/* <li><UilUsersAlt/></li> */}
            <NavLink to="student" className="-mt-2">
              Profile
            </NavLink>
          </li>
          <li className="text-center  text-gray-400 hover:text-white hover:font-bold border-b-2">
            {/* <li><UilSignOutAlt/></li> */}
            <NavLink to="logout" className="-mt-2">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="z-20 bg-[#0f0333]  h-14 grid grid-cols-1 sm:grid-cols-3 sticky top-0">
        <div className="p-2 hidden sm:flex">
          <img
            src={
              "https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
            }
            className="w-36"
          ></img>
        </div>
        <div className=" col-span-2 p-3">
          <ul className="text-heading flex justify-between  md:px-10">
            <li onClick={openSideNav}>
              <UilListUl className="block sm:hidden text-white" />
            </li>

            <li className=" sm:ml-0 ">
              <div class="max-w-md mx-auto">
                <div class="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-32"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                  />
                </div>
              </div>
            </li>

            <li>
              <UilUserCircle
                onClick={toggleMenu}
                className="cursor-pointer text-white "
              />
              <div className="relative" id="userPopup">
                {isOpen && (
                  <div className="absolute bg-gradient-to-tr from-blue-100 to-blue-900 p-2 w-64 text-[#0f0333]  top-full -left-52 py-6  mt-4 rounded-md shadow-xl">
                    <div class="max-w-xs">
                      <div class=" bg-transparent shadow-xl rounded-lg py-3">
                        <div class="photo-wrapper p-2">
                          <img
                            class="w-32 h-32 rounded-full mx-auto"
                            src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                            alt="John Doe"
                          />
                        </div>
                        <div class="p-2">
                          <div class="text-center text-gray-900 text-xs font-semibold">
                            <p>Web Developer</p>
                          </div>
                          <h3 class="text-center text-sm text-gray-900 font-medium leading-8">
                            Suresh Kumar Ji
                          </h3>
                          <h2 class="text-center text-sm text-gray-900 font-medium leading-8">
                            sureshkumar@gmail.com
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 border-b border-black">
                      <a
                        href="Profile"
                        className=" gap-2 py-1 flex  hover:bg-gray-200 "
                      >
                        <UilUserCircle /> Profile
                      </a>
                      <a
                        href="Setting"
                        className="gap-2 py-1 flex  hover:bg-gray-200 "
                      >
                        <UilCreateDashboard />
                        Go To Dashboard
                      </a>
                      <a
                        href="/signout"
                        className="gap-2 py-1 flex hover:bg-gray-200 "
                      >
                        <UilUsersAlt /> Switch Account
                      </a>
                      <a
                        href="/signout"
                        className="gap-2 py-1 flex hover:bg-gray-200 "
                      >
                        <UilSignOutAlt /> Sign Out
                      </a>
                    </div>
                    <div className="border-b border-black">
                      <a
                        href="/help"
                        className="gap-2 py-1 flex hover:bg-gray-200 "
                      >
                        <UilFolderQuestion /> Help
                      </a>
                      <a
                        href="/help"
                        className="gap-2 py-1 flex hover:bg-gray-200 "
                      >
                        <UilSetting /> Setting
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
