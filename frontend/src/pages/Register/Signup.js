import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";


const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:8000/api/v1/register", {
            name,
            email,
            password
          });
          if (res && res.data.success) {
            toast.success(res.data && res.data.message);
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };
    return (
        <div className="flex justify-center  py-10">
            <div className="mt-10">
                <h1 className="text-center text-4xl text-blue-900 font-bold">welcome to<span className="text-orange-500"> cybrom</span>  </h1>
                <img src="login.jpg" />
            </div>
            <form name="myfname" onSubmit={handleSubmit} id="demo" className='mt-16'>
                <Outlet />
                <div class="flex  justify-center w-full bg-blue-800 m-4">
                    <div class="h-[9%] w-full mt-4">
                        <div class="mb-6 text-white">
                            <a href="#" class="flex justify-end mr-8 space-x-2 hover:underline underline-offset-4">
                                <Link to="/Login">LOGIN</Link>
                                <i class="fa-solid fa-arrow-right-long mt-[6px]"></i>
                            </a>

                        </div>
                        <div class=" flex flex-col justify-center items-center space-y-2">
                            <div>
                                <h1 class="text-xl font-semibold text-white">Sign Up</h1>
                            </div>
                            <div>
                                <h1 class="text-sm font-semibold text-gray-200">Let's join us :</h1>
                            </div>
                        </div>

                        <div class="flex flex-col justify-center items-center mt-7 space-y-6 md:space-y-8">
                            <div class="space-y-2">
                                <h1 class="text-base text-gray-200">Name</h1>
                                <input
                                    type="name"
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Email "
                                    required
                                    className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]" />
                            </div>
                            <div class="space-y-2">
                                <h1 class="text-base text-gray-200">Email</h1>
                                <input
                                    type="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Email "
                                    required
                                    className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]" />
                            </div>
                            <div class="space-y-2">
                                <h1 class="text-base text-gray-200">Password</h1>
                                <input
                                    type="password"
                                    autoFocus
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="exampleInputEmail1"
                                    placeholder="Enter Your Email "
                                    required
                                    className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]" />
                            </div>
                        </div>
                        <div class="text-center mt-10">
                            <button type="submit"
                                class="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium ">Sign Up</button>
                        </div>
                        <div class="text-center my-6">
                            <a href="#" class="text-sm font-medium text-gray-200 hover:text-white hover:underline underline-offset-4">Forgot your
                                Password ?</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
