import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

function Navbar() {
  const items = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "About"
    },
    {
      id: 3,
      name: "Skills"
    },
    {
      id: 4,
      name: "Project"
    }, {
      id: 1,
      name: "Contact"
    }
  ]
  const [show, setshow] = useState(false)
  return (
    <div className='flex px-4 justify-between items-center w-full h-20 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl heading ml-2'>Nishita</h1>
      </div>

      <ul className='hidden md:flex'>
        {
          items.map((items) => {
            return (

              <li key={items.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                <Link to={items.name} smooth duration={600}>{items.name}</Link>
                </li>
            )
          })
        }

      </ul>

      <div className='cursor-pointer pr-4 z-10 md:hidden text-gray-500' onClick={() => setshow(!show)}>
        {
          show ? <FaTimes size={30} /> : <FaBars size={30} />
        }
      </div>
      {
        show && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {
            items.map((items) => {
              return (

                <li key={items.id} className='py-4 cursor-pointer capitalize text-3xl'>
                  <Link onClick={() => setshow(!show)} to={items.name} smooth duration={600}>{items.name}</Link>
                  </li>
              )
            })
          }
        </ul>
      }

    </div>
  )
}

export default Navbar