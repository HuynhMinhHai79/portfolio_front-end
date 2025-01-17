"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import project1 from '@/assets/proj1.png'
import project2 from '@/assets/proj2.png'
import project3 from '@/assets/proj3.png'
import { section } from 'framer-motion/client'
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion'



const projects = [
    {
        id: 1,
        month: 'October-December',
        year: 2024,
        title: 'Online Movie Shop',
        description: ' Deploy a reliable and secure user authentication system that allows users to log in via Google or GitHub accounts while integrating payment mechanisms like MoMo, Visa, MasterCard, or JCB to ensure privacy and secure transactions.',
        programmingLanguage: 'React, Tailwind, Next.js, TypeScript, Node.js, Express, MongoDB, Stripe,HTML/CSS',
        role: 'Frontend Developer',
        result: ': Successfully implemented a responsive and intuitive UI, integrated user authentication, and optimized performance to deliver a smooth streaming experience.',
        image: project1
    },
    {
        id: 2,
        month: 'July-October',
        year: 2024,
        title: 'CAMPUS SECURITY STAFF MANAGEMENT SYSTEM',
        description: 'This system aims to simplify duty scheduling, leave requests, and monthly salary calculation.',
        programmingLanguage: 'Java,JavaSwing,Tool:Netbeans,Trello.',
        role: 'UI/UX Developer',
        result: 'Developed an application to optimize duty scheduling, leave requests, and monthly salary calculations for security staff.',
        image: project2
    },
    {
        id: 3,
        month: 'October-November',
        year: 2024,
        title: 'Online Movie Application(Mobile)',
        description: 'Create an engaging and interactive movie website with seamless functionality and an attractive design.',
        programmingLanguage: 'React, Tailwind, Next.js, TypeScript, Node.js, Express, MongoDB, Stripe',
        role: 'Frontend Developer',
        result: 'Strengthen programming skills through hands-on development and gain experience in building user-friendly features like search, authentication, and multimedia playback.',
        image: project3
    },
]
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    return (
        <motion.section
            style={{ backgroundImage }}
            id='portfolio' className='py-32 text-white'>
            <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
                <div>
                    <h2 className='text-6xl font-bold mb-10'>Selected
                        <span className='text-gray-400'> Projects</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className='cursor-pointer mb-8 group'
                        >
                            <p className='text-gray-400 text-lg mb-2'> {project.month}-{project.year}  </p>
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                    ${selectedProject.id === project.id ? 'text-purple-400' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className='border-b-2 border-purple-400 my-4'></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className='text-gray-400 transition-all duration-500 ease-in-out'>
                                    {project.description}
                                    <br /> {/* Thêm line break */}
                                    <span className='block mt-2 text-gray-400 transition-all duration-500 ease-in-out'>
                                        Programming Language: {project.programmingLanguage}
                                    </span>
                                    <br />
                                    <span className='block mt-2 text-gray-400 transition-all duration-500 ease-in-out'>
                                        Role: {project.role}
                                    </span>
                                    <br />
                                    <span className='block mt-2 text-gray-400 transition-all duration-500 ease-in-out'>
                                        Result: {project.result}
                                    </span>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className='rounded-xl showdow-lg transition-opacity duration-500 ease-in-out'
                    width={800}
                    height={450}
                />
            </div>
        </motion.section>
    )
}
