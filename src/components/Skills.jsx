import React from 'react'
import { BsCss, BsJavascript, BsTypescript } from 'react-icons/bs'
import { CgFigma } from 'react-icons/cg'
import { DiCss3Full, DiHtml5, DiJavascript, DiMongodb, DiReact, DiSass } from 'react-icons/di'
import { FaCss3, FaHtml5 } from 'react-icons/fa'
import { FaCss } from 'react-icons/fa6'
import { FcNext } from 'react-icons/fc'
import { FiFigma } from 'react-icons/fi'
import { GrFigma, GrGithub } from 'react-icons/gr'
import { MdJavascript } from 'react-icons/md'
import { RiEnglishInput, RiHtml5Fill, RiNextjsFill } from 'react-icons/ri'
import { TiCss3, TiHtml5 } from 'react-icons/ti'

const Skills = () => {
  return (
    <div id='3' className='skill w-full h-auto py-2 pb-5 bg-gray-300 font-mono'>
      <button className='animate-bounce cursor-none ml-150 mt-25 py-5 px-15 border-4 text-xl font-bold font-serif'>Skills</button>
      <h1 className='font-bold text-3xl pl-50 pt-10'>Using know:</h1>
      <div className='grid grid-cols-4 pl-45 pt-10 gap-10 '>
        <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><RiHtml5Fill/></h1>
            <h1 className='pl-5 pt-2 text-xl'>HTML5</h1>
        </div>
        <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><TiCss3/></h1>
            <h1 className='pl-5 pt-2 text-xl'>CSS3</h1>
        </div>
        <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><DiSass/></h1>
            <h1 className='pl-5 text-xl pt-2'>SASS</h1>
        </div>
        <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><BsJavascript/></h1>
            <h1 className=' text-xl pt-2'>JAVASCRIPT</h1>
        </div>
        <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><DiReact/></h1>
            <h1 className='pl-5 pt-2 text-xl'>REACT</h1>
        </div>
        <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><GrGithub/></h1>
            <h1 className='pl-3 pt-2 text-xl'>GIT HUB</h1>
        </div>
        <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><FiFigma/></h1>
            <h1 className='pl-5 pt-2 text-xl'>FIGMA</h1>
        </div>
        
      </div>

      <h1 className='font-bold text-3xl pl-50 pt-15'>Learning:</h1>
     <div className='flex pl-45 pt-10 gap-30 text-center'>
         <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><RiNextjsFill/></h1>
            <h1 className=' text-xl pt-2'>NEXT JS</h1>
        </div>
      <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><BsTypescript/></h1>
            <h1 className=' text-xl pt-2'>TYPESCRIPT</h1>
        </div>
      <div className=''>
            <h1 className='text-8xl transition-all duration-350 max-w-max rounded-2xl hover:shadow-mauve-950 hover:shadow-lg'><DiMongodb/></h1>
            <h1 className=' text-xl pt-2'>MONGODB</h1>
        </div>
     </div>
     <div>
        
     </div>
    </div>
  )
}

export default Skills
