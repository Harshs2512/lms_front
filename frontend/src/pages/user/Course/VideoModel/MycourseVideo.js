import React, { useEffect } from "react";
import { useState } from "react";
import Sdbar from "../Sdbar/Sdbar";
import Navbar from "../navbar/Navbar";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink, useNavigate, useLocation, useParams } from "react-router-dom";


const VideoModel = ({ isModalOpen, handleModalClose }) => {
    const [lessons, setLesssons] = useState();
    const param = useParams();

    const lessonData = async () => {
        // console.log(auth.token)
        try {
            const { data } = await axios.get(`http://localhost:8000/api/v1/lesson/${param.id}`);
            setLesssons(data.lessons);
            console.log(data.lessons);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        };
    };

    useEffect(() => {
        lessonData();
    },[])


    const [src, setSrc] = useState(true);

    const handleChange = (event) => {
        try {
            // Get the uploaded file
            const file = event.target.files[0];

            // Transform file into blob URL
            setSrc(URL.createObjectURL(file));
        } catch (error) {
            console.error(error);
        }
    };
    if (!isModalOpen) return null;

    return (<>
        <div
            id="modal-body"
            onClick={(e) => e.target.id === "modal-body" && handleModalClose()}
            className="w-3/5 h-full fixed top-20 left-80 bg-[rgba(255,117,117,0.5)]">
            <div className="rounded-md px-3 py-2 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex justify-between items-start text-white">
                    <h1>Lacture Name</h1>
                    <span
                        onClick={() => handleModalClose()}
                        className="text-red-500 text-[20px] hover:text-red-300 cursor-pointer"
                    >
                        &times;
                    </span>
                </div>
                {/* {lessons && lessons.map((l) => (<> */}
                    <iframe width="745" height="498" src="https://youtu.be/mSSTSjkfTMU" title="A tour to Cybrom Technology Pvt Ltd, Bhopal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* </>))} */}
            </div>
        </div></>

    );
};

export default VideoModel;