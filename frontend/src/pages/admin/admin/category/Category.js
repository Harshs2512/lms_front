import React from 'react'
import { Routes,Route, Outlet } from 'react-router-dom'
import CreateCategory from './AddCategory'
import Navbar from '../navbar/Navbar'
import ViewCategory from './ViewCategory'
import { UilPlusCircle,UilCreateDashboard,UilBookReader,UilNotes,UilBookMedical,UilBookOpen,UilEye } from '@iconscout/react-unicons'

import { NavLink } from 'react-router-dom'

export default function Category() {
  return (
    <>
     <div className='mt-10 w-[100%] h-[100vh]  overflow-auto scrollbar-hide  '>
        {/* <Navbar/> */}
        <div className='grid grid-cols-4 justify-items-center gap-20 p-5'>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                    <UilCreateDashboard size='100' />
                </div><br/>
                <button className='bg-blue-900 text-heading text-white w-28 rounded-xl mb-5' >
                    <NavLink to='AddCategory'>Add Category</NavLink>
                 </button>
            </div>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                    <UilEye size='100' />
                </div><br/>
                <button className='bg-blue-900 text-heading text-white w-32 rounded-xl mb-5' >
                    <NavLink to='ViewCategory'>View Categories</NavLink>
                 </button>
            </div>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <h1 className=' font-medium text-black'>No Of Categories:</h1>  
            </div>
        </div> 
        <hr className='text-heading'/>
        <Outlet/>
    </div>  
    </>
  )
}
