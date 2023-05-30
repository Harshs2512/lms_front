import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import Landing from "../home/Landing";
import Spinner from "../../components/Spinner";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  const loadin = ()=>{
    document.getElementById('loading').innerHTML=<Spinner />;
  };
  // form function
  const handleSubmit = async (e) => {
    // console.log("hjggjgjgj")
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/login/", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/dashboard");
      } else {
        console.log("asdfd")
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
      <div className="flex justify-center bg-slate-200 py-10">
        <div className="mt-10">
          <h1 className="text-center text-4xl text-blue-900 font">welcome to<span className="text-orange-500"> cybrom</span>  </h1>
          <img src="login.jpg" />
        </div>
        <form name="myfname" onSubmit={handleSubmit} id="demo" className="mt-10" method="post">
          <Outlet />
          <div className="flex justify-center  shadow w-full bg-blue-800 m-4">
            <div className="h-[9%] w-full mt-7">
              <div className="mb-6 text-white">
                <a href="#" className="flex justify-end mr-8 space-x-2 hover:underline underline-offset-4">
                  <Link to="/Signup">Signup</Link>
                  <i className="fa-solid fa-arrow-right-long mt-[6px]"></i>
                </a>

              </div>
              <div className=" flex flex-col justify-center items-center space-y-2">

                <div>
                  <h1 className="text-xl font-semibold text-white"> Login</h1>
                </div>
                <div>
                  <h1 className="text-sm font-semibold text-gray-200">Let's join us :</h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-7 space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <h1 className="text-base text-gray-200">Email</h1>
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
                <div className="space-y-2">
                  <h1 className="text-base text-gray-200">Password</h1>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="  rounded-md px-5 py-2 bg-gray-300 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
              </div>
              <div className="text-center mt-10">
                <button type="submit"
                  className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105  font-medium " onClick={loadin
                  }><span id="loading">login</span></button>
              </div>
              <div className="text-center my-6">
                <button className="text-sm font-medium text-gray-200 hover:text-white hover:underline underline-offset-4"><Link to={"/ForgetPassword"}>Forgot your
                  Password ?</Link></button>
              </div>
            </div>
          </div>
        </form>
      </div>

  );
};

export default Login;
