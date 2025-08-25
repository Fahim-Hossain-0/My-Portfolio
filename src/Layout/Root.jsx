import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import BackgroundAnimation from './Components/BackgroundAnimation';

const Root = () => {
  return (
    <>
      <header id="home" className="w-[95%] mx-auto scroll-mt-40">
        <Navbar />
      </header>
    <section className='mt-44 '>
        <Banner />

    </section>
      <main className=" py-20 my-20 bg-gradient-to-r from-[#1B1033] via-[#3A2B63] to-[#1B1033] rounded">
       
        <section id="about" className=" scroll-mt-34">
          
          <AboutMe />
        </section>
        <section id="services" className="scroll-mt-4">
          <Services />
        </section>
        
        
      </main>

      <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
      <section id="contact" className="scroll-mt-10 ">
          <Contact />
        </section>
    </>
  );
};

export default Root;
