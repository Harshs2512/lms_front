import React, { useState } from 'react';
import { UilVideo } from '@iconscout/react-unicons'

export default function MyviewCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenes, setIsOpenes] = useState(false);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordions = () => {
    setIsOpens(!isOpens);
  };
  const toggleAccordiones = () => {
    setIsOpenes(!isOpenes);
  };
  return (
    <>
      <div className='ml-40'>
        <div className='bg-gray-300 w-full h-14 font-bold text-xl'>
          <h1>My Course Start</h1>
        </div>
        <div className='py-10'>
          <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-3/5 h-14 px-4 py-3 rounded-lg font-bold  mx-auto '>
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
              onClick={toggleAccordion}
            >
              Introduction
            </button>

            {isOpen && (
              <div className=" px-4 py-2 bg-gray-100">
                <div>
                  <h1 className=' text-[15px] px-4 font-bold'>INTRODUCTION </h1>
                  <h1 className=' mt-4 text-[15px] px-6 font-bold'>Lession Material </h1>
                  <h1 className=' mt-4 text-[15px] px-6 font-bold'>Course Announcements:- </h1>
                  <p className=' mt-4 text-[15px] text-gray-600 px-6 font-semibold'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='mt-2'>
          <div className=' w-3/5 mx-auto shadow-xl'>
            <div className=''>
              <button
                className=" px-4 py-2  bg-gray-100  w-full text-left"
                onClick={toggleAccordions}
              >
                Lession-1
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
      </div>

    </>
  )
}
