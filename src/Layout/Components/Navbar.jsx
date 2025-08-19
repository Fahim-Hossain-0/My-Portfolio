import React from "react";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/Home">Home</NavLink>
        
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
        
      </li>
      <li>
        <NavLink to="/Contect">Contect</NavLink>
        
      </li>
      <li>
        {/* <NavLink to="/">Home</NavLink> */}
        
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
    <div className=" px-10 mt-8 rounded-full navbar bg-base-100 shadow-sm" 
    style={{
  background: "linear-gradient(135deg, var(--color-base-200), var(--color-base-300), var(--color-base-200))"
}}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
          >
           {links}
          </ul>
        </div>
        <a className=" text-xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex ">
        <ul className="space-x-5 menu-horizontal px-1 font-medium">
          
          {links}
 
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <a className="btn">Button</a>
        {/* <ThemeToggle /> */}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
