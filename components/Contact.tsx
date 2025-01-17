"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
export const Contact = () => {

    return (
        <section id='contact' className='overflow-clip py-32 text-white max-w-[1200px] mx-auto px-4'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap-16'
            >
                {/* Title */}
                <div className='space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-7xl font-bold text-gray-300'
                    >
                        Get in <span className='text-purple-500'>
                            Touch
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='glass p-8 rounded-2xl space-y-8'
                    >
                        {/* Contact Info */}
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>
                                Phone
                            </p>
                            <a href="telephone:0342422979" className='text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'>
                                0342422979
                                <span className='text-gray-500'>
                                </span>
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>
                                Email
                            </p>
                            <a href="huynhhai13979@gmail.com" className='text-3xl lg:text-4xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                                huynhhai13979@gmail.com
                                <span className='text-gray-500'>
                                </span>
                            </a>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Address</p>
                            <address className='text-xl not-italic leading-relaxed'>
                                Ấp Phú Bưng, Xã Phú Chánh, Thị Xã Tân Uyên, Tỉnh Bình Dương.
                            </address>
                        </div>
                    </motion.div>
                </div>
                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
                >
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.9442621231237!2d106.69859700423066!3d11.079343823623486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174cf965c750bf3%3A0xbb509fed0cdad12b!2zxJDGsOG7nW5nIMSQWCAtIDMwLzI3IOG6pHAgUGjDuiBCxrBuZywgUGjDuiBDaMOhbmgsIFTDom4gVXnDqm4sIELDrG5oIETGsMahbmcsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1736737050103!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                        width='100%'
                        height='100%'
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'
                    >
                    </iframe>
                </motion.div>
            </motion.div>
            <div className='my-10'>
            <motion.div
                initial={{ opacity: 0, y: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              
            >
            <Link 
                href="/sendmessage" 
                className="px-12 py-5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
                Searching Now
            </Link>
            </motion.div>
            </div>
        </section>
    )
}