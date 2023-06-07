
import React, { useState } from 'react'

export default function AddLesson() {
  const [title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  
  return (
   
    <>
    <div className=' mt-5 '>
    
      <form className='p-5 mx-auto w-96 border border-heading rounded-3xl grid place-content-center shadow-xl text-darkblue'>
          <select >
            <option>Select Category</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select><br/>
       
          <select>
              <option>Select Course</option>               
              <option>Course 1</option>
              <option>Course 2</option>
            </select>
        <br/>
        <h1 className='text-center'>Add Lessons</h1>
        <input type='text ' 
        value={title}
        onChange={e=>setTitle(e.target.value)}
       
         placeholder=' Title'
         className='border-b-[1px] border-darkblue'></input><br/>
        <input type='text ' 
        value={description}
        onChange={e=>setDescription(e.target.value)}
        
        placeholder=' Description' 
        className='border-b-[1px] border-darkblue'></input><br/>
       
        <button className='bg-darkblue text-heading w-20 rounded-xl mx-auto'>Save</button>
       
      </form>    
    </div>  
    </>
  )
}

