import React from "react";
import "./BackgroundAnimation.css";

// your logos
const IMAGE_SOURCES = [
  "/src/assets/icons/html.png",
//   "/src/assets/icons/css.png",
  "/src/assets/icons/javascript.png",
  "/src/assets/icons/react.png",
  "/src/assets/icons/nodejs.png",
  "/src/assets/icons/mongodb.png",
  "/src/assets/icons/tailwindcss.png",
//   "/src/assets/icons/bootstrap.png",
//   "/assets",
//   "/assets/",
];

const BackgroundAnimation = () => {
  const totalImages = 15;

  return (
    <div className="bg-animation">
      {Array.from({ length: totalImages }).map((_, i) => {
        const randomImage =
          IMAGE_SOURCES[Math.floor(Math.random() * IMAGE_SOURCES.length)];
        const randomLeft = Math.random() * 100; // random X position (vw)
        const randomDelay = Math.random() * 20; // animation delay
        const randomSize = 30 + Math.random() * 50; // size between 30px - 80px

        return (
          <img
            key={i}
            src={randomImage}
            alt=""
            style={{
              left: `${randomLeft}vw`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              animationDelay: `${randomDelay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundAnimation;
