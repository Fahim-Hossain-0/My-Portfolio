import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: "#1a0b2e", // base dark
        midpurple: "#5b2a86",  // medium violet
        pinkpurple: "#a4508b", // pinkish purple
      },
      backgroundImage: {
        "portfolio-gradient":
          "linear-gradient(180deg, #1a0b2e 0%, #5b2a86 50%, #a4508b 100%)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mylight: {
          primary: "#a4508b",
          secondary: "#5b2a86",
          accent: "#c084fc",
          neutral: "#1a0b2e",
          "base-100": "#f5f3ff",
        },
      },
      {
        mydark: {
          primary: "#a4508b",
          secondary: "#5b2a86",
          accent: "#c084fc",
          neutral: "#1a0b2e",
          "base-100": "#1a0b2e",
        },
      },
    ],
  },
};
