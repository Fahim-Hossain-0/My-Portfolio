import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
// import foodhub from "../../assets/project-img/foodhub.png";
const projects = [
  {
    title: "Amaksora App",
    desc: "Creating intuitive and visually appealing designs that enhance user experience.",
    tag: "App Design",
    img: "/src/assets/project-img/Food-Hub-08-24-2025_02_55_PM.jpg", // replace with your image
    github: "https://github.com/yourrepo",
    live: "https://yourliveproject.com",
  },
  {
    title: "Homy App",
    desc: "Creating intuitive and visually appealing designs that enhance user experience.",
    tag: "App Design",
    img: "/src/assets/project-img/Blood-Hub-08-24-2025_02_53_PM.jpg",
    github: "https://github.com/yourrepo",
    live: "https://yourliveproject.com",
  },
  {
    title: "B-Roll Media",
    desc: "Designing intuitive and visually engaging websites that elevate user experience.",
    tag: "Web Design",
    img: "/src/assets/project-img/Home-08-24-2025_03_00_PM.jpg",
    github: "https://github.com/yourrepo",
    live: "https://yourliveproject.com",
  },
];

const Projects = () => {
  return (
    
    <div className="container mx-auto pb-28 mt-20">
        <div className="flex items-center justify-center mb-12">
        <hr className="h-[2px] w-full my-12 border-0 rounded-full 
          bg-gradient-to-r from-transparent via-[#C084FC] to-transparent opacity-80" />
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 text-white">My Projects</h2>
      <p className="text-center text-gray-400 ">
        Discover the projects that showcase my passion for design and innovation
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-b from-[#2C224F] to-[#3A2B63] p-5 rounded-2xl shadow-lg mt-12">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl mb-4 object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.desc}</p>

              <div className="mt-4 flex justify-between items-center">
                {/* <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {project.tag}
                </span> */}
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
