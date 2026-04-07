import React from 'react';
import { BsJavascript, BsTypescript } from 'react-icons/bs';
import { DiReact, DiSass, DiMongodb } from 'react-icons/di';
import { GrGithub } from 'react-icons/gr';
import { FiFigma } from 'react-icons/fi';
import { RiHtml5Fill, RiNextjsFill } from 'react-icons/ri';
import { TiCss3 } from 'react-icons/ti';

const Skills = () => {
  const knownSkills = [
    { icon: <RiHtml5Fill />, name: 'HTML5' },
    { icon: <TiCss3 />, name: 'CSS3' },
    { icon: <DiSass />, name: 'SASS' },
    { icon: <BsJavascript />, name: 'JAVASCRIPT' },
    { icon: <DiReact />, name: 'REACT' },
    { icon: <GrGithub />, name: 'GIT HUB' },
    { icon: <FiFigma />, name: 'FIGMA' },
  ];

  const learningSkills = [
    { icon: <RiNextjsFill />, name: 'NEXT JS' },
    { icon: <BsTypescript />, name: 'TYPESCRIPT' },
    { icon: <DiMongodb />, name: 'MONGODB' },
  ];

  return (
    <div id='3' className='skill w-full h-auto py-16 bg-gray-300 font-mono px-6 flex flex-col items-center'>
      <div className='w-full max-w-5xl flex justify-center mb-12'>
  <button className='animate-bounce cursor-none py-5 px-15 border-4 text-xl font-bold font-serif'>
    SKILLS
  </button>
</div>

      <div className='w-full max-w-5xl'>
        <h1 className='font-bold text-3xl mb-10 text-center md:text-left uppercase'>Using know:</h1>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center md:justify-items-start mb-20'>
          {knownSkills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center md:items-start group'>
              <div className='text-7xl md:text-8xl transition-all duration-300 p-2 rounded-2xl group-hover:shadow-xl group-hover:shadow-gray-500 bg-gray-300'>
                {skill.icon}
              </div>
              <h1 className='mt-3 text-lg md:text-xl font-semibold uppercase'>{skill.name}</h1>
            </div>
          ))}
        </div>

        <h1 className='font-bold text-3xl mb-10 text-center md:text-left uppercase'>Learning:</h1>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center md:justify-items-start'>
          {learningSkills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center md:items-start group'>
              <div className='text-7xl md:text-8xl transition-all duration-300 p-2 rounded-2xl group-hover:shadow-xl group-hover:shadow-gray-500'>
                {skill.icon}
              </div>
              <h1 className='mt-3 text-lg md:text-xl font-semibold uppercase'>{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
