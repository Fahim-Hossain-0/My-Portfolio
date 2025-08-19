import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AboutMe from './Components/AboutMe';


const Root = () => {
    return (
        <>
        <header  >

            <Navbar></Navbar>
            <Banner></Banner>
        </header>
        <main>
            <section>
                <AboutMe></AboutMe>
            </section>
        </main>
        </>
    );
};

export default Root;