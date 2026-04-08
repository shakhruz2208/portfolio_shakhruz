import React, { useRef, useState } from 'react'
import line from '../images/separatorBlack 1.png'
import { toast } from 'react-toastify';
import  emailjs  from '@emailjs/browser';
import { VscLoading } from 'react-icons/vsc';

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const sendEmail = (e) =>{
    e.preventDefault();
    setLoading(true)
     
    emailjs.sendForm('service_a2pyfzp', 'template_1iugu5a', form.current, 'BiUb-IEQWCnVOtvr1')
      .then(() => {
        toast.success("Message sent successfully! 🚀");
        form.current.reset(); 
      })
      .catch(() => {
        toast.error('Oops! Something went wrong. ❌')
      })
      .finally(()=>{
        setLoading(false)
      })
  };

  return (
    <div id='5' className='contact h-auto w-full bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200 font-mono p-5 md:p-10 flex flex-col items-center'>
      
      <button className='animate-bounce cursor-none mt-15 py-5 px-15 border-4 text-xl font-bold font-serif border-indigo-950 text-indigo-400 shadow-lg shadow-indigo-800'>
        CONTACT
      </button>

      <div className='max-w-4xl'>
        <h1 className='text-center text-indigo-300 pt-10 px-4'>
          Have a project in mind or a complex problem that needs a clean solution? I’m always looking for <br className='hidden md:block' /> opportunities to  write great code and build seamless interfaces. Let’s connect and make it happen.
        </h1>
      </div>

      
      

      
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-7 pt-20 px-4 items-center text-slate-200 w-full'>
        
        <input name='name' placeholder='Enter your name*' type="text" 
          className='p-3 w-full max-w-[440px] h-12 border-l-4 border-l-indigo-500 border-b-indigo-500 border-b-4 focus:shadow-2xl focus:shadow-indigo-600 transition-shadow ease-in-out duration-300 focus:outline-none cursor-none' required />
        
        <input name='email' placeholder='Enter your email*' type="email" 
          className='p-3 w-full max-w-[440px] h-12 border-l-4 border-b-4 border-l-indigo-500 border-b-indigo-500  focus:shadow-2xl focus:shadow-indigo-600 transition-shadow ease-in-out duration-300 focus:outline-none cursor-none' required />
        
        <input name='number' placeholder='Phone number*' type='tel' 
          className='p-3 w-full max-w-[440px] h-12 border-l-4 border-b-4 border-l-indigo-500 border-b-indigo-500  focus:shadow-2xl focus:shadow-indigo-600 transition-shadow ease-in-out duration-300 focus:outline-none cursor-none' required />
        
        <textarea
          name='message'
          id="message"
          rows="4"
          required
          placeholder="Your Message*"
          className="resize-none p-3 w-full max-w-[440px] h-35 border-l-4 border-l-indigo-500 border-b-indigo-500  border-b-4 focus:shadow-2xl focus:shadow-indigo-700 transition-shadow ease-in-out duration-300 focus:outline-none cursor-none"
        />

        
        <button 
          type='submit' 
          disabled={loading} 
          className={`w-50 h-13 border-r-4 border-l-4 border-l-indigo-500 border-r-indigo-500 text-indigo-300  transition-all ease-in-out duration-300 font-bold text-xl flex items-center justify-center gap-2 
            ${loading ? 'opacity-70 cursor-not-allowed text-indigo-300 bg-indigo-950' : 'hover:shadow-lg hover:shadow-indigo-800'}`}
        >
          {loading ? (
            <><VscLoading className="animate-spin text-2xl text-indigo-400" /> SENDING...</>
          ) : (
            'SUBMIT'
          )}
        </button>
      </form>
    </div>
  )
}

export default Contact
