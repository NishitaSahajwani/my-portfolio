import React from 'react'

function Contact() {
  return (
    <div name='Contact' className='bg-gradient-to-b from-black to-gray-500 h-screen w-full'>
        <div className='text-white p-4 max-w-screen-lg h-full mx-auto justify-center flex flex-col'>
            <div className=''>
                <p className='text-4xl inline font-bold border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 text-2xl'>Submit the form below to get in touch with me</p>
            </div>
            <div className=''>
                <form className='flex flex-col w-2/4 mx-auto pt-5' action='https://getform.io/f/ec23a35c-e7b3-45d6-ba2a-b39927d65c94' method='POST'>
                     <input
                     type='text' 
                     name='name'
                     placeholder='Enter your name'
                     className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                     <input
                     type='text' 
                     name='email'
                     placeholder='Enter your email'
                     className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                     <textarea name='message' placeholder='Enter your message' className='bg-transparent border-2 p-2 rounded-md my-3 text-white focus:outline-none' rows={10}></textarea>
                     <button className='bg-gradient-to-b from-cyan-500 to-blue-500 w-max px-6 py-3 text-white rounded-md hover:scale-105 duration-300 cursor-pointer mx-auto'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact