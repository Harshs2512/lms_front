import React, { useState } from "react";
// import Login from "./Login";
// import Signup from "../Signup";
// import Reg from "../Reg";
import Search from "../../pages/home/Search";
// import Log from "../Log";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { IconButton } from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

import {
  UilUserCircle,
  UilCreateDashboard,
  UilUsersAlt,
  UilSignOutAlt,
  UilSetting,
  UilFolderQuestion,
} from "@iconscout/react-unicons";


// const user1 = admin;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  var mobileNav = document.getElementById("mobileNav");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const openmobile = () => {
    let icon = document.getElementById("mobile_menu");
    if (icon.style.marginTop === "-100%") {
      icon.style.marginTop = "0%";
    } else {
      icon.style.marginTop = "-100%";
    }
  };

  const history = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:8000/api/v1/logout");
      setAuth({
        ...auth,
        user: null,
        token: null,
      });
      localStorage.clear("token");
      navigate(location.state || "/");
    }

    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const notify = () => toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;

  const toggleClose = () => {
    setToggle(false)

  }
  return (
    <>
      <nav className="fixed z-50     w-full">
        <div className=" w-full bg-[#040239]    px-2 sm:px-6 lg:px-8  ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                id="openmenue"
                onClick={openmobile}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <MenuSharpIcon className="" />
              </button>
            </div>
            <div className="flex sm:items-stretch">
              <div className="flexflex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="block h-10 md:w-auto w-24  lg:hidden md:mt-6  sm:mt-4"
                    src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                    alt="Cybrom"
                  />
                  <img
                    className="hidden h-10 my-5  w-auto lg:block mt-0 lg:mt-6 "
                    src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                    alt="Cybrom"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6 sm:mt-6 lg:mt-6 md:mt-6">
                {!auth?.user ? (
                  <ul className="flex space-x-4">
                    <>
                      <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <Link onClick={toggleClose} to="/profile">All Course</Link>
                      </li>
                      <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <NavLink onClick={toggleClose} to="/all-courses">About Us</NavLink>
                      </li>
                      <li className="">
                        <button
                          className="bg-blue-500 ml-[45rem] px-8 tracking-widest py-1 md:py-2 text-sm font-medium rounded-md text-white"
                        ><Link to="/Login">Login</Link></button>
                      </li>
                    </>
                  </ul>

                ) : (
                  <ul className="flex space-x-6">
                    {
                      auth.user.role === "admin" && <>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <Link onClick={toggleClose} to="/admin/teacher-info">Dashboard</Link>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/course-info">Course-Info</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/student-info">Student-Info</NavLink>
                        </li>
                        <li className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                          <NavLink onClick={toggleClose} to="/admin/teacher-info">Teacher-Info</NavLink>
                        </li>
                        <li className="">
                          <button
                            className="bg-blue-500 px-8 tracking-widest py-1 md:py-2 text-sm font-medium rounded-md text-white" onClick={handleLogout
                            }
                          ><Link to="/Login">Logout</Link></button>
                        </li>
                        <Search />
                      </>
                    }
                    {
                      auth.user.role === "user" && <>
                        <li className="text-base text-white mt-2"><Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="text-base text-white mt-2 sm:ml-20"><Link to="/all_course">All Courses</Link>
                        </li>
                        <li className=" sm:ml-80">
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
                        {/* <li className="">
                          <button
                            className="bg-blue-500 px-8 tracking-widest py-1 md:py-2 text-sm font-medium rounded-md text-white" onClick={handleLogout
                            }
                          ><Link to="/Login">Logout</Link></button>
                        </li> */}
                        <li className="sm:ml-10">
                          <UilUserCircle
                            onClick={toggleMenu}
                            className="cursor-pointer text-white w-10 h-10"
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
                                        <p className="text-white">Web Developer</p>
                                      </div>
                                      <h3 class="text-center text-sm text-white font-medium leading-8">
                                        Suresh Kumar Ji
                                      </h3>
                                      <h2 class="text-center text-sm text-white font-medium leading-8">
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
                                  <Link to="/Login" className="gap-2 py-1 flex hover:bg-gray-200" onClick={handleLogout
                                  }>
                                    <UilSignOutAlt /> Sign Out
                                  </Link>
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

                      </>
                    }
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className="z-10 relative  transition duration-700 ease-in-out  md:hidden bg-gray-800 border text-center"
          id="mobile_menu"
          style={{ marginTop: "-100%" }}
        >
          <a
            href="#"
            className="text-gray-300  block rounded-md px-3 py-2 text-base font-medium"
            aria="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <IconButton>
              <VisibilityOffIcon />
            </IconButton>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Destination
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Teachers
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Beneifits
          </a>

        </div>
        {/* <Search /> */}
      </nav>
    </>
  );
}
export default Header;

