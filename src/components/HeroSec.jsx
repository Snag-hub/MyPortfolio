import React from "react";
import "font-awesome/css/font-awesome.min.css";

function HeroSec() {
  return (
    <>
      <div className="container m-auto flex justify-center items-center h-80 relative font-mono text-lg">
        <div className="flex flex-col justify-center items-center font-mono">
          <h1 className="text-4xl text-center xl:text-6xl lg:text-6xl font-bold md:text-5xl sm:text-4xl">
            Hi, I'm <span className="text-blue-500 ">Syed Nadeem</span>
          </h1>
          <h2 className="text-2xl text-center font-semibold xl:text-2xl lg:text-2xl md:text-1xl sm:text-1xl">
            I'm a <span className="text-blue-500">Software Developer</span>
          </h2>
        </div>
      </div>
      <div className="socialLinks flex justify-center">
        <a
          href="https://github.com/Snag-hub"
          className=" text-blue-500 hover:text-blue-800"
        >
          <i className="fa fa-github-square fa-2x"></i>
        </a>
        <a
          className=" ml-4 text-blue-500 hover:text-blue-800"
          href="https://www.linkedin.com/in/syednadeemhussain/"
        >
          <i className="fa fa-linkedin-square fa-2x"></i>
        </a>
        <a
          href="https://twitter.com/therealgeelani"
          className="ml-4 text-blue-500 hover:text-blue-800"
        >
          <i className="fa fa-twitter-square fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/anonymous.programmer/"
          className="ml-4 text-blue-500 hover:text-blue-800"
        >
          <i className="fa fa-instagram fa-2x"></i>
        </a>
      </div>
    </>
  );
}

export default HeroSec;
