function Frontend_Course() {
  return(
    <div>
      
      <section class= " bg-slate-100 body-font ">
  <div class="container px-5 py-24 ">
  <div class="">
    <div className=" flex">
      <div className="border-r-4 border-r-red-800 px-6 w-50">
        <h5 className="text-[17px] font-bold">Reacently Course</h5>
        <h1 className="text-[35px] font-bold">Accessed </h1>
      </div>
      <div className=" mx-auto ">
        <p className=" mx-6 py-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        </div>

    </div>
</div>
    <div class="flex flex-wrap mt-3 -m-4">
      <div class="p-4 md:w-1/3">
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

    </div>
  )
  
}
export default Frontend_Course;