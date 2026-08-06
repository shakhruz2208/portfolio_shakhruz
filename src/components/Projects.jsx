import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa'

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "Edu-Board Platform",
      description: "A modern dashboard and assignment management system designed for students and teachers.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://edu-board-club.vercel.app/register",
      githubLink: "https://github.com/shakhruz2208/EduBoard",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description: "An online shopping application featuring a product catalog, cart system, and clean UI.",
      tags: ["React", "Context API", "Tailwind CSS"],
      liveLink: "https://project-team3-six.vercel.app/",
      githubLink: "https://github.com/shakhruz2208/project-team3",
    },
    {
      id: 3,
      title: "Weather Application",
      description: "A web application providing real-time weather information and forecasts for any city.",
      tags: ["JavaScript", "Weather API", "CSS"],
      liveLink: "https://weather-app-seven-zeta-71.vercel.app/",
      githubLink: "https://github.com/shakhruz2208/Weather-App",
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A productive tool to organize daily tasks, set priorities, and track your working progress.",
      tags: ["React", "Tailwind CSS", "LocalStorage"],
      liveLink: "https://phone-website-5e67.vercel.app/",
      githubLink: "https://github.com/shakhruz2208/phone-website",
    },
  ]

  return (
    <div id='4' className='projects min-h-screen w-full bg-gradient-to-br from-slate-900 via-[#0a0f29] to-slate-900 px-6 sm:px-12 py-20 flex flex-col justify-center'>
      <div className='max-w-5xl mx-auto w-full'>
        
        <div className='text-center mb-16'>
          <div className='inline-block mb-3 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-purple-400 text-xs font-bold tracking-widest uppercase shadow-inner'>
            PORTFOLIO
          </div>
          <h2 className='text-3xl sm:text-5xl font-extrabold text-white tracking-tight'>
            Featured <span className='bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 bg-clip-text text-transparent'>Projects</span>
          </h2>
          <p className='text-indigo-300/80 text-sm sm:text-base mt-3 max-w-xl mx-auto'>
            Explore some of the practical and engaging projects I have built recently.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projectsList.map((project) => (
            <div 
              key={project.id}
              className='relative bg-[#0d153f]/50 backdrop-blur-xl border border-indigo-900/50 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group overflow-hidden'
            >
              <div className='absolute -right-12 -top-12 w-32 h-32 bg-indigo-600/15 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500'></div>

              <div>
                <div className='flex items-center justify-between mb-6 relative z-10'>
                  <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600/40 to-[#0e1b52] border border-indigo-700/40 flex items-center justify-center text-indigo-300 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all duration-300 shadow-lg'>
                    <FaFolderOpen size={22} />
                  </div>
                  <div className='flex items-center gap-2 bg-slate-950/40 p-1.5 rounded-xl border border-indigo-900/40'>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='text-indigo-300 cursor-none hover:text-white transition-colors p-2 rounded-lg hover:bg-indigo-900/50'
                      title="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='text-indigo-300 cursor-none hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-indigo-900/50'
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>

                <h3 className='text-white font-bold text-2xl mb-3 group-hover:text-emerald-300 transition-colors relative z-10'>
                  {project.title}
                </h3>
                <p className='text-slate-400 text-sm sm:text-base leading-relaxed mb-8 relative z-10'>
                  {project.description}
                </p>
              </div>

              <div className='relative z-10 pt-4 border-t border-indigo-900/40'>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className='text-xs font-medium px-3 py-1 rounded-xl bg-indigo-950/80 text-indigo-300 border border-indigo-800/40 shadow-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects