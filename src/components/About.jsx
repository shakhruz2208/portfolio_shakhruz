import React from 'react'
import line from '../images/separatorBlack 1.png'
const About = () => {
  return (
    <div id='2' className='about h-screen w-full bg-gray-300 font-mono '>
      <button className='animate-bounce cursor-none ml-150 mt-25 py-5 px-15 border-4 text-xl font-bold font-serif'>ABOUT ME</button>
      <div>
        <h1 className='text-center text-gray-600 pt-12'>I am a passionate Frontend Developer who enjoys creating modern, responsive, and user-friendly websites. <br /> I focus on writing clean code and building beautiful interfaces using modern web technologies.</h1>
      </div>
      <img className='pl-150 pt-17 animate-pulse' src={line} alt="" />
      <div className='flex gap-20 pt-23 pl-50'>
        <div>
            <h1 className='font-bold text-3xl '>Design</h1>
            <h1 className=''>I design clean and modern user interfaces with a strong <br /> focus on user experience.  I enjoy creating visually <br /> appealing layouts that are simple and effective.</h1>
        </div>
        <div>
            <h1 className='font-bold text-3xl '>Development</h1>
            <h1 className=''>I develop fast and responsive websites using <br /> technologies like HTML, CSS, JavaScript, React, and Next.js. <br /> My goal is to build high-quality web applications.</h1>
        </div>
      </div>
    </div>
  )
}

export default About
