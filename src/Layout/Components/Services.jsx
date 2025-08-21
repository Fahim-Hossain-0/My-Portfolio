import React from "react";
import Slider from "react-slick";
import { FaLaptopCode, FaUserLock, FaUserShield, FaServer } from "react-icons/fa";

// react-slick styles (make sure imported in index.css or App.css)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,   // centers active card
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  // Service data with icons
  const services = [
    {
      title: "Web Design",
      desc: "I create responsive, modern, and visually appealing websites that adapt to all devices. My focus is on clean layouts, accessibility, and usability, ensuring a seamless experience that helps businesses engage users and build strong online presence.",
      color: "from-[#9B2CFD] to-[#C084FC]",
      icon: <FaLaptopCode size={40} />,
    },
    {
      title: "Authentication",
      desc: "I implement secure user authentication systems using modern methods like Firebase Auth, JWT, or OAuth. From simple email/password logins to social sign-ins (Google, GitHub, Facebook), I ensure users can safely access applications with confidence.",
      color: "from-[#2C224F] to-[#3A2B63]",
      icon: <FaUserLock size={40} />,
    },
    {
      title: "Authorization",
      desc: "I build robust role-based authorization systems that control what users can see and do within an application. Whether it’s Admin, Moderator, or Standard User, my solutions ensure data security and proper access management across platforms.",
      color: "from-[#3A2B63] to-[#9B2CFD]",
      icon: <FaUserShield size={40} />,
    },
    {
      title: "Backend Development",
      desc: "I design and develop powerful backend systems using Node.js and Express.js. With secure APIs, database integration (MongoDB), and optimized performance, I ensure your applications are scalable, efficient, and ready for real-world use.",
      color: "from-[#2C224F] via-[#3A2B63] to-[#9B2CFD]",
      icon: <FaServer size={40} />,
    },
  ];

  return (
    <div className="mt-12 container mx-auto px-6">
      {/* Gradient line */}
      <div className="flex items-center justify-center mb-12">
        <hr className="h-[2px] w-full my-12 border-0 rounded-full 
          bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-80" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-4">Services</h2>
      <p className="text-center  text-gray-400 mb-10">
        Transforming ideas into intuitive digital experiences
      </p>

      {/* Carousel */}
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="px-3">
            <div
              className={`rounded-2xl p-6 h-72 flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 bg-gradient-to-b ${service.color}`}
            >
              <div className="text-white mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
