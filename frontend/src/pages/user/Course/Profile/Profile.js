import React, { useEffect, useState } from 'react'
import { UilUser, UilEdit } from '@iconscout/react-unicons'
import { useAuth } from "../../../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import axios from 'axios';
import Sdbar from '../Sdbar/Sdbar';



const Profile = () => {
  // const name1 = "adnan33";
  // const email1 = "adnan@gmail.com";
  const [auth, setAuth] = useAuth();
  // const config = {
  //   headers:{
  //     header1: value1,
  //     header2: value2
  //   }
  // };
  // const { name, email } = auth?.user; 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");


  console.log(name);
  console.log(email);

  // useEffect(() => {
  //   const [ name, email ] = auth?.user; 
  //   setName(name)
  //   setEmail(email)
  // }, [auth.user]);

  const profileData = async () => {
    // console.log(auth.token)
    try {
        const { data } = await axios.get("http://localhost:8000/api/v1/me", {
            headers: {
                authorization: auth.token
            }
        });
        setUser(data.user);
        // console.log(data.user);
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
};

useEffect(() => {
    profileData();
},[auth.token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("dsa")
      // axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const { data } = await axios.put("http://localhost:8000/api/v1/me/update", {
        name,
        email
      });

      if (data?.errro) {
        console.log("kkr")
        toast.error(data?.error);
      } else {
        console.log("kkb")
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        console.log(ls)
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <><div className='flex'>
      <div>
        <Sdbar />
      </div>
      <div>
        <div className="overflow-auto scrollbar-hide ml-60 mt-20">
          <div class=" bg-gradient-to-tr from-gray-200 to-blue-100 h-full justify-center items-center">
            <div className="">
              <div class=" bg-gradient-to-tr from-red-200 to-blue-800 ">
                <div className='flex'>
                  <UilUser className='h-10 w-10' />
                  <h1 class="text-2xl text-gray-800 p-2">Profile</h1>
                </div>
              </div>
              <div class="bg-white mx-auto border border-black mt-4 max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div class="px-5 mt-12 ml-60 rounded-lg">
                  <img class="h-32 w-32 bg-white p-2 rounded-full" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          {user.name}
                        </dt>
                        <input
                          type="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          id="exampleInputEmail1"
                          placeholder="Enter Your Name"
                          required
                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          {user.email}
                        </dt>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="exampleInputEmail1"
                          placeholder="Enter Your Name"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                      </div>
                      <div class="mt-5 text-center mb-4 md:space-x-3 md:block flex flex-col-reverse">
                        <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">Back </button>
                        <button class="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500">Update</button>
                      </div>
                    </dl>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Profile;
