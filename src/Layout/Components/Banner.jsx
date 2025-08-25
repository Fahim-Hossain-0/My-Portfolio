import React from "react";
import bannerImage from "../../assets/banner-img.png";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-16">
        {/* Left side (text) */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.p
            animate={{ x: [0, 25, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="font-light mb-6 text-base sm:text-lg"
          >
            WELCOME TO CODE WORLD !
          </motion.p>

          <p className="text-xl sm:text-2xl font-medium">
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
              Hi,
            </span>{" "}
            <span className="font-bold">I'm</span> Fahim Hossain
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Web Developer
          </h1>

          <p className="text-base sm:text-lg opacity-80 leading-relaxed">
            I’m a passionate web developer with expertise in HTML, CSS,
            JavaScript, and React. I love building responsive, user-friendly
            applications that solve real problems. <br className="hidden sm:block" />
            Constantly exploring new technologies, I enjoy turning ideas into
            functional designs. <br className="hidden sm:block" />
            My focus is on clean code, performance, and creating impactful
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a
              href="#projects"
              className="bg-[#e0e4e8] text-black font-medium rounded-2xl px-5 py-3 hover:bg-gray-300 hover:text-gray-900 transition"
            >
              My Projects
            </a>

            <a
              className="border border-[#e0e4e8] text-white font-medium rounded-2xl px-6 py-3 inline-flex items-center gap-2 hover:bg-gray-200 hover:text-gray-900 transition cursor-pointer"
            >
              Download CV <HiDownload />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://github.com/Fahim-Hossain-0"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-white bg-[#3A2B63] p-2 rounded-full text-4xl hover:scale-110 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-hossain0/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-white bg-[#3A2B63] p-2 rounded-full text-4xl hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebook className="text-white bg-[#3A2B63] p-2 rounded-full text-4xl hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Right side (image) */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img
            src={bannerImage}
            alt="Banner"
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
