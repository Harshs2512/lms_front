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
import Sidebar from '../admin/admin/sidebar/Sidebar';
import { useAuth } from "../../context/auth";
import AdminDashboard from "../admin/admin/dashboard/AdminDashboard"
import Course from "../admin/admin/courses/Course"
import AddCourse from "../admin/admin/courses/AddCourse"
import ViewCourse from "../admin/admin/courses/ViewCourse"
import UpdateCourse from "../admin/admin/courses/UpdateCourse"
import Category from "../admin/admin/category/Category"
import AddCategory from "../admin/admin/category/AddCategory"
import ViewCategory from "../admin/admin/category/ViewCategory"
import Lesson from "../admin/admin/lesson/Lesson"
import AddLesson from "../admin/admin/lesson/AddLesson"
import ShowLesson from "../admin/admin/lesson/ShowLesson"
import ViewLesson from "../admin/admin/lesson/ViewLesson"
import Lecture from "../admin/admin/lecture/Lecture"
import AddLecture from "../admin/admin/lecture/AddLecture"
import ViewLecture from "../admin/admin/lecture/ViewLecture"
import VideoModel from './Course/VideoModel/MycourseVideo';
import MycourseVideo from './Course/VideoModel/MycourseVideo';
const UserDashBoard = () => {


  const [auth, setAuth] = useAuth();

  return (
    <>
      <div className='flex'>
        <div>
          {auth.user.role === "user" && (
            <>
              <Sdbar />
            </>
          )};
          {auth.user.role === "admin" && (
            <>
              <div className='flex h-screen'>
                <Sidebar />
                <div className='w-[100%] h-screen overflow-auto scrollbar-hide '>
                  <Routes>
                    <Route path='' element={<AdminDashboard />}></Route>
                    <Route path='/course' element={<Course />}>
                      <Route path='AddCourse' element={<AddCourse />}></Route>
                      <Route path='ViewCourse' element={<ViewCourse />}></Route>
                      <Route path='ViewCourse/UpdateCourse/:id' element={<UpdateCourse />}></Route>
                    </Route>
                    <Route path='/Category' element={<Category />} >
                      <Route path='Addcategory' element={<AddCategory />}></Route>
                      <Route path='ViewCategory' element={<ViewCategory />}></Route>
                    </Route>
                    <Route path='/lesson' element={<Lesson />}>
                      <Route path='/lesson/AddLesson' element={<AddLesson />}></Route>
                      <Route path='/lesson/ViewLesson' element={<ViewLesson />}></Route>
                      <Route path='/lesson/ShowLesson' element={<ShowLesson />}></Route>
                    </Route>
                    <Route path='/lecture' element={<Lecture />}>
                      <Route path='/lecture/AddLecture' element={<AddLecture />}></Route>
                      <Route path='/lecture/ViewLecture' element={<ViewLecture />}></Route>
                    </Route>
                  </Routes>
                </div>
              </div>
            </>
          )}
        </div>
        <div className=''>
          {auth.user.role === "user" && (
            <>
              <Routes>
                <Route path='' element={<Dashboard />} />
                <Route path='Mycourse' element={<Mycourse />} />
                <Route path="Massages" element={<Massages />} />
                <Route path="cRecentlyaccessedcourses" element={<Recentlyaccessedcourses />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Purchase" element={<Purchase />} />
                <Route path="category/:id" element={<PurchaseByCategory />} />
                <Route path="Mycourse/:id" element={<MyviewCourse />} />
                <Route path="Mycourse/:id/MycourseVideo" element={<MycourseVideo />} />
                {/* <Route path='Mycourse/:id/VideoModel' element={<VideoModel />} /> */}
                {/* <Route path="/Purchase/:id" element={<Curriculum />} /> */}
              </Routes>
            </>
          )}
        </div>
      </div>
    </>
  )
}
export default UserDashBoard;
