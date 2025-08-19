import React from 'react';
import bannerImage from '../../assets/banner-img.png';
import { motion } from "framer-motion"; 
import { HiDownload } from 'react-icons/hi';
const Banner = () => {
    return (
        <div className='container mx-auto mt-22'>
           <div className='flex justify-between items-center gap-16'>
                <div className=''>
                    {/* <motion.div animate={{ x: [0, 100, 0] }} /> */}
                    <motion.p 
  animate={{ x: [0, 25, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
  className="font-light mb-10"
>
  WELCOME TO CODE WORLD !
</motion.p>
                    <p className='text-2xl font-medium'> <span className='text-6xl font-extrabold'>Hi,</span><span className='font-bold'>I'm</span> Fahim Hossain </p>
                    <h1 className="text-7xl font-bold mt-4 mb-8">Web Developer</h1>
                    <p className='text-lg opacity-[0.8]'>I’m a passionate web developer with expertise in HTML, CSS, JavaScript, and React. I love building responsive, user-friendly applications that solve real problems. <br /> Constantly exploring new technologies, I enjoy turning ideas into functional designs. <br /> My focus is on clean code, performance, and creating impactful digital experiences.</p>
                    <div className='flex items-center gap-3 mt-6'>
                            <button className="bg-[#e0e4e8] text-black font-medium rounded-2xl px-4 py-3 hover:bg-gray-300 hover:text-gray-900 transition">My projects</button>

                            <button className="border border-[#e0e4e8] text-white font-medium rounded-2xl px-5 inline-flex items-center gap-1 py-3 hover:bg-gray-200 hover:text-gray-900 transition">Download CV <HiDownload /></button>
                        {/* <button className=''</button> */}
                    </div>
                    <div>
                        {/* icon */}
                    </div>
                </div>
                <div className=''>

                    <img src={bannerImage} alt="" className='rounded-[60px]'/>
                </div>

            </div> 
            {/* icon/ */}
        </div>
    );
};

export default Banner;