import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

let available_course=document.getElementById('available_course')
const showAvailableCourse=()=>{
    if (available_course.style.height=='1px'){
        available_course.style.height='100%'
    }
    else{
        available_course.style.height='1px'
    } 
}

let all_course=document.getElementById('all_course')
const AllAvailableCourse=()=>{
    if (all_course.style.height=='1px'){
        all_course.style.height='100%'
    }
    else{
        all_course.style.height='1px'
    } 
}

function Sidenav() 
{

    return(
        <div>
<div >      
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
<span className="sr-only">Open sidebar</span>
<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
</svg>
</button>

<Link id="logo-sidebar" className=" fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
<div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
    <Link to="https://flowbite.com/" className="flex items-center  pl-2.5 mb-5">
        <img src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png" className="h-14  sm:h-10 mx-auto" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </Link>
    <ul className="space-y-2 font-medium">
        <li>
            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img  src="https://media.istockphoto.com/id/1171169099/photo/man-with-crossed-arms-isolated-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=W5AFEjtmFjyyIGF40oSTOm6E0rj7AjF_zIIF-0zdVxk=" className="w-14 h-12 rounded-full justify-center " alt="user photo"/>
            <span className="ml-3">Cybrom User</span>
            </Link>
        </li>
        <li>
            <Link to="#" className="border items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="flex-1  whitespace-nowrap" onClick={showAvailableCourse}>Available Course</span> 
            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-20 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">4</span>
  
            </Link>
            <ul id="available_course" className="ml-3 overflow-hidden" style={{'height':'1px','marginTop':'11px'}} >
                <li className="hover:bg-slate-300 h-8">html</li>
                <li className="hover:bg-[#a9c4f1] h-8">css</li>
                <li className="hover:bg-[rgb(114,152,215)] h-8">python</li>
                <li className="hover:bg-[#b3d0fe] h-8">django</li>
                <li></li>

            </ul>
        </li>
        <li>
            <Link to="#" className="border items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="flex-1  whitespace-nowrap" onClick={AllAvailableCourse}>All Course</span> 
            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-20 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">4</span>
  
            </Link>
            <ul id="all_course" className="ml-3 overflow-hidden" style={{'height':'1px','marginTop':'11px'}} >
                <li className="hover:bg-slate-300 h-8">html2</li>
                <li className="hover:bg-[#a9c4f1] h-8">css2</li>
                <li className="hover:bg-[rgb(114,152,215)] h-8">python</li>
                <li className="hover:bg-[#b3d0fe] h-8">django</li>
                <li></li>

            </ul>
        </li>
        <li>
            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
            </Link>
        </li>
        <li>
            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            
            <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </Link>
        </li>
        <li>
            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </Link>
        </li>
        <li>
            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </Link>
            




        </li>
    </ul>
</div>
</Link>
</div>

<div className="p-4 sm:ml-64">
<section className="bg-white dark:bg-gray-900">
<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#FF6A00]">CYBROM TEAM</h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Team pages highlight your strongest asset, your team. It is a great way to put faces to names and build a connection It's time to create an attention-grabbing page to establish company identity</p>
    </div> 
    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className="w-72 py-2 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://scontent.fbho4-2.fna.fbcdn.net/v/t39.30808-6/327219613_625146212954736_4294474522464922797_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JKl2Smq0_7oAX-ziPOQ&_nc_ht=scontent.fbho4-2.fna&oh=00_AfA9zJSX5opJHM4lMWP3RQ6k_B6cIunpovywfgCqNdv3aA&oe=645647C9" alt="Bonnie Avatar"/>
            </Link>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">Yousuf Ali</Link>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Soft-skill trainer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Yousuf Ali drives the technical strategy of the flowbite platform and brand.</p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                    
                    </li>
                </ul>
            </div>
        </div> 
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className="w-72 py-2 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://scontent.fbho4-2.fna.fbcdn.net/v/t39.30808-6/331503060_718771699957323_724921848303913976_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Di_nLB8fcbIAX87YOsu&_nc_ht=scontent.fbho4-2.fna&oh=00_AfCgbR7O2UB2k4c7TV3mVHRsTjP7_QX5gryKa4ZV1i1GDw&oe=645541FD" alt="Jese Avatar"/>
            </Link>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">Navaid Ansari</Link>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Hadoop Developer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Navaid Ansari drives the technical strategy of the flowbite platform and brand.</p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div> 
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className="w-72 py-2 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://scontent.fbho4-3.fna.fbcdn.net/v/t39.30808-6/340628017_9294619153911446_1189660547497088748_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WqjH9fSqoyUAX9NUNwz&_nc_ht=scontent.fbho4-3.fna&oh=00_AfA-po2CTvqD99yiKPNcqnvCwzSXLBkzAkVkzzrqsW-erg&oe=645635A8" alt="Michael Avatar"/>
            </Link>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">Suresh Kumar Singh</Link>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Founder of S.K Singh tech solution(CEO)</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">s.k singh drives the technical strategy of the flowbite platform and brand.</p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div> 
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"classNameName="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"/>
            </Link>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">Lana Byrd</Link>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>  
    </div>  
</div>
</section>

</div>
</div>

    )   
    
}
const Dropdown = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
    return (
    <>
        <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
            <div className="relative inline-flex align-middle w-full">
            <button
                className={
                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
                }
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
            >
                {color === "white" ? "White Dropdown" : color + " Dropdown"}
            </button>
            <div
                ref={popoverDropdownRef}
                className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "12rem" }}
            >
                <a
                href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
                >
                Action
                </a>
                <a
                href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
                >
                Another action
                </a>
                <a
                href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
                >
                Something else here
                </a>
                <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
                <a
                href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
                >
                Seprated link
                </a>
            </div>
            </div>
        </div>
        </div>
    </>
    );
};

export  function DropdownRender() {
    return (
    <>
        <Dropdown color="white" />
    </>
    );
}
    export default Sidenav;