import React, { useState, useEffect, } from "react";
import {useParams } from "react-router-dom"
import { UilEditAlt,UilTrashAlt,UilEye } from '@iconscout/react-unicons'
import axios from "axios";
import { Link, Outlet, NavLink } from "react-router-dom";
import { UilShare } from '@iconscout/react-unicons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UilNotebooks,UilBookOpen,UilTable,UilClock,UilPlay,UilRupeeSign } from '@iconscout/react-unicons'


  const ViewCourse =  () => {
    const param = useParams();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [Category, setCategory] = useState([]);
  // const [catName, setName] = useState("");
  // const [visible, setVisible] = useState(false);
  // const [selected, setSelected]= useState(null);
  // const [id, setId] = useState("");
  const [result, setCourse] = useState();

  

  //get all courses
  const getAllCourses = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/courses/");
      setCourses(data.courses)
      console.log(data.courses)
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCourses();
  }, []);

 

// Delete Course
const handleDelete = async (id) => {
  
  try {
    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/course/${id}`,

    );
    getAllCourses()
    toast.success("Course Deleted Successfully");
    //navigate("/dashboard/admin/products");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};
  return (

    
    <div className=' w-full  p-10 '>
    <table className=' w-full border border-1 '>
    
        <thead className='bg-blue-900 text-heading '>
        
            <tr className='flex justify-between  border border-1 p-2'>
                <td className=''>Sr no</td>
                <td className=''> Course Name</td>
                {/* <td className=''>Category Name</td> */}
                <td className=''>Selling Price</td>
                <td className=''>Discounted Price</td>
                <td className=''>Duration</td>
                {/* <td className=''>Description</td> */}
                <td className=''>Action</td>
            </tr>
        </thead>
        <tbody className=''>
        {courses?.map((p,index) => (
  <>
            <tr className='flex justify-between  border border-1 p-2  ' >
                <td>{index + 1}</td>
                <td>{p.title}</td>
                {/* <td>{p.categoryId}</td> */}
                <td>{p.selling_price}</td>
                <td>{p.discounted_price}</td>
                <td>{p.duration}</td>
                <td className='flex gap-1'>
                <button className='bg-gray-900 text-white rounded-md text-[12px] px-1'
                  ><Link to={"UpdateCourse/"+(p._id)}>2222<UilEditAlt/></Link></button>
                  {/* <button className='bg-gray text-white rounded-md text-[12px] px-1'
                  onClick={handleDelete}><UilTrashAlt/></button> */}
                   <button className='bg-gray-900 text-white rounded-md text-[12px] px-1' onClick={() => {
                              handleDelete(p._id);
                            }}><UilTrashAlt/></button>
                  
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

export default ViewCourse;



    

{/* <div className='py-8 '>
<div class="bg-red-100 p-2">
<div className='flex'>
<UilNotebooks className='h-14 w-10' />
<h1 class="text-2xl text-gray-800 p-2">All Courses</h1>
</div>
</div>
<div class="flex flex-col md:mx-20 py-8 ">
{courses?.map((p) => (
  <>
<div class="overflow-x-auto ">
<div class="inline-block md:w-full py-2 sm:px-6 lg:px-8 items-center">
<div class="overflow-hidden">
<table class="w-full text-left text-sm font-light border-2 border-black ">

<div className='grid lg:grid-cols-2 h-32  justify-between items-center  '>
<div className='flex items-center'>
<div class='bg-gray-600'>
<img src="https://wallpapercave.com/wp/wp7420966.jpg" alt="" className=' object-cover h-32'/> </div>
<div className=' w-full px-4 '>

  <h1 className='text-lg font-semibold '>Course name - {p.title}</h1>
<div className='flex gap-1'><UilTable className='w-4 h-4 mt-1'/>  <h1 className='text-sm font-semibold '>Course Title</h1></div>
<div className='flex gap-1'><UilClock className='w-4 h-4 mt-1'/>  <h1 className='text-sm font-semibold '>Course Time</h1></div>
<div className='flex gap-1'><UilPlay className='w-4 h-4 mt-1'/>  <h1 className='text-sm font-semibold '>Total Lession</h1></div>
<div className='flex'>
<UilRupeeSign UilTable className='w-4 h-4 mt-1'/>
<div class="flex gap-2">
<span class="text-gray-600 lg:text-lg font-bold">5050.00</span>
<span class="text-red-500 font-bold mt-1 line-through">7070.00</span>
</div>
</div>

</div>

</div>
<div  className='text-right '>
<button className='w-28 rounded-lg mr-5 hover:bg-slate-400 text-sm font-semibold hover:text-white duration-150 transition-shadow    border-2 border-blue-800 h-8'>view now</button> </div>

</div>

</table>
</div>
</div>
</div>
</>
))}
</div>

    </div>
*/}
