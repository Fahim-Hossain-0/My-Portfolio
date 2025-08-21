import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Projects from './Components/Projects';


const Root = () => {
    return (
        <>
        <header  >

            <Navbar></Navbar>
            <Banner></Banner>
        </header>
        <main className='bg-gradient-to-r from-[#1B1033] via-[#3A2B63] to-[#1B1033]'>
            <section>
                <AboutMe></AboutMe>
            </section>
            <section>
                <Services></Services>
            </section>
            <section>
                <Projects></Projects>
            </section>
        </main>
        </>
    );
};

export default Root;