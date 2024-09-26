import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ConvenorCard = ({ member }) => {
  return (
    <div className="px-6 py-8 rounded-xl w-full bg-slate-200/40 shadow-lg flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80%] relative flex justify-center items-center group">
          {/* Image */}
          <img
            className="w-full h-full rounded-full"
            src={member.imgSrc}
            alt={member.name}
          />

          {/* Overlay Div */}
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 rounded-full flex justify-center items-center bg-blue-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FaLinkedin className="h-14 w-14 text-white" />
          </a>
        </div>

        {/* Member Details */}
        <div className="pt-6 flex flex-col justify-center items-center">
          <h3 className="text-red-600 sm:text-3xl text-2xl font-semibold text-center">
            {member.name}
          </h3>
          <div className="pt-4 flex flex-col justify-center items-center w-fit h-fit">
            <p className="font-semibold text-center">{member.department}</p>
            <p className="font-semibold text-center">{member.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvenorCard;
