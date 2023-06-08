import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Course/Dashboard/Dashboard'
import Massages from './Course/Massages/Massages'
import Profile from './Course/Profile/Profile'
import Sdbar from './Course/Sdbar/Sdbar'
import Mycourse from './Course/Mycourse/Mycourse'
import Recentlyaccessedcourses from './Course/Recentlyaccessedcourses/Recentlyaccessedcourses';
import Purchase from './Course/Purchase/Purchase';
import PurchaseByCategory from './Course/Purchase/PurchaseByCategory'
import TestPage from '../test/test';
import MyviewCourse from './Course/Mycourse/MyviewCourse';
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
            <Route path="slug/Mycourse" element={<MyviewCourse />} />
            {/* <Route path="/Purchase/:id" element={<Curriculum />} /> */}
          </Routes>
        </div>
      </div>
    </>
  )
}
export default UserDashBoard;
