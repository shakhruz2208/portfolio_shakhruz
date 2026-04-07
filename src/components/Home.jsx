import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { GrGithub } from 'react-icons/gr'
import shakhruz from '../images/shakhruz.jpg'

const Home = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend developer', 'Tech Enthusiast', 'Game Developer', 'Creative Coder'],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.destroy();
  }, [])

  return (
    <div id='1' className="relative w-full min-h-screen bg-[#e0e0e0] flex flex-col md:flex-row items-center overflow-hidden">
      
      
      <div className="z-20 w-full md:w-1/2 flex flex-col gap-5 px-6 pl-12 md:pl-[8%] py-10 md:py-0 ">
        <div className='flex flex-col gap-2 pt-15'>
          <span className="text-2xl md:text-3xl font-medium">Hi, I am</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-2 text-black">S.Shakhruz</h1>
          <div className="text-gray-600 mt-2 text-2xl md:text-3xl h-10">
            <span ref={el}></span>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 mt-4'>
          <a href="#" className='px-6 py-3 shadow-md hover:shadow-xl transition-all duration-300 text-lg rounded-full bg-white text-black font-bold hover:bg-black hover:text-white'>
            Download Resume
          </a>
          <a href="#4" className='px-6 py-3 shadow-md hover:shadow-xl transition-all duration-300 text-lg rounded-full bg-white text-black font-bold hover:bg-black hover:text-white'>
            Projects
          </a>
        </div>

        <div className="flex gap-6 mt-6">
          <a href='#' className='text-3xl hover:scale-125 transition-transform duration-300'><BsTelegram/></a>
          <a href='#' className='text-3xl hover:scale-125 transition-transform duration-300'><BsInstagram/></a>
          <a href='#' className='text-3xl hover:scale-125 transition-transform duration-300'><GrGithub/></a>
        </div>
      </div>

      
      <div className="relative w-full md:w-2/1 h-[450px] md:h-screen bg-black flex  items-center justify-center
                      [clip-path:polygon(0%_15%,100%_0%,100%_100%,0%_100%)] 
                      md:[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)]">
        
        
        <div className='md:ml-20'> 
          <img 
            className='w-56 md:w-72 lg:w-80 rounded-3xl md:rounded-[40px] shadow-2xl border-4 border-white/20 object-cover' 
            src={shakhruz} 
            alt="shakhruz" 
          />
        </div>
      </div>

    </div>
  )
}

export default Home
