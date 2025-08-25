import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Example projects (replace with yours)
const projects = [
  {
    title: "Food Hub",
    desc: "A food item website where users can explore a variety of delicious recipes, view detailed information about each dish, and manage their favorite recipes with ease.",
    tag: "WEB",
    img: "/src/assets/project-img/Food-Hub-08-24-2025_02_55_PM.jpg",
    github: "https://github.com/Fahim-Hossain-0/Food-Hub-clint-site",
    live: "https://food-hub-6fa90.web.app/",
  },
  {
    title: "Blood Donetion Hub",
    desc: "A comprehensive blood donation platform that connects donors with recipients, facilitating easy registration, search, and management of blood donation requests.",
    tag: "App Design",
    img: "/src/assets/project-img/Blood-Hub-08-24-2025_02_53_PM.jpg",
    github: "https://github.com/Fahim-Hossain-0/Blood-donetion-hub",
    live: "https://blood-donation-bcbd2.web.app/",
  },
  {
    title: "Local Event",
    desc: "A dynamic event management platform that allows users to create, discover, and manage local events with ease. Features include event creation, RSVP management, and real-time updates.",
    tag: "Web Design",
    img: "/src/assets/project-img/Home-08-24-2025_03_00_PM.jpg",
    github: "https://github.com/Fahim-Hossain-0/local-event",
    live: "https://local-event-473db.web.app/",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-20">
      {/* Section divider */}
      <div className="flex items-center justify-center mb-12">
        <hr
          className="h-[2px] w-full border-0 rounded-full 
          bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-80"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
        My Projects
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto px-3 text-sm sm:text-base">
        Discover the projects that showcase my passion for design and innovation.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 20 }, // small phones
          768: { slidesPerView: 2, spaceBetween: 24 },   // tablets
          1024: { slidesPerView: 3, spaceBetween: 28 },  // desktops
        }}
        className="mt-10"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-b from-[#2C224F] to-[#3A2B63] p-5 rounded-2xl shadow-lg h-full flex flex-col">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl mb-4 object-cover w-full aspect-video" // keeps ratio
              />
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2 flex-grow">
                {project.desc}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {project.tag}
                </span>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
