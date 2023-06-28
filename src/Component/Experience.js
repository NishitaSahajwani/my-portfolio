import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'

function Experience() {
  const items =[
    {
      id:1,
      src:p1,
      text:"Admin Panel",
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:p4,
      text:"Tribute Page",
      style:'shadow-purple-500'
    },
    {
      id:3,
      src:p3,
      text:"Todo App",
      style:'shadow-yellow-500'
    },
 
    {
      id:4,
      src:p2,
      text:"Jewlery shop software",
      style:'shadow-blue-500'
    },
    {
      id:5,
      src:p5,
      text:"List of github users",
      style:'shadow-cyan-600'
    },
    {
      id:6,
      src:p6,
      text:"Calculator",
      style:'shadow-gray-500'
    },
  ]
  return (
    <div name='Project' className='w-full h-auto bg-gradient-to-b from-gray-800 to-black'>
      
    <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-auto text-white flex flex-col'>

      <div className=''>
        <p className='text-4xl inline font-bold border-b-4 border-gray-500'>Projects</p>
        <p className='py-6 text-2xl'>Here are some projects I've worked on</p>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-20 text-center py-20 px-12 sm:px-0'>
      {
            items.map((value)=> {
              return(
                <>
        <div >
         
                <img className='w-full mx-auto rounded-md hover:scale-105 duration-300' src={value.src}></img>
                <p className='pt-5'>{value.text}</p>
                </div>
                </>
              )
            })
          }
        
      </div>

    </div>
  </div>
  )
}

export default Experience