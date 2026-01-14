import React from 'react'
import Profile from './Profile'

function  HomePage() {
  return (
    <div className='flex h-screen w-full'>
        <div className='w-[30%] h-screen bg-gray-400'>
              <Profile/>
            </div>
            <div className='w-[70%] h-screen flex items-center justify-center bg-gray-200 text-black'>
            Home
            </div>
            </div>
  )
}

export default  HomePage