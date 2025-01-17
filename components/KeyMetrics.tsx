"use client"
import React from 'react'
import { motion, useInView } from 'framer-motion'
const metrics = [
    {
        id: 1,
        value: 'Few Months',
        label: "Experience Internship at company",
        description: "I have been working at company for few months"
    },
    {
        id: 2,
        value: 100,
        label: "Over 5 Projects",
        description: "I have been created over 5 projects"
    },
    {
        id: 3,
        value: '1000+',
        label: "Times of Experience to create projects",
        description: "I have been doing this for 1000+ times"
    },
    {
        id: 4,
        value: "10000000+",
        label: "Hours of studying",
        description: "I have been studying for 10000000+ hours"
    },
    {
        id: 5,
        value: '10000+',
        label: "understading customer needs",
        description: "I have been making projects for 10000+ customers"
    },
]

export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className=' px-4 py-32 text-white glass'
            id='about'
        >
            <div className='container mx-auto '>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className='text-6xl font-bold mb-12 '
                >
                    Key Metrics
                </motion.h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {metrics.map((metrics, index) => (
                        <motion.div
                            key={metrics.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            className='flex flex-col'
                        >
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                                transition={{ duration: 0.6, delay: 0.1 + index * 0.4, type: "spring", }}
                                className='text-5xl font-bold text-purple-300 mb-2'
                            >
                                {metrics.value}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1, }}
                                className='text-xl font-semibold mb-2'
                            >
                                {metrics.label}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1, }}
                                className='text-xl font-semibold mb-2'
                            >
                                {metrics.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

