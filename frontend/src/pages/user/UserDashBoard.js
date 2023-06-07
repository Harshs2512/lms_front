import React from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Sdnav from './Sdnav'
import Dashboard from './Course/Dashboard/Dashboard'
import Frontend_Course from './Course/Frontend_Course'
import Backend_Course from './Course/Backend_Course'
import Massages from './Course/Massages/Massages'
import Profile from './Course/Profile/Profile'
import Sdbar from './Course/Sdbar/Sdbar'
import Mycourse from './Course/Mycourse/Mycourse'
import Recentlyaccessedcourses from './Course/Recentlyaccessedcourses/Recentlyaccessedcourses';
import Purchase from './Course/Purchase/Purchase';
import PurchaseByCategory from './Course/Purchase/PurchaseByCategory'
import Curriculum from './Course/Curriculum/Curriculum'
import TestPage from '../test/test';
const UserDashBoard = () => {
  return (
    <>
      <div className='flex'>
        <div>
          <Sdbar />
        </div>
        <div className=''>
          <Routes>
            <Route path='' element={<Dashboard />} />
            <Route path='Mycourse' element={<Mycourse />} />
            <Route path="Massages" element={<Massages />} />
            <Route path="cRecentlyaccessedcourses" element={<Recentlyaccessedcourses />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Purchase" element={<Purchase />} />
            <Route path="category/:id" element={<PurchaseByCategory />} />
            {/* <Route path="/Purchase/:id" element={<Curriculum />} /> */}
          </Routes>
        </div>
      </div>
    </>
  )
}
export default UserDashBoard;
