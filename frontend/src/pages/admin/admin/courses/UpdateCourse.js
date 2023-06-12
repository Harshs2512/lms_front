import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Title from "antd/es/skeleton/Title";
const { Option } = Select;

const UpdateCourse =  () => {
  const param = useParams();
  const [categories, setCategories] = useState([]); 
  const [title, setTitle] = useState("");
  const [selling_price, setSelling_price] = useState("");
  const [discounted_price, setDiscounted_price] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [thumnail_img, setThumnail_img] = useState("");
  const [categoryId, setCategoryId] = useState("");
  useEffect(() => {
    getSingleCourse();
  }, [])
  const getSingleCourse = async () => {
    try {
      const { data } = await axios.get(` http://localhost:8000/api/v1/course/${param.id}`);
      console.log(data)
      setTitle(data.result.title);    
      setSelling_price(data.result.selling_price);
      setDiscounted_price(data.result.discounted_price);
      setDuration(data.result.duration);
      setDescription(data.result.description); 
      setCategoryId(data.result.category._id);
      setThumnail_img(data.result.thumnail_img);
      // console.log(data.result);
      
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
 
  //get all cat
const getAllCategory = async () => {
    try {
   const { data } = await axios.get("http://localhost:8000/api/v1/show_category/");
   if (data.success) {
     setCategories(data.category);
   }
   } catch (error) {
     console.log(error);
    //  toast.error("Something Went Wrong");
   }
 };
useEffect(() => {
   getAllCategory();
 }, []);

// get single course
const courseData = {
  title:"wweewe",
  selling_price:"200",
  discounted_price:"3333",
  duration:"4 month",
  description:"DSSASDDVFSDASDSFA",

};


//   update course
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log("chal gaya",courseData);

      // const coursetData = new FormData();
      
      // coursetData.append("title", title);
      // coursetData.append("selling_price", selling_price);
      // coursetData.append("discounted_price", discounted_price);
      // coursetData.append("duration", duration);
      // coursetData.append("description", description);
      // coursetData.append("thumnail_img", thumnail_img);
      // console.log("This Is working of course Update data",);
      const res = axios.put(
        `http://localhost:8000/api/v1/course/${param.id}`,{
        courseData
        
       });
     
      if (res?.success) {
        toast.error(res?.message);
        toast.success("Product Updated Successfully");
      } else {
        toast.success("Product Updated Successfully");
        // navigate("/dashboard/admin/");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <>
     <div className='shadow-xl w-96 mx-auto  rounded-xl text-center mt-5 border border-heading'>
        <h1>Update Course</h1>
     <form >
                  <div class="border-t border-gray-200">
                    <dl>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">

                        </dt>

                        <Select
                          required
                          bordered={false}
                          placeholder="Select category"
                          size="large"
                          showSearch
                          className="form-select mb-3 border border-1"
                          onChange={(value) => {
                            setCategoryId(value);
                          }}
                          value={categoryId}
                        >
                          {categories?.map((c) => (
                            <Option key={c._id} value={c._id}>
                              {c.catName}
                            </Option>
                          ))}
                        </Select>
                      </div>


                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          
                        </dt>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          
                          placeholder="Course Name"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                        
                      </div>
                     

                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                         
                        </dt>
                        <input
                          type="number"
                          value={selling_price}
                          onChange={(e) => setSelling_price(e.target.value)}
                          
                          placeholder="Selling Price"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                      </div>

              
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          
                        </dt>
                        <input
                          type="number"
                          value={discounted_price}
                          onChange={(e) => setDiscounted_price(e.target.value)}
                          id="exampleInputEmail1"
                          placeholder="Discounted Price"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          
                        </dt>
                        <input
                          type="text"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          id="exampleInputEmail1"
                          placeholder="Duration"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          
                        </dt>
                        <input
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          
                          placeholder="Course Description"
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        />
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-xl font-medium text-gray-500 mt-5">
                          
                        </dt>
                        <label className="outline outline-1  col-md-12">
                    {thumnail_img ? thumnail_img.name : "Browse"}
                        <input
                          type="file"
                          name="thumnail_img"
                          accept="image/*"
                      onChange={(e) => setThumnail_img(e.target.files[0])}
                      hiddensetThumnail_img
                          
                          
                          required

                          className="w-full text-lg py-2 border-b border-black focus:outline-none focus:border-indigo-500 bg-white md:mb-5"
                        /> </label>
                      </div>
                      <div className="mb-3">
                {thumnail_img && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(thumnail_img)}
                        alt="product_thumnail_img"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div> 
                      
                      <div class="mt-5 text-center mb-4 md:space-x-3 md:block flex flex-col-reverse">
                        <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium 
                        tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={handleUpdate}>Update Course </button>
                
                      </div>
                    </dl>
                  </div>
                </form>
                <ToastContainer/>
    </div>
    </>
  );


}


  export default UpdateCourse;