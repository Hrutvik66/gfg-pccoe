import React from "react";
// Components
import Navbar from "../components/Navbar";
// Images
import GFG from "../assets/gfg-big.svg";
// React icons
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <div className="h-full md:h-[100vh] bg-[#011305]">
      <Navbar />
      <div className="flex flex-col-reverse items-center md:flex-row justify-center h-full  md:p-[5rem_5rem] p-[1rem_2rem]">
        <div className="flex flex-col items-center flex-1 md:block p-[2rem] space-y-5">
          <div>
            <h1 className="text-green-700 md:text-5xl text-3xl font-bold font-abel">
              Geeks for Geeks
            </h1>
            <h1 className="text-[#03C988] md:text-5xl text-3xl font-bold font-abel">
              PCCOE Chapter
            </h1>
          </div>
          <p className="md:w-[80%] text-justify font-montserrat font-medium text-gray-500">
            GFG PCCOE Student Chapter is a tech community that empowers students
            through innovation. We provide a platform for learning, growth and
            connection. Join us to collaborate, network and build skills for a
            successful career.
          </p>
          <h2 className="flex space-x-3 md:text-2xl font-bold font-fira">
            <span className="text-[#00FFD1]">Learn. </span>
            <span className="text-gray-500">Create.</span>
            <span className="text-[#00FFD1]">Innovate. </span>
          </h2>
          <div className="flex justify-start items-center space-x-4">
            <a
              href="https://www.facebook.com/gfgpccoestudentchapter"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook className="text-3xl text-[#00FFD1] hover:text-[#00FFD1] hover:drop-shadow-[0_35px_35px_rgba(0,100,0,1)]" />
            </a>
            <a
              href="https://www.instagram.com/gfgpccoestudentchapter/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className="text-3xl text-[#00FFD1] hover:text-[#00FFD1] hover:drop-shadow-[0_35px_35px_rgba(0,100,0,1)]" />
            </a>
            <a
              href="https://www.linkedin.com/company/gfgpccoestudentchapter/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="text-3xl text-[#00FFD1] hover:text-[#00FFD1] hover:drop-shadow-[0_35px_35px_rgba(0,100,0,1)]" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={GFG}
            alt="Geeks for Geeks"
            className="mt-4 w-[80%] md:mt-0 md:h-full md:w-full hover:drop-shadow-[0_35px_35px_rgba(0,100,0,1)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
