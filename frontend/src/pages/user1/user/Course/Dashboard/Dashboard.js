import { Outlet, NavLink } from "react-router-dom";
import { UilEnvelopeMinus } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilNotebooks } from '@iconscout/react-unicons'
import { UilShare } from '@iconscout/react-unicons'
import Navbar from '../navbar/Navbar'
import FrontendCourse from "../FrontendCourse/FrontendCourse";

function Dashboard() 
{
  return(
    <>
    <div className="h-screen overflow-auto scrollbar-hide ">    
    <Navbar/>
   <div className="h-[100vh] w-[100%]  overflow-auto scrollbar-hide p-4 bg-slate-100 border border-red-600">
      <div className=" ">
        <div class="bg-gray-200 p-4 ">
    <h1 class="text-2xl text-gray-800">User Dashboard</h1>
    <div class="grid grid-cols-2 gap-4">
     
    </div>
  </div>
        <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {/* <!-- Course Listings --> */}
        <div class="bg-sky-200 h-36  rounded shadow">
            <NavLink to="/Massages"><div className=" flex py-4 text-sm">
            <div className="">
            <i className="">  <UilEnvelopeMinus className="h-16 w-14  p-1 mt-7 text-sky-700"/></i>
          </div>
                <div className=" block my-8 lg:text-lg md:text-sm sm:text-[15px] text-sky-600 "> 
          <p>Communicate</p>
          <h2 class="text-lg font-bold mb-4">message</h2>
          </div>
          {/* <div className="mt-9  ml-2 text-center text-3xl font-bold"><h1></h1></div> */}
         
          </div></NavLink>
          
        </div>
        {/* <div class="bg-yellow-100 h-36 p-4 rounded shadow">
            <NavLink to=""><div className="flex">
            <div className="text-yellow-700">
            <i className="">  <UilUser className="h-14 w-14  p-1 mt-7 "/></i>
          </div>
                <div className="py-8 ml-2 text-yellow-900">
          <p>Profile</p>
          <h2 class="text-lg font-bold mb-4">Your Profile</h2>
          </div>
          
         
          </div></NavLink>
          
        </div> */}
  {/* 
        <!-- Progress Tracker --> */}
       
       <div class="bg-red-100 h-36 p-4 rounded shadow">
            <NavLink to="/Mycourse"><div className="flex">
            <div>
            <i className=" text-red-800">  <UilNotebooks className="h-14 w-14  p-1 mt-7"/></i>
          </div>
                <div className="py-8 ml-2 text-red-800">
          <p>Course</p>
          <h2 class="text-lg font-bold mb-4">My Coures</h2>
          </div>
          {/* <div className="mt-9  ml-2 text-center text-3xl font-bold"><h1>+235</h1></div> */}
         
          </div></NavLink>
          
        </div>
  
        {/* <!-- User Information --> */}
        <div class="bg-blue-200 md:w-56 lg:w-96 rounded shadow">
            <NavLink to="/Purchase"><div className="flex mt-4">
            <div>
            <i className=" text-blue-800">  <UilShare className="h-14 w-14  p-1 mt-7"/></i>
          </div>
                <div className="py-8 ml-2 text-blue-800">
          <p>Course</p>
          <h2 class="text-lg font-bold mb-4">All Course</h2>
          </div>
          {/* <div className="mt-9  ml-2 text-center text-3xl font-bold"><h1>+25</h1></div> */}
         
          </div></NavLink>
          
        </div>
      </div>
      
      
    </main>


<Outlet/>
    <section class= " bg-slate-100 body-font border-t-2 ">
  <div class="container px-5 py-8 ">
  <div class="">
    <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  ">
      <div className="border-r-4 md:hide border-r-red-800 px-6 w-50">
        <h5 className="text-[17px] font-bold">Reacently Course</h5>
        <h1 className="text-[35px] font-bold">Accessed </h1>
      </div>
      <div className=" mx-auto ">
        <p className=" mx-6 float-left first: text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        </div>

    </div>
</div>
    <div class="flex flex-wrap mt-3 -m-4">
      <div class="p-4 w-96 ">
        <div class="h-[20rem] border-2 border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-36 md:h-36 w-full object-cover object-center" src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/html.jpg" alt="blog"/>
          <div class="p-1">
            <h1 class=" text-[25px] font-bold text-orange-600">HTML</h1>
            <p class="leading-relaxed mb-3">The HTML Online  course free provide in this online  plateform</p>
            <div class="flex items-center flex-wrap ">
              <a href="#" class="text-indigo-500 bg-blue-800 text-white  w-full h-8 inline-flex items-center md:mb-2 lg:mb-0">
                <h1 className=" mx-auto">
                Learn more..
                </h1>
              </a>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
   


    {/* <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center mx-auto">
      <div>
        <div className=" justify-center">
        <button type="submit" className="bg-blue-900 text-white w-52 h-8">CUSTOMIZE THIS PAGES</button>
        </div>
        <div className="flex gap-7 justify-center border-2 w-[60rem]">
          <div className="">
          <h1 className="text-xl font-bold p-2 float-left">Recently accessed courses</h1>
          </div>
          <div className=" ">
          <div class="flex flex-row rounded-2xl ml-24 ">
             <a class="rounded p-1 hover:bg-blue-500 font-medium hover:rounded-full m-2 hover:text-white shadow-lg border px-2 " href="#"><ion-icon name="arrow-back-outline"></ion-icon></a> <a class="rounded p-1 hover:bg-blue-500 font-medium hover:rounded-full m-2 hover:text-white shadow-lg border px-2 " href="#">1</a> <a class="rounded p-1 hover:bg-blue-500 font-medium hover:rounded-full m-2 hover:text-white shadow-lg border px-2 " href="#">2</a> <a class="rounded p-1 hover:bg-blue-500 font-medium hover:rounded-full m-2 hover:text-white shadow-lg border px-2 " href="#">3</a> <a class="rounded p-1 hover:bg-blue-500 font-medium hover:rounded-full m-2 hover:text-white shadow-lg border px-2 " href="#">...</a> <a class="rounded p-1 hover:bg-blue-500 font-medium hover:rounded-full m-2 hover:text-white shadow-lg border px-2 " href="#"><ion-icon name="arrow-forward-outline"></ion-icon></a> </div> <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script> <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          </div>
        </div>
      </div>
      <div className="float-right mx-auto bg-white">
      <div class="bg-white rounded shadow">
        <div className="float-right bg-white p-4 mx-auto">
          <p>Perfomance</p>
          <h2 class="text-lg font-bold mb-4">Grade/Progress</h2>
          </div>
        </div>
        
      </div>


    </div> */}
    </div>
        </div>
        </div>
        </>
    
  )
  
}
export default Dashboard;

