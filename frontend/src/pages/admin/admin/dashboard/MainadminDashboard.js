import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './AdminDashboard'
import Course from '../courses/Course'
import Category from '../category/Category'
import Lesson from '../lesson/Lesson'
import AddCategory from '../category/AddCategory'
import ViewCategory from '../category/ViewCategory'
import AddCourse from '../courses/AddCourse'
import ViewCourse from '../courses/ViewCourse'
import AddLesson from '../lesson/AddLesson'
import ViewLesson from '../lesson/ViewLesson'
import Lecture from '../lecture/Lecture'
import AddLecture from '../lecture/AddLecture'
import ShowLesson from '../lesson/ShowLesson'
import ViewLecture from '../lecture/ViewLecture'
import Navbar from '../navbar/Navbar'

export default function AdminDashboard() {
  return (
    <>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='w-[100%] h-screen overflow-auto scrollbar-hide '>
          <Routes>
            <Route path='/admin' element={<Dashboard />}></Route>
            <Route path='/course' element={<Course />}>
              <Route path='/course/AddCourse' element={<AddCourse />}></Route>
              <Route path='/course/ViewCourse' element={<ViewCourse />}></Route>
            </Route>
            <Route path='/Category' element={<Category />} >
              <Route path='/Category/Addcategory' element={<AddCategory />}></Route>
              <Route path='/Category/ViewCategory' element={<ViewCategory />}></Route>
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
  )
}