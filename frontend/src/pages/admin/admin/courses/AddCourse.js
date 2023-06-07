
import React, { useState } from 'react'

export default function AddCourse() {
  const [course,setCourse]=useState("")
  return (
    <>
     <div className='shadow-xl w-96 mx-auto p-6 rounded-xl text-center mt-5 border border-heading'>
        <form className='mx-auto w-52' >
             <input type='text ' 
             placeholder='Enter Course'
             value={course}
             onChange={e=>setCourse(e.target.value)}
            
              className='border-b-[1px] text-center p-2 border-darkblue'></input><br/><br/>
             <button className='text-heading bg-darkblue rounded-2xl w-28'>Save</button>
        </form>
    </div>
    </>
  )
}
