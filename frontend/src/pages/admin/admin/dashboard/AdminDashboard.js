import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import RecentAccessed from '../recent/RecentAccessed'
import { UilUserCircle,UilUserCheck,UilBook } from '@iconscout/react-unicons'
export default function Dashboard() {
  return (
    <>
    <div className=' h-screen overflow-auto scrollbar-hide'>
        <Navbar/>
        <div className='dark:bg-black dark:text-white transition ease-in-out duration-700'>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  p-5 gap-10 px-10'>
            <div className=' text-white bg-lightblue rounded-xl  p-2 h-28 flex justify-between'>
            <div><UilUserCircle size='80'/></div>
              <div>
                <h1 className='text-2xl font-medium'>100</h1>
                <h1 className='text-2xl'>Users</h1>
              </div>
            </div>
            <div className=' text-white bg-orange rounded-xl  p-2 h-28 flex justify-between'>
              <div><UilUserCheck size='80'/></div>
              <div>
                <h1 className='text-2xl font-medium'>100</h1>
                <h1 className='text-2xl '>Subscribers</h1>
              </div> 
            </div>
            <div className=' text-white bg-darkblue/90 dark:bg-gray rounded-xl  p-2 h-28 flex justify-between'>
              <div><UilBook size='80'/></div>
              <div>
                <h1 className='text-2xl font-medium'>100</h1>
                <h1 className='text-2xl '>Courses</h1>
              </div>
            </div>
          </div>
          <hr className='w-[95%] mx-auto'/>
          <Outlet/>
        </div>
       
      </div>
    </>
  )
}
