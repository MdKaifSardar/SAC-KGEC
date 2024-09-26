import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ sections, activeSection, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="fixed top-0 p-1 z-10 bg-white pl-10 pr-10 flex flex-row w-full">
      <nav className="flex flex-row justify-between items-center w-full h-30">
        <div className="hover:cursor-pointer gap-5 flex flex-row w-fit h-fit justify-center items-center">
          <div className="w-28 h-28">
            <img className="w-fit h-fit" src={logo} alt="SAC-KGEC Logo" />
          </div>
          <div className="text-black text-4xl font-sans font-semibold">
            SAC-KGEC
          </div>
        </div>

        <div className="main-nav">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`h-full md:text-2xl py-3 text-lg px-4 rounded-2xl text-black ${
                activeSection === section.id
                  ? "bg-red-500 text-white"
                  : "text-black"
              }`}
              onClick={() => {
                navigate("/");
                onNavClick(section.ref);
              }}
            >
              {section.label}
            </button>
          ))}
          <Link
            to="/sponsor"
            className="h-full md:text-2xl py-3 text-lg px-4 rounded-2xl text-black"
          >
            Sponsors
          </Link>
        </div>
      </nav>
      <div className="z-20 md:hidden flex flex-col justify-center items-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hover:bg-slate-300/50 flex flex-col justify-center items-center text-center p-2 rounded-lg"
        >
          <CiMenuBurger className="font-bold text-4xl" />
        </button>
        <nav className={isOpen ? "navMenu-open" : " navMenu-closed"}>
          {sections.map((section, index) => (
            <button
              key={index}
              className={`text-white py-4 h-fit md:text-5xl text-4xl font-semibold font-sans`}
              onClick={() => {
                navigate("/");
                onNavClick(section.ref);
              }}
            >
              {section.label}
            </button>
          ))}
          <button
            className={`py-4 h-fit md:text-5xl text-4xl font-semibold font-sans`}
          >
            <Link to="/sponsor" className="text-white">Sponsors</Link>
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
