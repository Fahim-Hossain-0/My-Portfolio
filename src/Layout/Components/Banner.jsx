import React from 'react';
import bannerImage from '../../assets/banner-img.jpg'; // Adjust the path as necessary
const Banner = () => {
    return (
        <div>
           <div>
                <div>
                    <p>WELCOME TO CODE WORLD</p>
                    <p> <span>Hi,</span> I'm Fahim Hossain </p>
                    <h1>Full Stake Web Developer</h1>
                    <p>I’m a passionate web developer with expertise in HTML, CSS, JavaScript, and React. I love building responsive, user-friendly applications that solve real problems. Constantly exploring new technologies, I enjoy turning ideas into functional designs. My focus is on clean code, performance, and creating impactful digital experiences.</p>
                    <div>
                        <button>My projects</button>
                        <button>My Resume</button>
                    </div>
                    <div>
                        {/* icon */}
                    </div>
                </div>
                <div>

                    <img src={bannerImage} alt="" />
                </div>

            </div> 
            {/* icon/ */}
        </div>
    );
};

export default Banner;