import React from 'react'
import { UilShare } from '@iconscout/react-unicons'


export default function Purchase() {
  return (
    <div>
       <div className='py-8 '>
       <div class="bg-blue-200 p-2">
        <div className='flex'>
          <UilShare className='h-14 w-10' />
  <h1 class="text-2xl text-gray-800 p-2">All Course</h1>
  </div>
</div>
      <div class="flex flex-col md:mx-20 py-8">
  <div class="overflow-x-auto ">
    <div class="inline-block md:w-full py-2 sm:px-6 lg:px-8 items-center">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-2 font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">No</th>
              <th scope="col" class="px-6 py-4">Course Name</th>
              <th scope="col" class="px-6 py-4">Course Category</th>

              <th scope="col" class="px-6 py-4">Lession</th>
              <th scope="col" class="px-6 py-4">Course Price</th>
              <th scope="col" class="px-6 py-4">Action</th>

            </tr>
          </thead>
          <tbody>
           
            <tr
              class="border-2 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-400">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4"> HTML/CSS</td>
              <td class="whitespace-nowrap px-6 py-4"> Frontend Course</td>

              <td class="whitespace-nowrap px-6 py-4">1/10</td>
              <td class="whitespace-nowrap px-6 py-4">1000/-</td>
              <button type='submit' className='w-20 h-8 border-2 bg-slate-700 text-white mt-3 rounded-full'>view now</button>

            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}
