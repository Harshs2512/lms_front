import React, { useState } from "react";
import axios from "axios";
// import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from "../../context/auth";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    // const user = "yes";
    const Forgetpassword = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/password/forgot/", {
                email
            });
            toast.info("Check your Email!", {
                position: "top-right"
            });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", {
                position: "top-right"
            });
        }
    };
    return (
        <>
            <h1>Forget_password</h1>
            <div className='flex justify-center bg-slate-400 p-40'>
                <div>
                    <form>
                        <input type="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={Forgetpassword}>Register new account</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};
export default ForgetPassword;
