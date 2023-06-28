import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
function SocialLinks() {
    const links = [
        {
            id: 1,
            child:
                <>
                    LinkedIn <AiFillLinkedin size={30} />
                </>,
            href:"https://linkedin.com/in/nishitasahajwani",
            style: 'rounded-tr-md'

        },
        {
            id: 2,
            child:
            <>
                GitHub <AiFillGithub size={30} />
            </>,
        href:"https://github.com/NishitaSahajwani",
        
        },
        {
            id: 1,
            child:
            <>
                Mail <AiFillMail size={30} />
            </>,
        href:"mailto:nishitasahajwani1401@gmail.com",
        },
        {
            id: 4,
            child:
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>,
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map((link) => {
                        return(
                        <li key={link.id} className={'hidden lg:flex justify-between items-center bg-gray-500 w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 '+ "" + link.style}>
                        <a className='flex justify-between items-center text-white w-full' href={link.href} download={link.download} target='_blank'>
                            <>
                               {link.child}
                            </>
                        </a>
                    </li>

                        )
                    })
                }
             
            </ul>
        </div>
    )
}

export default SocialLinks