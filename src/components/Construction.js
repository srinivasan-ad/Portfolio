import React from 'react'
import ProgressBar from './Progrees'

function Construction() {
  return (
<div className='min-h-screen bg-gray-800 w-full flex justify-center items-center'>
    <div className='flex-col'>
            <h1 className="text-white text-3xl font-semibold mb-12">
      Under Construction
    </h1>
    <ProgressBar/>
    </div>
</div>
  )
}

export default Construction