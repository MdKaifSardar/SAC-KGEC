import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({
  featuresRef,
  aboutRef,
  portfolioRef,
  teamRef,
  testimonialRef,
  contactRef,
  footerRef,
}) => {
  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="flex flex-row w-full bg-yellow-500">
      <nav className="flex flex-row bg-green-800 justify-between items-center w-full">
        <div className="w-30 h-30">
          <img className="w-fit h-fit" src={logo} alt="SAC-KGEC Logo" />
        </div>
        <div className="flex flex-row justify-center items-center bg-red-400">
          <button className="h-fit w-fit text-center p-1 text-black hover:bg-red-500 hover:text-white">
            Home
          </button>
          <button
            onClick={() => scrollToSection(featuresRef)}
            className="h-fit w-fit text-center p-1 text-black hover:bg-red-500 hover:text-white"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="h-fit w-fit text-center p-1 text-black hover:bg-red-500 hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(portfolioRef)}
            className="h-fit w-fit text-center p-1 text-black hover:bg-red-500 hover:text-white"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection(teamRef)}
            className="h-fit w-fit text-center p-1 text-black hover:bg-red-500 hover:text-white"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection(testimonialRef)}
            className="h-fit w-fit text-center p-1 text-black hover:bg-red-500 hover:text-white"
          >
            Testimonial
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="h-fit w-fit text-center p-1 text-black hover:bg-red-500 hover:text-white"
          >
            Contact
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
