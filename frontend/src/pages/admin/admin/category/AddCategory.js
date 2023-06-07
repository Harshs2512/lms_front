
import React, { useState } from 'react'

export default function AddCategory() {
  const [category,setCategory]=useState("")
  return (
    <>
    <div className='shadow-xl w-96 mx-auto p-6 rounded-xl text-center mt-5 border border-heading'>
        <form className='mx-auto w-52' >
             <input type='text' value={category} onChange={e=>setCategory(e.target.value)} 
             placeholder='Enter Category' 
             className='border-b-[1px] text-center p-2 border-darkblue'
             ></input><br/><br/>
             <button className='text-heading bg-darkblue rounded-2xl w-28' >Save</button>
        </form>
    </div> 
    </>
  )
}
