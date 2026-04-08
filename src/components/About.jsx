import React from 'react';

const About = () => {
  return (
    <div id='2' className='about contact h-auto w-full bg-gradient-to-br from-slate-900 to-slate-800 text-indigo-400 font-mono p-5 md:p-10 flex flex-col items-center'>
      
    
      <div className='w-full max-w-4xl flex flex-col items-center'>
       
        <button className='animate-bounce cursor-none mt-15 py-5 px-15 border-4 text-xl font-bold font-serif border-indigo-950 text-indigo-400 shadow-lg shadow-indigo-800'>
          About Me
        </button>

       
        <div className='w-full mb-12 pt-5'>
          <h1 className='text-center text-indigo-600 text-lg md:text-xl leading-relaxed'>
            I am a passionate Frontend Developer who enjoys creating modern, responsive, and user-friendly websites. 
            I focus on writing clean code and building beautiful interfaces using modern web technologies.
          </h1>
        </div>

  

        
        <div className='flex flex-col md:flex-row gap-13 md:gap-30 w-full pt-20'>
          <div className='flex-1 text-center'>
              <h1 className='font-bold text-2xl md:text-3xl mb-4 uppercase'>Design</h1>
              <p className='text-indigo-700 text-base md:text-lg'>
                I design clean and modern user interfaces with a strong focus on user experience. 
                I enjoy creating visually appealing layouts that are simple and effective.
              </p>
          </div>
          
          <div className='flex-1 text-center'>
              <h1 className='font-bold text-2xl md:text-3xl mb-4 uppercase'>Development</h1>
              <p className='text-indigo-700 text-base md:text-lg'>
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
