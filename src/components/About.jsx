import React from "react";

let resumeUrl = "https://drive.google.com/file/d/1-Ke-SVyIVq701fps9dtM5oov2yPvcqaZ/view?usp=sharing"

function About() {
  return (
    <>
      <div className="m-auto flex justify-center items-center flex-col lg:flex-row md:flex-row sm:flex-row h-fit w-auto sm:m-auto relative font-mono text-lg mt-10">
        <div className="flex flex-col justify-center items-center font-mono w-3/4  ">
          <p className="xl:text-center lg:text-center text-justify mt-5">
            Software Developer with expertise in design, installation, testing
            and maintenance of software systems. Equipped with a diverse and
            promising skill-set. Proficient in various platforms, languages, and
            embedded systems. Experienced with cutting-edge development tools
            and procedures. Able to effectively self-manage during independent
            projects, as well as collaborate as part of a productive team.
          </p>
          <p className="xl:text-center lg:text-center text-justify mt-5">
            I am currently working as a <strong>Software Developer</strong> at
            CineTech India Enterprises. I am Graduated from the{" "}
            <strong>
              University of Pune (Savitribai Phule Pune University)
            </strong>{" "}
            with a degree in{" "}
            <strong>
              Bachelors of Business Administration (Computer Applications)
            </strong>{" "}
            also known as BCA.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
