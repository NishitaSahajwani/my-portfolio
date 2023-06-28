import React from 'react'

function Skills() {
  const items =[
    {
      id:1,
      src:'html.png',
      text:"HTML",
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:'css.png',
      text:"CSS",
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:'javaS.png',
      text:"JavaScript",
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:'bootstrap.png',
      text:"Bootstrap",
      style:'shadow-purple-500'
    },
    {
      id:5,
      src:'R.png',
      text:"React",
      style:'shadow-cyan-600'
    },
    {
      id:6,
      src:'github.png',
      text:"GitHub",
      style:'shadow-gray-500'
    },
  ]
  return (
    <div name='Skills' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 '>
      
      <div className='max-w-screen-lg p-4 mx-auto justify-center w-full h-full text-white flex flex-col'>

        <div className=''>
          <p className='text-4xl inline font-bold border-b-4 border-gray-500'>Skills</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-16 text-center py-20 px-12 sm:px-0'>
        {
              items.map((value)=> {
                return(
                  <>
          <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${value.style}`}>
           
                  <img className='w-20 mx-auto' src={value.src}></img>
                  <p className={value.id == 5 ? "py-3" : "py-1"}>{value.text}</p>
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

export default Skills