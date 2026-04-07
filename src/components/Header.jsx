import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
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
            
            <div className='max-w-[1440px] mx-auto h-full px-1 lg:pl-14 flex items-center justify-between lg:gap-[520px] lg:justify-start'>
                
                
                <div className='flex-shrink-0'>
                    <img className={`transition-all duration-300 w-50 md:w-55`} src={logo} alt="logo" />
                </div>

                
                <div className='hidden lg:flex gap-7 text-xl items-center text-white'>
                    <a href="#1" className='cursor-none hover:underline'>Home</a>
                    <a href="#2" className='cursor-none hover:underline scroll-smooth'>About</a>
                    <a href="#3" className='cursor-none hover:underline scroll-smooth'>Skills</a>
                    <a href="#4" className='cursor-none hover:underline'>Projects</a>
                    <a href="#5" className={`px-6 py-2 rounded-4xl shadow-lg transition-all duration-500 active:translate-y-1 active:shadow-none cursor-none
                        ${scrolled ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}>
                        Contact Me
                    </a>
                </div>

                
                <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-black text-4xl p-2 active:scale-90 transition-transform'>
                    {isOpen ? <VscClose /> : <VscMenu />}
                </button>
            </div>

           
            <div className={`absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-500 overflow-hidden lg:hidden border-b-4 border-white
                ${isOpen ? 'max-h-screen opacity-100 py-10' : 'max-h-0 opacity-0 py-0'}`}>
                
                <nav className='flex flex-col items-center gap-8'>
                    <a href="#1" onClick={() => setIsOpen(false)} className='text-white text-2xl hover:text-gray-400 transition-colors'>Home</a>
                    <a href="#2" onClick={() => setIsOpen(false)} className='text-white text-2xl hover:text-gray-400 transition-colors'>About</a>
                    <a href="#3" onClick={() => setIsOpen(false)} className='text-white text-2xl hover:text-gray-400 transition-colors'>Skills</a>
                    <a href="#4" onClick={() => setIsOpen(false)} className='text-white text-2xl hover:text-gray-400 transition-colors'>Projects</a>
                    
                    
                    <a href="#5" onClick={() => setIsOpen(false)} 
                        className='bg-white text-black px-10 py-4 rounded-full text-2xl shadow-[5px_5px_0px_0px_rgba(255,255,255,0.3)] active:translate-y-1'>
                        Contact Me
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Header