import React from "react";
import "./../index.css";

function Navbar() {
  return (
    <>
      <nav className="container m-auto flex justify-center py-10 items-center h-1 relative shadow-sm font-mono text-lg ">
        <ul className="flex flex-wrap items-center justify-center text-center text-lg font-semibold">
          <li className="mx-5 text-center ">
            <a href="#about">About</a>
          </li>
          <li className="mx-5 text-center text-red-500">
            <a href="#education">Education</a>
          </li>
          <li className="mx-5 text-center text-green-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="mx-5 text-center text-yellow-700">
            <a href="https://geek-of-javascript.blogspot.com/" target='_blank'>Blog</a>
          </li>
          <li className="mx-5 text-center text-pink-600">
            <a href="mailto:imsnag.1@gmail.com" >Hire Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
