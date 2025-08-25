import React from "react";
import ThemeToggle from "./ThemeToggle";
import { HiDownload } from "react-icons/hi";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#home" className="navlink">Home</a>
      </li>
      <li>
        <a href="#about" className="navlink">About</a>
      </li>
      <li>
        <a href="#services" className="navlink">Services</a>
      </li>
      <li>
        <a href="#projects" className="navlink">Projects</a>
      </li>
      <li>
        <a href="#contact" className="navlink">Contact</a>
      </li>
    </>
  );

  return (
    <div className="container mx-auto fixed top-0 right-0 buttom left-0 z-50 py-8 "> 
      {/* ✅ fixed navbar */}
      <div
        className="px-10 navbar rounded-full bg-base-100 shadow-sm"
        style={{
          background:
            "linear-gradient(135deg, var(--color-base-200), var(--color-base-300), var(--color-base-200))",
        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
            >
              {links}
            </ul>
          </div>
          <a href="#home" className="text-3xl font-black">
            FH
          </a>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="space-x-5 menu-horizontal px-1 font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
          <a className="text-base flex items-center gap-1 bg-[#3F78F8] px-3 py-2 rounded cursor-pointer hover:bg-transparent border  border-indigo-700 hover:border-[#3F78F8] transition">Resume <HiDownload /></a>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
