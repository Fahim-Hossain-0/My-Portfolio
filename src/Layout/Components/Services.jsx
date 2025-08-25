import React from "react";
import Slider from "react-slick";
import { FaLaptopCode, FaUserLock, FaUserShield, FaServer } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const services = [
    {
      title: "Web Design",
      desc: "I create responsive, modern, and visually appealing websites that adapt to all devices. My focus is on clean layouts, accessibility, and usability.",
      color: "from-[#9B2CFD] to-[#C084FC]",
      icon: <FaLaptopCode size={40} />,
    },
    {
      title: "Authentication",
      desc: "I implement secure user authentication systems using Firebase Auth, JWT, or OAuth with social sign-ins like Google & GitHub.",
      color: "from-[#2C224F] to-[#3A2B63]",
      icon: <FaUserLock size={40} />,
    },
    {
      title: "Authorization",
      desc: "I build robust role-based authorization systems that control what users can see and do within an application.",
      color: "from-[#3A2B63] to-[#9B2CFD]",
      icon: <FaUserShield size={40} />,
    },
    {
      title: "Backend Development",
      desc: "I design and develop backend systems using Node.js, Express.js, and MongoDB with secure APIs & scalable performance.",
      color: "from-[#2C224F] via-[#3A2B63] to-[#9B2CFD]",
      icon: <FaServer size={40} />,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10">
      {/* Gradient line */}
      <div className="flex items-center justify-center mb-12">
        <hr className="h-[2px] w-full my-12 border-0 rounded-full 
          bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-80" />
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Services
      </h2>
      <p className="text-center text-gray-400 mb-10 text-sm sm:text-base">
        Transforming ideas into intuitive digital experiences
      </p>

      {/* Carousel */}
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="px-2 sm:px-3">
            <div
              className={`rounded-2xl p-4 sm:p-6 h-auto sm:h-72 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 bg-gradient-to-b ${service.color}`}
            >
              <div className="text-white mb-4 text-3xl sm:text-4xl">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
