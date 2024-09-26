import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="z-10 flex flex-col justify-center items-center w-fit h-full gap-4 fixed right-2">
      <a
        href="https://www.instagram.com/sac_kgec?igsh=MWJzN3dnMm1iNDFjMQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg hover:cursor-pointer bg-customColor text-center flex felx-col hover:bg-orange-600/60 justify-center items-center w-fit h-fit rounded-full p-2"
      >
        <FaInstagram className="text-white font-bold sm:h-10 h-8 sm:w-10 w-8" />
      </a>
      <a
        href="https://www.facebook.com/share/wBioE34VAxutAccD/?mibextid=qi2Omg"
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg hover:bg-orange-600/60 hover:cursor-pointer  bg-customColor text-center flex felx-col justify-center items-center w-fit h-fit rounded-full p-2"
      >
        <FaFacebookF className="text-white font-bold sm:h-10 h-8 sm:w-10 w-8" />
      </a>
      <a
        href="https://youtube.com/@studentsautomobileclubkgec?si=6qhbX2yXYD2py0bw"
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg hover:bg-orange-600/60 hover:cursor-pointer  bg-customColor text-center flex felx-col justify-center items-center w-fit h-fit rounded-full p-2"
      >
        <FaYoutube className="text-white font-bold sm:h-10 h-8 sm:w-10 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/company/students-automobile-club-of-kgec/"
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg hover:bg-orange-600/60 hover:cursor-pointer  bg-customColor text-center flex felx-col justify-center items-center w-fit h-fit rounded-full p-2"
      >
        <FaLinkedin className="text-white font-bold sm:h-10 h-8 sm:w-10 w-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
