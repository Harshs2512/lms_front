import React, { useState, useEffect, } from "react";
import {useParams } from "react-router-dom"
import { UilEditAlt,UilTrashAlt,UilEye } from '@iconscout/react-unicons'
import axios from "axios";
import { Link, Outlet, NavLink } from "react-router-dom";
import { UilShare } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UilNotebooks,UilBookOpen,UilTable,UilClock,UilPlay,UilRupeeSign } from '@iconscout/react-unicons'


  const ViewLesson =  () => {
    const param = useParams();
    const [lesson, setLesson] = useState([]);
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  //const [Category, setCategory] = useState([]);
  const [catName, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected]= useState(null);
  const [id, setId] = useState("");
  const [result, setCourse] = useState();
  const[courseId, setCourseId] =useState();

  
// get single course
// const getSingleCourse = async () => {
//   // console.log(auth.token)
//   try {
//     const { data } = await axios.get(`http://localhost:8000/api/v1/course/${param.id}`);
//     setCourse(data.result);
//     // console.log(data.result);
    
//   } catch (error) {
//     console.log(error);
//     toast.error("Something went wrong");
//   }
// };
// useEffect(() => {
//   getSingleCourse();
// }, [])

  //get all lesson
  const getAllLesson = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/show_lesson/");
      setLesson(data.lesson)
      console.log(data.lesson)
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllLesson();
  }, []);

 

// Delete lesson
const handleDelete = async (id) => {
  
  try {
    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/lesson/${id}`,
    );
    getAllLesson()

    toast.success("Lesson Deleted Successfully");
    //navigate("/dashboard/admin/products");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};
  return (

    
    <div className=' w-full  p-10 '>
    <table className=' w-full border border-1 '>
    
        <thead className='bg-darkblue text-heading '>
        
            <tr className='flex justify-between  border border-1 p-2'>
                <td className=''>Sr no</td>
                {/* <td className=''> Course Name</td> */}
                <td className=''>Leeson Name</td>
                <td className=''>Description</td>
                <td className=''>Action</td>
            </tr>
        </thead>
        <tbody className=''>
        {lesson?.map((p,index) => (
  <>
            <tr className='flex justify-between  border border-1 p-2  ' >
                <td>{index + 1}</td>
                {/* {courses?.map((c) => (

<>
                <td>{c.title}</td>  </>))} */}

                <td>{p.title}</td>
               
                <td>{p.discreption}</td>
                <td className='flex gap-1'>
                  <button className='bg-gray-900 text-white rounded-md text-[12px] px-1'
                  ><UilEditAlt/></button>
                  {/* <button className='bg-gray text-white rounded-md text-[12px] px-1'
                  onClick={handleDelete}><UilTrashAlt/></button> */}
                   <button className='bg-gray-900 text-white rounded-md text-[12px] px-1' 
                    onClick={() => {
                      handleDelete(p._id);
                    }}><UilTrashAlt/></button>
                   <button className='bg-gray-900 text-white rounded-md text-[12px] px-1'><Link to='/dashboard/lesson/showlesson'><UilEye/></Link></button>
                </td>
            </tr> 
            
              </>
        ))} 
        </tbody> 
       
      </table>
      {/* <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              open={visible}
            >
              <CategoryForm
                value={updatedForm}
                setValue={setUpdatedForm}
                handleSubmit={handleUpdate}
              />
            </Modal> */}
      <ToastContainer/>
    </div>
    
  )
} 

export default ViewLesson;









// import React from 'react'

// import { UilEditAlt,UilTrashAlt,UilEye } from '@iconscout/react-unicons'
// import { Link } from 'react-router-dom'
// import ShowLesson from './ShowLesson'

// export default function ViewLesson() {
//   return (
//     <>
//     <div className=' w-full  p-10 '>
//     <table className=' w-full  '>
//         <thead className='bg-darkblue text-heading '>
//             <tr className='flex justify-between mx-10'>
//                 <td className=''>Sr no</td>
//                 <td className=''>Course Name</td>
//                 <td className=''>Total Lessons</td>
//                 <td className=''>Action</td>
//             </tr>
//         </thead>
//         <tbody className=''>
//             <tr className='flex justify-between mx-10 mr-2' >
//                 <td>01</td>
//                 <td>xyz</td>
//                 <td>xyz</td>
//                 <td className='flex gap-2'>
//                   <button className='bg-gray text-white rounded-md text-[12px] px-1'><UilEditAlt/></button>
//                   <button className='bg-gray text-white rounded-md text-[12px] px-1'><UilTrashAlt/></button>
//                   <button className='bg-gray text-white rounded-md text-[12px] px-1'><Link to='/lesson/ShowLesson'><UilEye/></Link></button>
//                 </td>
//             </tr>      
//         </tbody> 
        
//       </table>
//     </div>
      
//     </>
//   )
// }
