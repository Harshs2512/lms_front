import React from "react";
import { Routes, Route,Link, Outlet } from "react-router-dom";
import Signup from "./Signup";





function Log() {
    function handleClick() {
        const a=document.forms["myfname"]["fname"].value;
        if (a == '') {
            alert("Enter Email!");
            console.log(a)
            return;
            
        };
        const b=document.forms["myfname"]["pname"].value;
        if (b == '') {
            alert("Enter password");
            console.log(b)
            return;
            
        };
    }
    return(
        <div className="  " >
            <div className="flex justify-center  mx-28 bg-slate-200 py-10 mt-16">
            <div className="">
                
            <h1  className="text-center text-4xl text-blue-900 font">welcome to<span className="text-orange-500"> cybrom</span>  </h1>
                <img src="h1.png" />
            </div>
        <form name="myfname" onSubmit={handleClick} id="demo" className="">
            <Outlet/>
                                            <div class="flex justify-center  shadow w-full bg-blue-800 m-4">
                                                <div class="h-[9%] w-full mt-7">
                                                    <div class="mb-6 text-white">
                                                       <a href="#" class="flex justify-end mr-8 space-x-2 hover:underline underline-offset-4">
                                                       <Link to="/Signup">Signup</Link>
                                                           <i class="fa-solid fa-arrow-right-long mt-[6px]"></i>
                                                       </a> 
                                    
                                                    </div>
                                                    <div class=" flex flex-col justify-center items-center space-y-2">
                                                        
                                                        <div>
                                                            <h1 class="text-xl font-semibold text-white"> Login</h1>
                                                        </div>
                                                        <div>
                                                            <h1 class="text-sm font-semibold text-gray-200">Let's join us :</h1>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-col justify-center items-center mt-7 space-y-6 md:space-y-8">
                                                        <div class="space-y-2">
                                                            <h1 class="text-base text-gray-200">Email</h1>
                                                            <input name="fname" type="email" placeholder="Enter Email"
                                                                class="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                                                        </div>
                                                        <div class="space-y-2">
                                                            <h1 class="text-base text-gray-200">Password</h1>
                                                            <input name="pname" type="password" placeholder="Enter password"
                                                                class="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"/>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-10">
                                                        <button type="submit" 
                                                            class="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium ">login</button>
                                                    </div>
                                                    <div class="text-center my-6">
                                                        <a href="#" class="text-sm font-medium text-gray-200 hover:text-white hover:underline underline-offset-4">Forgot your
                                                            Password ?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                        </div>

    )
    
}
export default Log;