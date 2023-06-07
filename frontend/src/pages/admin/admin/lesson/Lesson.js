import React from 'react'
import { Routes,Route, Outlet } from 'react-router-dom'
import AddLessons from './AddLesson'
import Navbar from '../navbar/Navbar'
import { UilPlusCircle,UilCreateDashboard,UilBookReader,UilNotes,UilBookMedical,UilBookOpen,UilEye,UilBooks,UilPresentationPlay } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'

export default function Lesson() {
  return (
    <>
      <div className=' w-[100%] h-[100vh]  overflow-auto scrollbar-hide  '>
        {/* <Navbar/> */}
        <div className='grid grid-cols-4 justify-items-center gap-20 p-5'>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                    <UilBooks size='100' />
                </div><br/>
                <button className='bg-darkblue text-heading  w-28 rounded-xl mb-5' >
                    <NavLink to='/lesson/AddLesson'>Add Lessons</NavLink>
                 </button>
            </div>
            
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                    <UilBookOpen size='100' />
                </div><br/>
                <button className='bg-darkblue text-heading  w-32 rounded-xl mb-5' >
                    <NavLink to='/lesson/Viewlesson'>View Lessons</NavLink>
                 </button>
            </div>
            
        </div> 
        <hr className='text-heading'/>
        <Outlet/>
    </div>  
    </>
  )
}
