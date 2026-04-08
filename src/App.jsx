import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const cursorRef = useRef(null)

  useEffect(()=>{
    const moveCursor = (e)=>{
      if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }
    }
    window.addEventListener('mousemove' , moveCursor)

    return ()=> window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className='all'>
      <div ref={cursorRef} className="my-custom-cursor"></div>
      <div>
        <Header/>
        <Home/>
        <div className='bg-gradient-to-r from-indigo-900 via-slate-800 to-slate-900
        bg-[length:200%_200%]
        animate-[gradientMove_10s_ease_infinite] w-full md:h-70 h-auto text-white py-15 flex flex-col gap-3 px-10'>
          <h1 className='text-2xl'>Frontend Developer</h1>
          <h1 className='text-lg text-gray-400'>I love turning ideas into interactive web experiences. As a frontend developer, I focus on <br /> creating clean designs, smooth user interfaces, and modern websites using <br /> React and Next.js. I enjoy learning new technologies and <br /> constantly improving my development skills.</h1>
        </div>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
