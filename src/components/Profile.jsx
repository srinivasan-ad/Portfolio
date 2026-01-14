import React from 'react'

function Profile() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">

      <div className="flex flex-col items-center justify-center flex-1 px-6  ">
        <img
          src="test.jpeg"
          alt="Aditya"
          className="w-50 h-50 rounded-full mb-6"
        />

        <p className="max-w-xl leading-relaxed text-lg">
          Hi, I’m Aditya.
          <br />
          <br />
          A final-year Computer Science student with immense love to build all things software.
          I’m focused on learning by building real systems, understanding how things work beneath the surface, and improving through consistent practice. I enjoy working on projects that challenge my thinking, strengthen my fundamentals, and push me to design better solutions over time.
        </p>
      </div>

     <div className="p-6 flex flex-col items-center gap-3">

  <a
  href="/resume.pdf"
  download
  className="mb-4 px-6 py-2 border border-white/30 rounded-full text-sm tracking-wide opacity-70 hover:opacity-100  hover:border-white transition ">
  Download Resume
</a>
  <div className="flex gap-6 opacity-70 ">
    <a href='https://github.com/srinivasan-ad'  target="_blank" rel="noopener noreferrer" className='hover:opacity-100  hover:text-white transition'>GitHub </a>
    <p>|</p>
    <a href='https://www.linkedin.com/in/adityasrinivasan09/'  target="_blank" rel="noopener noreferrer" className='hover:opacity-100  hover:text-white transition'>LinkedIn </a>
      <p>|</p>
    <a href='https://leetcode.com/u/srinivasan-ad/'  target="_blank" rel="noopener noreferrer" className='hover:opacity-100  hover:text-white transition'>LeetCode </a>
   
  </div>
</div>

    </div>
  )
}

export default Profile
