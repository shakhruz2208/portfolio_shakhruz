import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
const Header = () => {
    const [scrolled , setScrolled] = useState(false)
    
    useEffect (()=>{

        const handleScroll = ()=>{
            const isScrolled = window.scrollY>50
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll' , handleScroll)

        return ()=>{
            window.removeEventListener('scroll' , handleScroll)
        }
    },[])
  return (
    <div   className={scrolled ? 'header z-30 w-full h-20 backdrop-blur-xs  font-bold flex items-center transition-all ease-in-out duration-500  fixed' : ' font-bold header z-30 w-full h-20 transition-all ease-initial duration-1000 bg-transparent flex items-center  fixed'}>
      <div className=' pl-14 flex items-center gap-130'>
        <div>
            <img className='w-55' src={logo}/>
        </div>
        <div className={scrolled ? 'flex gap-7 text-xl items-center text-white ' : 'flex gap-7 text-xl items-center text-white'}>
            <a href="#1" className=' cursor-none hover:underline  '>Home</a>
            <a href="#2" className=' cursor-none hover:underline   scroll-smooth'>About</a>
            <a href="#3" className='  cursor-none hover:underline scroll-smooth'>Skills</a>
            <a href="#4" className=' cursor-none hover:underline ' >Projects</a>
            <a href="#5" className={scrolled ? ' px-6  shadow-lg  transition-all duration-500  active:translate-y-1 active:shadow-none  hover:bg-white hover:text-black py-2 rounded-4xl bg-black text-white cursor-none' : ' px-6  shadow-lg  transition-all duration-500  active:translate-y-1 active:shadow-none  hover:bg-black hover:text-white py-2 rounded-4xl bg-white text-black cursor-none'}>Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Header
