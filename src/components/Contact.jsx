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
    <div id='5' className='contact h-auto w-full bg-gray-300 font-mono p-10 '>
      <button className='animate-bounce cursor-none ml-150 mt-15 py-5 px-15 border-4 text-xl font-bold font-serif'>CONTACT</button>
      <div>
        <h1 className='text-center text-gray-600 pt-10'>Have a project in mind or a complex problem that needs a clean solution? I’m always looking for opportunities to <br /> write great code and build seamless interfaces. Let’s connect and make it happen.</h1>
      </div>
      <img className='pl-150 pt-14 animate-pulse' src={line} alt="" />
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-7 pt-10 pl-120 '>
        <input name='name' placeholder='Enter your name*' type="text" className=' p-3 w-110 h-12 border-l-4 border-b-4 focus:shadow-2xl focus:shadow-gray-800 transition-shadow ease-in-out duration-300 focus:outline-none ' required />
        <input name='email' placeholder='Enter your email*' type="email" className=' p-3 w-110 h-12 border-l-4 border-b-4 focus:shadow-2xl focus:shadow-gray-800 transition-shadow ease-in-out duration-300 focus:outline-none ' required />
        <input name='number' placeholder='Phone number*' type='tel' className=' p-3 w-110 h-12 border-l-4 border-b-4 focus:shadow-2xl focus:shadow-gray-800 transition-shadow ease-in-out duration-300 focus:outline-none ' required />
        <textarea
        name='message'
    id="message"
    rows="4"
    required
    placeholder="Your Message*"
    className="resize-none p-3 w-110 h-35 border-l-4 border-b-4 focus:shadow-2xl focus:shadow-gray-800 transition-shadow ease-in-out duration-300 focus:outline-none"
  />

  <button 
  type='submit' 
  disabled={loading} 
  className={`w-50 h-13 border-r-4 border-l-4 transition-all ease-in-out duration-300 font-bold ml-30 text-xl flex items-center justify-center gap-2 
    ${loading ? 'opacity-70 cursor-not-allowed bg-gray-400' : 'hover:shadow-lg hover:shadow-gray-800'}`}
>
  {loading ? (
    <>
      <VscLoading className="animate-spin text-2xl" /> 
      SENDING...
    </>
  ) : (
    'SUBMIT'
  )}
</button>
      </form>
    </div>
  )
}

export default Contact
