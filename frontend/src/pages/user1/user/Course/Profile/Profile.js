import React from 'react'
import Navbar from '../navbar/Navbar'
import { UilUser } from '@iconscout/react-unicons'
import { Form } from 'react-router-dom'
import { UilEdit } from '@iconscout/react-unicons'
import Profileupdate from './Profileupdate'
import { Link } from "react-router-dom";


export default function Profile() {
  return (
    <div className="h-screen overflow-auto scrollbar-hide ">
         <Navbar/>
       <div class=" bg-gradient-to-tr from-gray-200 to-blue-100 h-full justify-center items-center">
    <div className="">
            <div class=" bg-gradient-to-tr from-red-200 to-blue-800 ">
        <div className='flex'>
          <UilUser className='h-10 w-10' />
  <h1 class="text-2xl text-gray-800 p-2">Profile</h1>
  </div>
</div>

<div class="bg-white mx-auto border border-black mt-4 max-w-2xl shadow overflow-hidden sm:rounded-lg">
<div class="flex px-5  mt-12">
                    <img class="h-32 w-32 bg-white p-2 rounded-lg    " src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" />
                    <div className='mt-24 flex'>
                        <h1 className='text-blue-900'><UilEdit/></h1>
                        <Link to='/Profileupdate'><h1 className='text-sm font-bold'>Update</h1></Link>
                        


                    </div>
                </div>
{/* <div class="flex items-center">
    
        <img class="w-16 h-16 rounded-full mr-3" src="https://loremflickr.com/320/320/girl" alt="jane"/>
       
        <div class="text-sm">
            <a href="#"
                class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
                Jane doe
            </a>
            <p>Blogger &amp; Youtuber</p>
        </div>
    </div> */}
    <div class="border-t border-gray-200">
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Dinesh Prajapati
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    dineshpraja2022@gmail.com
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                   Contect No
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    9685742468
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Role
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Student
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Password
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   ****
                </dd>
            </div>
            <div class="mt-5 text-center mb-4 md:space-x-3 md:block flex flex-col-reverse">
									<button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">Back </button>
									<button class="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500">Update</button>
								</div>
            
        </dl>
    </div>
</div>
{/* <div class="flex py-8 ">
<div class="">
    <div class="bg-white md:mx-96   md:h-[] shadow-xl rounded-lg py-3 md:flex  ">
        <div class="photo-wrapper p-2 order-2 md:ml-42">
            <img class="w-70 h-72 block rounded-lg  mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Profile</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>User</p>
            </div>
            <table class="text-xs my-3">
                <tbody>
                <tr>
                    <td class="px-2 py-2 text-gray-500 text-xl font-semibold">Name:</td>
                    <td class="px-2 py-2 text-sm">Suresh Kumar singh</td>
                </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500  text-xl font-semibold">Email:</td>
                    <td class="px-2 py-2 text-sm">suresh@gmail.com</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 text-xl font-semibold">Phone</td>
                    <td class="px-2 py-2 tezt-sm">+91 9955221114</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 text-xl font-semibold">Password</td>
                    <td class="px-2 py-2 text-sm">Sureshbibi</td>
                </tr>
                <button type="edit" className='border-2 w-20 mt-2 float-right bg-teal-500'>Edit</button>
            </tbody></table>

           

        </div>
    </div>
</div>

</div> */}

{/* <!--Tabs navigation--> */}




 



  </div>
      </div>
    </div>
  )
}
