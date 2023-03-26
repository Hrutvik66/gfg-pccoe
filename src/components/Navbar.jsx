import React from "react";
// React Router DOM
import { Link } from "react-router-dom";
import GFG from "../assets/gfg.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:p-[0.6rem_5rem] p-[0.6rem_1rem] fixed top-0 w-full z-50 font-abel text-gray-500 bg-[#011305]">
      <Link to="/">
        <img src={GFG} alt="GFG" />
      </Link>
      <ul className="md:flex space-x-12 hidden">
        <li>
          <Link
            to="/event"
            className="hover:text-green-600 hover:underline underline-offset-4 text-xl button_hover_transition"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-green-600 hover:underline underline-offset-4 text-xl button_hover_transition"
          >
            About
          </Link>
        </li>
      </ul>
      <Link
        to="/login"
        className="bg-green-500 text-black md:p-[0.5rem_2rem] p-[0.3rem_1rem] border-2 border-black rounded-lg hover:bg-black hover:border-green-500 hover:text-green-500 button_hover_transition"
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
