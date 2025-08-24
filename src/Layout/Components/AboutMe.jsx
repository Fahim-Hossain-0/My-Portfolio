import React from "react";

// import jsIcon5 from "../../assets/icons/icons8-javascript-48.png"
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import react from "../../assets/icons/react.png";
import tailwind from "../../assets/icons/tailwindcss.png"; 
import node from "../../assets/icons/nodejs.png";
import express from "../../assets/icons/express.png"; 
import mongodb from "../../assets/icons/mongodb.png";
import javaScript from "../../assets/icons/javascript.png";
const AboutMe = () => {

  return (
    <>
      
      <div className="">
        <div className="container mx-auto flex flex-col justify-center items-center bg-gradient-to-r from-[#2C224F] to-[#2C224F] rounded-4xl px-20 py-20">
          <div className=" text-center ">
            <h1 className="text-5xl font-medium">About me</h1>
            <p className="mt-8 font-semibold text-lg text-gray-300  ">
              Hi, I’m Fahim Hossain, a passionate Full-Stack Web Developer with
              over 1 years of experience building dynamic, user-friendly, and
              scalable web applications. I specialize in crafting responsive
              interfaces with React, Tailwind CSS, and modern frontend tools,
              while also developing powerful backends using Node.js, Express,
              and MongoDB. I enjoy working across the entire stack—from
              designing intuitive user experiences to building secure APIs and
              managing databases. My focus is on writing clean, maintainable
              code, solving real-world problems, and continuously learning to
              stay ahead in the fast-moving tech world. Beyond coding, I love
              exploring new technologies, improving my skills, and creating
              impactful projects that make a difference. My ultimate goal is to
              grow as a developer while helping businesses and individuals bring
              their ideas to life through the web.
            </p>
          </div>

         
           <div className="flex flex-wrap justify-center items-center mt-8 gap-4">
          <img src={html} alt="" className="w-[8%]"/>
          <img src={css} alt="" className="w-[8%]"/>
           <img src={tailwind} alt="" className="w-[8%]"/>
           <img src={javaScript} alt="" className="w-[8%]" />
          <img src={react} alt="" className="w-[8%]"/>         
          <img src={node} alt="" className="w-[8%]"/>
          <img src={express} alt="" className="w-[8%]"/>
          <img src={mongodb} alt="" className="w-[8%]"/>
         
           
          </div>
         </div>
        </div>
      
    </>
  );
};

export default AboutMe;
