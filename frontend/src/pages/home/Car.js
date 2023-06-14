import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {Link} from "react-router-dom";


const Car = () => {

    const scrollLeft = () => {
        document.getElementById("imgs").scrollLeft -= 440;
    };
    const scrollRight = () => {
        document.getElementById("imgs").scrollLeft += 440;
    };

    return (
        <>
            <div className="grid place-items-center bg-[#040239] ">
                <Link to="/all_course">
                <h1 className="py-3 font-semibold text-2xl text-slate-300 uppercase hover:shadow-slate-300 text-center">Growing learning </h1>
                <div id="imgs" className="flex content-center ml-16 w-[90%] h-80 p-4 gap-10 overflow-x-auto scroll-smooth scrollbar-hide "> 
                    <img src="B1.jpeg" alt="" className="h-60 hover:h-64 duration-500  w-[80%]" />
                    <img src="b2.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-[80%]" />
                    <img src="b3.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="b4.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-96" />
                    <img src="b5.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="b6.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="B1.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-[80%]" />
                    <img src="b2.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-[80%]" />
                    <img src="b3.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="b4.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-96" />
                    <img src="b5.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="b6.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="B1.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-[80%]" />
                    <img src="b2.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-[80%]" />
                    <img src="b3.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="b4.jpeg" alt="" className="h-60 hover:h-64 duration-500 w-96" />
                    <img src="b5.jpeg" alt="" className="h-60 hover:h-64 duration-500" />
                    <img src="b6.jpeg" alt="" className="h-60 hover:h-64 duration-500" /> 
                </div>
                </Link>
            </div>
            <div className=" text-3xl text-center bg-[#040239] py-8">
                <button onClick={scrollLeft} className="p-2 m-2  bg-white rounded-full" >
                    <FiChevronLeft />
                </button>
                <button onClick={scrollRight} className="p-2 m-2  bg-white rounded-full"  >
                    <FiChevronRight />
                </button>

            </div>
        </>
    );
}
export default Car;