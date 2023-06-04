import React from 'react'
import Dashboard from './Course/Dashboard/Dashboard';

import { NavLink, Routes,Route } from 'react-router-dom';

//react icon ------------------->


export default function SideNav() {
    var myCourses=document.getElementById('myCourses')
    var allCourses=document.getElementById('allCourses')
    var sideNav=document.getElementById('sideNav')
  return (
   <>
   <div id='sideNav' className=' pl-2 pt-2 h-[100vh] border border-black bg-[#09244e] text-white  cursor-pointer leading-10 overflow-hidden delay-100 duration-700 ease-in-out scrollbar-hide' style={{
    'width':'120px'
   }} >
    <ul>
    <li className='overflow-hidden' onClick={()=>{
        var sideNav=document.getElementById('sideNav')
        if(sideNav.style.width=='60px'){
            sideNav.style.width='300px'
        }
        else{sideNav.style.width='60px'}
    }}></li>
        <li><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iplt20.com%2Fteams%2Froyal-challengers-bangalore%2Fsquad-details%2F164&psig=AOvVaw3zGgb9r2JKzzOtcq4UYNgQ&ust=1683923096496000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCn0sCM7v4CFQAAAAAdAAAAABAE' alt="" /></li>
        <li className='flex mt-6'></li>
        <li className='flex  ' onClick={()=>{
            var myCourses=document.getElementById('myCourses')
            var sideNav=document.getElementById('sideNav')
            if((myCourses.style.height=='0px') && (sideNav.style.width=='300px')){
                myCourses.style.height='100%'
            }
            else{myCourses.style.height='0px'
            
            }
            
        }}> &nbsp;&nbsp;MY_Courses</li>
            <ul id='myCourses' className=' grid grid-cols-1 overflow-hidden delay-100 duration-300 ease-in-out' style={{'height':"0px"}}>
                <li><NavLink to='/HTML'>HTML</NavLink></li>
                <li><NavLink to='/CSS'>CSS</NavLink></li>
                <li>MyCourse1</li>
                <li>MyCourse1</li>
            </ul>
        <li className='flex' onClick={()=>{
             var allCourses=document.getElementById('allCourses')
            if((allCourses.style.height=='0px') && (sideNav.style.width=='300px')){
                allCourses.style.height='100%'
            }
            else{allCourses.style.height='0px'
            }
        }} >&nbsp;&nbsp;All_Courses</li>
        <ul id='allCourses' className='overflow-hidden grid grid-cols-1 ' style={{'height':"0px"}}>
                <li>Course1</li>
                <li>Course1</li>
                <li>Course1</li>
                <li>Course1</li>
            </ul>
        
        <li  className='flex'>&nbsp;&nbsp;Setting</li>
        <li  className='flex'>&nbsp;&nbsp;SignOut</li>
        <li  className='flex'>&nbsp;&nbsp;Profile</li>
        <li  className='flex'>&nbsp;&nbsp;Help</li>
    </ul>

   </div>
   
   </>
  )
}
