import React, { useEffect, useState } from 'react'
import logo from '../images/shakhlogo.png'
import { VscMenu, VscClose } from 'react-icons/vsc'; // Ikonkalar

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false) // Mobil menyu ochilishi
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed z-50 w-full transition-all duration-500 ease-in-out font-bold
            ${scrolled ? 'h-20 backdrop-blur-md shadow-xl' : 'h-20 bg-transparent'}`}>
            
            <div className='max-w-[1440px]  mx-auto h-full lg:pl-14 flex items-center gap-22 lg:gap-[520px] lg:justify-start'>
                
                
                <div className='flex-shrink-0'>
                    <img className={`transition-all duration-300 w-50 md:w-55`} src={logo} alt="logo" />
                </div>

                
                <div className='hidden lg:flex gap-7 text-xl items-center text-[#e2e8f0]'>
                    <a href="#1" className='cursor-none hover:underline hover:text-indigo-400 transition-colors ease-in-out duration-300'>Home</a>
                    <a href="#2" className='cursor-none hover:underline scroll-smooth hover:text-indigo-400 transition-colors ease-in-out duration-300' >About</a>
                    <a href="#3" className='cursor-none hover:underline scroll-smooth hover:text-indigo-400 transition-colors ease-in-out duration-300'>Skills</a>
                    <a href="#4" className='cursor-none hover:underline hover:text-indigo-400 transition-colors ease-in-out duration-300'>Projects</a>
                    <a href="#5" className={`bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-500/30 cursor-none`}>
                        Contact Me
                    </a>
                </div>

                
                <button onClick={() => setIsOpen(!isOpen)} className='hover:cursor-none lg:hidden text-indigo-600 text-4xl p-2 active:scale-90 transition-transform'>
                    {isOpen ? <VscClose /> : <VscMenu />}
                </button>
            </div>

           
            <div className={`absolute top-[100%] bg-gradient-to-r from-indigo-900 via-slate-800 to-slate-900
        bg-[length:200%_200%]
        animate-[gradientMove_10s_ease_infinite] left-0 w-full  transition-all duration-500 overflow-hidden lg:hidden border-b-4 border-white
                ${isOpen ? 'max-h-screen opacity-100 py-10' : 'max-h-0 opacity-0 py-0'}`}>
                
                <nav className='flex flex-col items-center gap-8'>
                    <a href="#1" onClick={() => setIsOpen(false)} className='text-white hover:cursor-none text-2xl hover:text-indigo-400 transition-colors'>Home</a>
                    <a href="#2" onClick={() => setIsOpen(false)} className='text-white hover:cursor-none text-2xl hover:text-indigo-400 transition-colors'>About</a>
                    <a href="#3" onClick={() => setIsOpen(false)} className='text-white hover:cursor-none text-2xl hover:text-indigo-400 transition-colors'>Skills</a>
                    <a href="#4" onClick={() => setIsOpen(false)} className='text-white hover:cursor-none text-2xl hover:text-indigo-400 transition-colors'>Projects</a>
                    
                    
                    <a href="#5" onClick={() => setIsOpen(false)} 
                        className='bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition shadow-lg shadow-indigo-500/30 cursor-none '>
                        Contact Me
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Header