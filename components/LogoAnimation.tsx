"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import udemy from '../assets/udemy.png'
import fiverr from '../assets/fiverr.png'
import elementor from '../assets/elementor.png'
import logitech from '../assets/logitech.png'
import oracle from '../assets/oracle.png'


const images = [

    // repeat 4 times to pop up no space time
    { src: udemy, alt: 'figma' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },
    { src: udemy, alt: 'figma' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },
    { src: udemy, alt: 'figma' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },
    { src: udemy, alt: 'figma' },
    { src: fiverr, alt: 'fiverr' },
    { src: elementor, alt: 'elementor' },
    { src: logitech, alt: 'logitech' },
    { src: oracle, alt: 'oracle' },
]
export const LogoAnimaiton = () => {
    return (
        <div className='py-8 bg-purple-200/10'>
            <div className='container mx-auto'>
                <div className='overflow-hidden
                [mask-image:linear-gradient(to right,transparent,_black 25%,_black_75%,_transparent)]'
                >
                    <motion.div
                        className='flex gap-14 flex-none pr-14'
                        animate={{
                            translateX: '-50%'
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 35,
                            ease: 'linear',
                            repeatType: 'loop'
                            // Removed repeatType as it is not a valid property for the transition object
                        }}
                    >
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                height={30}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
