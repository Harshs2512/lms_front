import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { UilNotebooks, UilTable, UilClock, UilPlay } from '@iconscout/react-unicons'

export default function Mycourse() {

  const [your_Orders, setCourse] = useState();
  const [auth, setAuth] = useAuth();

  const courseData1 = async () => {
    // console.log(auth.token)
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/courseEnroll/me", {
        headers: {
          authorization: auth?.token
        }
      });
      console.log(data.your_Orders);
      setCourse(data.your_Orders);
      // console.log(data.result);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    courseData1();
  }, [])


  return (
    <div className='ml-[13rem] mt-20'>
      <div class="bg-red-100 p-10 py-15">
        <div className='flex'>
          <UilNotebooks className='h-14 w-10' />
          <h1 class="text-2xl text-gray-800 p-2">My Course</h1>
        </div>
      </div>
      <div class="flex flex-col md:mx-16 py-5 rounded-lg">
        <div class="overflow-x-auto">
          <div class="inline-block md:w-full py-2 sm:px-6 lg:px-8 items-center">
            {your_Orders && your_Orders.map((c, i) => (
              <div key={c._id} class="overflow-hidden rounded-xl border-2 p-5 border-red-500">
                <table class="w-full text-left text-sm font-light  ">
                  <div className='grid lg:grid-cols-2 justify-between items-center  '>
                    <div className='flex items-center'>
                      <div class='bg-gray-600'>
                        <img src="https://wallpapercave.com/wp/wp7420966.jpg" alt="" className=' object-cover h-32' /> </div>
                      <div className=' w-full px-10 space-y-2'>
                        <h1 className='text-lg font-semibold '>Course name: &nbsp; {}</h1>
                        <div className='flex gap-1'><UilTable className='w-4 h-4 mt-1' /> <h1 className='text-sm font-semibold '>Course Title</h1></div>
                        <div className='flex gap-1'><UilClock className='w-4 h-4 mt-1' />  <h1 className='text-sm font-semibold '>Course Time</h1></div>
                        <div className='flex gap-1'><UilPlay className='w-4 h-4 mt-1' />  <h1 className='text-sm font-semibold '>Total Lession</h1></div>
                      </div>
                    </div>
                    <div className='text-right '>
                      <button className='w-28 rounded-lg mr-5 hover:bg-slate-400 text-sm font-semibold hover:text-white duration-150 transition-shadow    border-2 border-red-500 h-8'>view now</button> </div>
                  </div>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}