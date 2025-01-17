"use client"
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Project', path: '#portfolio' },
    { title: 'Stack', path: '#stack' },
    { title: 'Contact', path: '#contact' },
  

]


export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }






    return (
        <div className='z-50 fixed flex justify-center w-full text-white font-bold'>
            <div className='border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
          hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto '>
                <ul className='flex flex-row p-2 space-x-8'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className='transform hover:text-white/50 transition-all duration-300 ease-in-out  '>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* to start create function when click on to create dau 3 gach */}
            <div onClick={toggleNav} className='md:hidden absolute top-5 right-14 border rounded
            z-50 text-white/70 border-white/70 p-2'>
                {/* Create responsive like button to click or x */}
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                {/* to show again 4 button to click on  */}
                <div className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 
                ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                    <ul className='flex flex-col items-center justify-center space-y-8 h-full'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} onClick={closeNav} className='text-5xl '>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
} 