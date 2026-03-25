import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { ImInstagram, ImTelegram } from 'react-icons/im'
import shakhruz from '../images/shakhruz.jpg'
const Home = () => {
const el = useRef(null)

  useEffect(()=>{
      const typed = new Typed(el.current, {
  strings: ['Frontend developer', 'Tech Enthusiast' , 'Game Developer' , 'Creative Coder'], 
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,        
  backDelay: 1000,   
  startDelay: 500,   
   showCursor: true,     
  cursorChar: '|',       
  autoInsertCss: true,   
});
    return () => {
      typed.destroy();
    };
  },[])

 

  return (
    <div id='1' className=" static w-full h-screen bg-[#e0e0e0] flex items-center overflow-hidden">

  <div className="z-20 pl-[7%] w-1/2 flex flex-col gap-5">
    <div className='flex flex-col gap-2'>
        <span className="text-3xl font-medium">Hi, I am</span>
    <h1 className="text-7xl font-bold mt-2">S.Shakhruz</h1>
   <div className=" text-gray-600 mt-2  text-3xl">
     <span ref={el} ></span>
   </div>
    </div>
             <div className='flex gap-5'>
               <div className='pt-5'>
                  <a href="" download='https://docs.google.com/document/d/1_cYTqd7li3EEmKEVLKife1wnEIjIcKYxKTSuFdDOlHs/edit?tab=t.0' className=' px-6  shadow-lg  transition-all duration-500  active:translate-y-2 text-xl mt-10 active:shadow-none  hover:bg-black hover:text-white py-3 rounded-4xl bg-white text-black cursor-none font-bold'>Download Resume</a>
              </div>
              <div className='pt-5'>
                  <a href="#4"  className=' px-6  shadow-lg  transition-all  duration-500   text-xl mt-10 active:shadow-none  hover:bg-black hover:text-white py-3 rounded-4xl bg-white text-black cursor-none font-bold'>Projects</a>
              </div>
             </div>
    <div className="flex gap-5 mt-8 cursor-none">
      <a href='https://t.me/@shakhruz022'><BsTelegram className='hover:animate-bounce text-4xl cursor-none hover:shadow-mauve-950 hover:shadow-lg rounded-[100%]'/></a>
      <a href='https://www.instagram.com/shakhruz22.08' ><BsInstagram className='hover:animate-bounce text-4xl  hover:shadow-mauve-950 hover:shadow-lg  cursor-none rounded-2xl'/></a>
      <a href='https://github.com/shakhruz2208' ><GrGithub className='hover:animate-bounce text-4xl cursor-none hover:shadow-mauve-950 hover:shadow-lg rounded-[100%] '/></a>
    </div>
  </div>

 
  <div class=" top-0 pl-[25%] pt-40 right-0 w-[80%] h-full bg-black  
              [clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)]">
                <img className='w-80 rounded-4xl' src={shakhruz} alt="" />
  </div>

  

</div>

  )
}

export default Home
