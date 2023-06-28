import React from 'react'

function About() {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
        <div className='flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full'>

        <div className='pb-8'>
            <p className='text-4xl inline font-bold border-b-4 border-gray-500'>About</p>
        </div>
    
            <p className='text-xl mt-20'>
            I am a dedicated and motivated Frontend Developer with a strong passion for creating exceptional user experiences through innovative web applications. With a solid understanding of React JS and proficiency in JavaScript, HTML, CSS, and Bootstrap, I am capable of delivering high-quality solutions that align with client requirements.
            </p>
        
            <br/>
    
            <p className='text-xl'>
            Throughout my experience at Oasis Infobyte and Digital Computing®, I have successfully collaborated with designers and developers to implement designs accurately and efficiently. I have also contributed to testing and debugging web applications, ensuring their functionality and performance.
            </p>
            </div> 
    </div>
  )
}

export default About