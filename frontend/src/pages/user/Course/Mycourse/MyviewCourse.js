import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { UilVideo } from '@iconscout/react-unicons'

export default function MyviewCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenes, setIsOpenes] = useState(false);
  const [lessons, setLesssons] = useState();
  const [firstlesson, setFirstlesson] = useState();
  const param = useParams();


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordions = () => {
    setIsOpens(!isOpens);
  };
  const toggleAccordiones = () => {
    setIsOpenes(!isOpenes);
  };


  const lessonData = async () => {
    // console.log(auth.token)
    console.log(param)
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/lesson/${param.id}`);
      setLesssons(data.lessons);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    };
  };


  const firstLesson = async () => {
    // console.log(auth.token)
    console.log(param)
    try {
      const { data } = await axios.get(`http://localhost:8000/api/v1/firstLesson/${param.id}`);
      setLesssons(data.firstlesson);
      console.log(data.firstlesson);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    };
  };

  useEffect(() => {
    firstLesson();
    lessonData();
  }, []);

  return (

    <div className='ml-10 w-[80rem]'>
      <div className='bg-gray-300 w-full h-14 font-bold text-xl'>
        <h1>My Course Start</h1>
      </div>
      <div className=''>
        <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-80 h-14 py-3 rounded-lg font-bold '>
          <div>
            <h1>Course Content</h1>
          </div>
          <div className=' float-right'>
            <h1 className=''>course date/time</h1>
          </div>
        </div>
      </div>
      <div className=' w-3/5 mx-auto shadow-xl'>
        <div className=''>
          <button
            className=" px-4 py-2  bg-gray-100  w-full text-left"
          >
            Introduction
          </button>
          <div className=" px-4 py-2 bg-gray-100">
            <div>
              <h1 className=' text-[15px] px-4 font-bold'>INTRODUCTION </h1>
              <h1 className=' mt-4 text-[15px] px-6 font-bold'>Lession Material </h1>
              <h1 className=' mt-4 text-[15px] px-6 font-bold'>Course Announcements:- </h1>
              {lessons && lessons.map((l,i) => (
                <p className=' mt-4 text-[15px] text-gray-600 px-6 font-semibold'>{l.discreption}--{i}</p>
              ))}
              </div>
          </div>

        </div>
      </div>
      {lessons && lessons.map((l, i) => (
        <>
          <div key={l._id} className='mt-2'>
            <div className=' w-3/5 mx-auto shadow-xl'>
              <div className=''>
                <button
                  className=" px-4 py-2  bg-gray-100  w-full text-left"
                  onClick={toggleAccordions}
                >
                  {i + 1} - {l.title}
                </button>

                {isOpens && (
                  <div>
                    <div className=" px-4  bg-gray-100">

                    </div>
                    <div className=" px-4 py-2 bg-gray-100 border">
                      <div className='grid grid-cols-3 '>
                        <div><h1>Lecture Name</h1></div>
                        <div> <h1>--/--</h1></div>
                        <div><button className=' float-right animate-pulse '><UilVideo /> </button></div>

                      </div>
                    </div>
                    <div className=" px-4 py-2 bg-gray-100 border">
                      <div className='grid grid-cols-3 '>
                        <div><h1>Lecture Name</h1></div>
                        <div> <h1>--/--</h1></div>
                        <div><button className=' float-right animate-pulse '><UilVideo /> </button></div>

                      </div>
                    </div>

                  </div>

                )}

              </div>

            </div>
          </div>
        </>))}
      <div className='mt-2'>
        <div className=' w-3/5 mx-auto shadow-xl'>
          <div className=''>
            <button
              className=" px-4 py-2  bg-gray-100  w-full text-left"
              onClick={toggleAccordiones}
            >
              Lession-2
            </button>

            {isOpenes && (
              <div>
                <div className=" px-4  bg-gray-100">

                </div>
                <div className=" px-4 py-2 bg-gray-100 border">
                  <div className='grid grid-cols-3 '>
                    <div><h1>Lecture Name</h1></div>
                    <div> <h1>--/--</h1></div>
                    <div><button className=' float-right animate-pulse '><UilVideo /> </button></div>

                  </div>
                </div>
              </div>

            )}

          </div>

        </div>
      </div>
    </div >
  )
}
