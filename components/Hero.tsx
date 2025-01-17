"use client"
import Image from 'next/image';
import ProfilePic from "../assets/ProfilePic.png";
import object1 from "../assets/obj1.png";
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, animate, motion } from "framer-motion";
import { useEffect } from 'react';
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [])
    // here is code for background animation
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px${color}`
    // create animaiton background color for homepage(the background auto change color)
    return (
        <motion.section
            style={{
                backgroundImage
            }}
            id='about'
            className='relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200'
        >
            <div className='z-10 flex flex-col items-center'  >
                {/* i create a form for some button */}
                {/* <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm '>
                    Open for work</span> */}

                <span> <h1 className='text-white/40 text-5xl font-black'>Hi, i am</h1></span>
                <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
                text-transparent text-5xl md:text-7xl 
                '>
                    Huỳnh Minh Hải
                </h1>
                <div>
                    {/* add a picture  */}
                    <Image src={ProfilePic}
                        alt={'profile pic'}
                        width={250}
                    />
                    {/* create a frame for write something  */}
                    <div className='flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4'>
                        {/* add img */}
                        <Image
                            src={object1}
                            alt='object1'
                            width={30}
                        />
                        <Image
                            src={object1}
                            alt='object1'
                            width={30}
                            className='rounded-2xl mx-auto'
                        />
                        <Image
                            src={object1}
                            alt='object1'
                            width={30}
                            className='rounded-2xl mx-auto'
                        />
                        <p className='font-medium'>80+ Talents
                        </p>
                    </div>
                </div>
                <p className='my-6 max-w-xl text-center'>Front-end developer based in EIU , with a passion for creating user-friendly and visually appealing web applications.</p>
                <div className='flex justify-center mt-10'>
                    <motion.button
                        onClick={() => window.open("https://drive.google.com/file/d/1dm164UcFpUIosPMhKlQ6lkcZu36-m_04/view?usp=sharing", "_blank")}

                        rel="noopener noreferrer"
                        style={{
                            border,
                            boxShadow
                        }}
                        whileHover={{
                            scale: 1.015
                        }}
                        whileTap={{
                            scale: 0.985
                        }}
                        className='flex w-fit items-center gap-2 rounded-full px-4 py-2'
                    >
                        Download CV
                        {/* create Arrow icon */}
                        <FiArrowRight />
                    </motion.button>
                </div>
            </div>
            {/* create button have many functions */}
            <div className='bg-circle-container'>
                <div className='bg-circle-background'></div>
                <div className='bg-circle'></div>
            </div>
        </motion.section>
    )
}   