import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ConvenorCard = ({ member }) => {
  return (
    <div className="px-6 py-8 rounded-xl md:w-[30%] w-4/5 sm:w-4/5 bg-slate-200/40 shadow-lg flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="relative h-30 w-30 flex justify-center items-center group">
          <img
            className="h-full w-full rounded-full"
            src={member.imgSrc}
            alt={member.name}
          />

          {/* Overlay Div */}
          <a
            href={member.social.linkedin} // Add LinkedIn URL here
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-blue-500 bg-opacity-50 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FaLinkedin className="h-14 w-14 text-white" />
          </a>
        </div>

        <div className="pt-6 flex flex-col justify-center items-center">
          <h3 className="sm:text-3xl text-2xl font-semibold text-center">
            {member.name}
          </h3>
          <span className="text-center font-semibold text-red-600">
            {member.title}
          </span>
          <p className="pt-4 text-center">{member.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ConvenorCard;
