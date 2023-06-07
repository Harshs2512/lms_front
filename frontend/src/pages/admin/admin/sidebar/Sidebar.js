import React from 'react'
import { UilListUiAlt,UilChart,UilCreateDashboard,UilBook,UilBookOpen,UilPresentationCheck,UilUsersAlt,UilSignOutAlt } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const sideNav=document.getElementById('sideNav')

  const openSideMenu=()=>{
    if(sideNav.style.width==='25px'){
  
      sideNav.style.width='150px'
    }else{
      sideNav.style.width='25px'
    }
  }
  return (
    <>
    <div  className='hidden sm:block h-screen  shadow-md overflow-hidden bg-darkblue transition delay-100 duartion-500 ease-in-out ' id='sideNav'
    style={{
      'width':'25',
      
    }}
    >
      <UilListUiAlt className='text-white cursor-pointer float-right ' onClick={openSideMenu} id='sideMenuIcon'/>
        {/* <img src={'https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png'}></img> */}
        <ul className='mt-20 leading-[50px] text-heading  '>
            <li className='  flex  gap-2'>
              <li><UilChart/></li>
             <NavLink to='/' className='-mt-2'>Dashboard</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilCreateDashboard/></li>
             <NavLink to='Category' className='-mt-2'>Category</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilBook/></li>
             <NavLink to='course' className='-mt-2'>Course</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilBookOpen/></li>
             <NavLink to='lesson' className='-mt-2'>Lesson</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilPresentationCheck/></li>
             <NavLink to='lecture' className='-mt-2'>Lecture</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilUsersAlt/></li>
             <NavLink to='student' className='-mt-2'>Student</NavLink>
            </li>
            <li className='  flex  gap-2'>
              <li><UilSignOutAlt/></li>
             <NavLink to='logout' className='-mt-2'>Logout</NavLink>
            </li>
        </ul>

    </div>

    
      
    </>
  )
}
