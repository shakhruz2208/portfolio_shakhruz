import React from 'react';
import line from '../images/separatorBlack 1.png';

const About = () => {
  return (
    <div id='2' className='about min-h-screen w-full bg-gray-300 font-mono py-20 px-6 flex flex-col items-center justify-center'>
      
    
      <div className='w-full max-w-4xl flex flex-col items-center'>
       
        <button className='animate-bounce py-4 px-10 border-4 border-black text-xl font-bold font-serif uppercase mb-12'>
          About Me
        </button>

       
        <div className='w-full mb-12 pt-5'>
          <h1 className='text-center text-gray-600 text-lg md:text-xl leading-relaxed'>
            I am a passionate Frontend Developer who enjoys creating modern, responsive, and user-friendly websites. 
            I focus on writing clean code and building beautiful interfaces using modern web technologies.
          </h1>
        </div>

    
        <img className='  animate-pulse max-w-full' src={line} alt="separator" />

        
        <div className='flex flex-col md:flex-row gap-13 md:gap-30 w-full pt-30'>
          <div className='flex-1 text-center'>
              <h1 className='font-bold text-2xl md:text-3xl mb-4 uppercase'>Design</h1>
              <p className='text-gray-700 text-base md:text-lg'>
                I design clean and modern user interfaces with a strong focus on user experience. 
                I enjoy creating visually appealing layouts that are simple and effective.
              </p>
          </div>
          
          <div className='flex-1 text-center'>
              <h1 className='font-bold text-2xl md:text-3xl mb-4 uppercase'>Development</h1>
              <p className='text-gray-700 text-base md:text-lg'>
                I develop fast and responsive websites using technologies like HTML, CSS, JavaScript, React, and Next.js. 
                My goal is to build high-quality web applications.
              </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
