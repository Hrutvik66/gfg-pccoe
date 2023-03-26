import React from "react";
import Navbar from "../components/Navbar";
// Images
import About1 from "../assets/About1.jpg";
import About2 from "../assets/About2.jpg";
import About3 from "../assets/About3.jpg";

const About = () => {
  return (
    <div className="h-full bg-[#011305]">
      <Navbar />
      <div className="flex flex-col space-y-5 justify-center items-center h-full p-[5rem_5rem]">
        <h1 className="text-4xl font-iceberg text-center text-white">
          Welcome to the GFG PCCOE Student Chapter!
        </h1>
        <div className="flex md:flex-row md:space-y-0 space-y-2 flex-col space-x-2">
          <img src={About1} className = "h-[15rem] w-[25rem] lg:h-[13rem] md:w-[13rem] lg:w-[20rem]"/>
          <img src={About2} className = "h-[15rem] w-[25rem] lg:h-[13rem] md:w-[13rem] lg:w-[20rem] mt-4"/>
          <img src={About3} className = "h-[15rem] w-[25rem] lg:h-[13rem] md:w-[13rem] lg:w-[20rem]"/>
        </div>
        <div className="text-white text-xl font-montserrat space-y-3">
          <h2 className="text-3xl font-semibold font-abel">Goals </h2>
          <p>
            🔘Create a community of tech enthusiasts who share a passion for
            innovation and learning
          </p>
          <p>🔘Provide a platform for students to learn and grow</p>
          <p>
            🔘Provide opportunities for students to gain practical experience
            through workshops, hackathons, and projects
          </p>
        </div>
        <div className="text-white text-xl font-montserrat space-y-3">
          <h2 className="text-3xl font-semibold font-abel">Activities </h2>
          <p>🔘Workshops on various technologies and programming languages</p>
          <p>
            🔘Hackathons and coding competitions to test and showcase skills
          </p>
          <p>
            🔘Guest lectures by industry professionals to provide insights into
            the latest trends and technologies
          </p>
          <p>🔘Projects and internships to provide practical experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
