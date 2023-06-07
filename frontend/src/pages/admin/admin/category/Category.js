import React from 'react'
import { Routes,Route, Outlet } from 'react-router-dom'
import AddCategory from './AddCategory'
import Navbar from '../navbar/Navbar'
import ViewCategory from './ViewCategory'
import { UilPlusCircle,UilCreateDashboard,UilBookReader,UilNotes,UilBookMedical,UilBookOpen,UilEye } from '@iconscout/react-unicons'

import { NavLink } from 'react-router-dom'

export default function Category() {
  return (
    <>
     <div className=' w-[100%] h-[100vh]  overflow-auto scrollbar-hide  '>
        {/* <Navbar/> */}
        <div className='grid grid-cols-4 justify-items-center gap-20 p-5'>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                    <UilCreateDashboard size='100' />
                </div><br/>
                <button className='bg-darkblue text-heading  w-28 rounded-xl mb-5' >
                    <NavLink to='/category/AddCategory'>Add Category</NavLink>
                 </button>
            </div>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <div className=' h-36 w-36 grid place-content-center text-darkblue '>
                    <UilEye size='100' />
                </div><br/>
                <button className='bg-darkblue text-heading  w-32 rounded-xl mb-5' >
                    <NavLink to='/category/ViewCategory'>View Categories</NavLink>
                 </button>
            </div>
            <div className='shadow-xl rounded-2xl w-52 h-52 grid place-content-center'>
                <h1 className='text-darkblue font-medium'>Total Categories:</h1>  
            </div>
        </div> 
        <hr className='text-heading'/>
        <Outlet/>
    </div>  
    </>
  )
}
