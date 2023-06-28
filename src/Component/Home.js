import React from 'react'
import { BiCaretRight } from 'react-icons/bi'
import {Link} from 'react-scroll'
function Home() {
    return (
        <div name='Home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex pt-24 flex-col items-center justify-between h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl md:text-7xl font-bold text-white'>I'm a React.js Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>I am a dedicated and motivated Frontend Developer with a strong passion for creating exceptional user experiences through innovative web applications.
                       </p>
                    <div>
                        <button className='group text-white flex items-center my-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md px-6 py-3 w-fit'>
                        <Link to="Contact" smooth duration={700}>Hire me</Link>
                            <span className='group-hover:rotate-90 duration-200'>
                                <BiCaretRight size={20} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src='nishita.png' className='rounded-3xl mx-auto w-2/4 mt-[-20px] bg-gradient-to-r from-cyan-500 to-blue-500 md:w-full' ></img>
                </div>
            </div>
        </div>
    )
}

export default Home