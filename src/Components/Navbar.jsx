import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ sections, activeSection, onNavClick }) => {
  return (
    <section className="fixed top-0 p-1 z-10 bg-white pl-10 pr-10 flex flex-row w-full">
      <nav className="flex flex-row justify-between items-center w-full h-30">
        <div className="w-30 h-30">
          <img className="w-fit h-fit" src={logo} alt="SAC-KGEC Logo" />
        </div>
        <div className="flex flex-row gap-3 h-full justify-center items-center">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`h-full md:text-2xl text-lg py-2 px-4 rounded-2xl text-black ${
                activeSection === section.id
                  ? "bg-red-500 text-white"
                  : "text-black"
              }`}
              onClick={() => onNavClick(section.ref)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
