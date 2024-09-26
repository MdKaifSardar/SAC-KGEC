import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center w-fit h-full gap-4 fixed right-2">
      <div className="bg-white text-center flex felx-col justify-center items-center w-fit h-fit rounded-full p-2">
        <FaInstagram className="text-black font-bold sm:h-14 h-8 sm:w-14 w-8" />
      </div>
      <div className="bg-white text-center flex felx-col justify-center items-center w-fit h-fit rounded-full p-2">
        <FaFacebookF className="text-black font-bold sm:h-14 h-8 sm:w-14 w-8" />
      </div>
      <div className="bg-white text-center flex felx-col justify-center items-center w-fit h-fit rounded-full p-2">
        <FaYoutube className="text-black font-bold sm:h-14 h-8 sm:w-14 w-8" />
      </div>
      <div className="bg-white text-center flex felx-col justify-center items-center w-fit h-fit rounded-full p-2">
        <FaLinkedin className="text-black font-bold sm:h-14 h-8 sm:w-14 w-8" />
      </div>
    </div>
  );
};

export default SocialLinks;
