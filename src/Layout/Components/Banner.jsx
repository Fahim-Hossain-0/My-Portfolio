import React from 'react';
import bannerImage from '../../assets/banner-img.png'; // Adjust the path as necessary
const Banner = () => {
    return (
        <div className='container mx-auto'>
           <div className='flex justify-between items-center '>
                <div className=''>
                    <p className='font-light mb-10'>WELCOME TO CODE WORLD</p>
                    <p className='text-2xl font-medium'> <span className='text-6xl font-extrabold'>Hi,</span><span className='font-bold'>I'm</span> Fahim Hossain </p>
                    <h1 className="text-7xl font-bold mt-4 mb-4">Web Developer</h1>
                    <p className='text-lg opacity-[0.8]'>I’m a passionate web developer with expertise in HTML, CSS, JavaScript, and React. I love building responsive, user-friendly applications that solve real problems. <br /> Constantly exploring new technologies, I enjoy turning ideas into functional designs. <br /> My focus is on clean code, performance, and creating impactful digital experiences.</p>
                    <div>
                        <button>My projects</button>
                        <button>My Resume</button>
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