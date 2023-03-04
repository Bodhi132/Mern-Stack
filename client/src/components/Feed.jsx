import React from 'react'
import PostSharing from './PostSharing'
import { useState } from 'react'

const IndexPage = () => {

  const [addedPhotos, setAddedPhotos] = useState('')

  return (
    <div className='flex flex-col gap-3 ml-[3rem]'>
      <PostSharing addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
      <div className='m-5 w-3/5 h-[31rem] bg-slate-300 rounded shadow flex flex-col '>
        <div className='flex flex-col relative'>
          <div className='flex flex-row p-3 items-start'>
            <div className="relative">
              <img className="w-10 h-10 rounded-full" src="../src/assets/avatar_2.jpeg" alt="" />
              {/* <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
            </div>
            <div className='ml-2 font-semibold font-sans'>Margarita <span className='ml-1 font-light font-sans text-gray-500'>shared a photo</span> </div>
          </div>
          <span className='ml-8 absolute top-9 left-7 text-xs font-sans font-light text-slate-800'>2 hours ago</span>
        </div>
        <div className='flex flex-col'>
          <div className='w-4/5 ml-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet adipisci facilis
            nesciunt vero inventore quisquam veniam, in rem?
            Repudiandae, deserunt expedita consequuntur iusto ex quo quae quasi obcaecati aperiam.
          </div>
          <img src='../src/assets/taxi.jpg' className='ml-5 mt-4 w-4/5 h-64 rounded-md' />
        </div>
      </div>
      <div className='m-5 w-3/5 h-[31rem] bg-slate-300 rounded shadow flex flex-col'>
        <div className='flex flex-col relative'>
          <div className='flex flex-row p-3 items-start'>
            <div className="relative">
              <img className="w-10 h-10 rounded-full" src="../src/assets/avatar_2.jpeg" alt="" />
              {/* <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
            </div>
            <div className='ml-2 font-semibold font-sans'>Margarita <span className='ml-1 font-light font-sans text-gray-500'>shared a photo</span> </div>
          </div>
          <span className='ml-8 absolute top-9 left-7 text-xs font-sans font-light text-slate-800'>2 hours ago</span>
        </div>
        <div className='flex flex-col'>
          <div className='w-4/5 ml-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet adipisci facilis
            nesciunt vero inventore quisquam veniam, in rem?
            Repudiandae, deserunt expedita consequuntur iusto ex quo quae quasi obcaecati aperiam.
          </div>
          <img src='../src/assets/taxi.jpg' className='ml-5 mt-4 w-4/5 h-64 rounded-md' />
        </div>
      </div>
      <div className='m-5 w-3/5 h-[31rem] bg-slate-300 rounded shadow flex flex-col'>
        <div className='flex flex-col relative'>
          <div className='flex flex-row p-3 items-start'>
            <div className="relative">
              <img className="w-10 h-10 rounded-full" src="../src/assets/avatar_2.jpeg" alt="" />
              {/* <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
            </div>
            <div className='ml-2 font-semibold font-sans'>Margarita <span className='ml-1 font-light font-sans text-gray-500'>shared a photo</span> </div>
          </div>
          <span className='ml-8 absolute top-9 left-7 text-xs font-sans font-light text-slate-800'>2 hours ago</span>
        </div>
        <div className='flex flex-col'>
          <div className='w-4/5 ml-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet adipisci facilis
            nesciunt vero inventore quisquam veniam, in rem?
            Repudiandae, deserunt expedita consequuntur iusto ex quo quae quasi obcaecati aperiam.
          </div>
          <img src='../src/assets/taxi.jpg' className='ml-5 mt-4 w-4/5 h-64 rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default IndexPage