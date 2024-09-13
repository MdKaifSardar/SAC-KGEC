import React from "react";

const ConvenorCard = ({ member }) => {
  return (
    <div className="pt-8 rounded-xl md:w-[30%] w-4/5 sm:w-4/5 bg-slate-200/40 shadow-lg flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="h-30 w-30 flex flex-col justify-center items-center">
          <img
            className="h-full w-full rounded-full"
            src={member.imgSrc}
            alt={member.name}
          />
        </div>
        <div className="pt-6 flex flex-col justify-center items-center">
          <h3 className="sm:text-3xl text-2xl font-semibold text-center">
            {member.name}
          </h3>
          <span className="text-center">{member.title}</span>
          <p className="pt-4 text-center">{member.description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-10 pt-10 items-center h-fit gap-2">
        <a
          href={member.social.facebook}
          className="rounded-lg flex flex-col justify-center items-center p-1 border-[1px] w-fit h-fit border-slate-200/30 hover:border-red-500 "
        >
          <i className="text-red-500 fa fa-facebook sm:text-3xl text-xl"></i>
        </a>
        <a
          href={member.social.twitter}
          className="rounded-lg flex flex-col justify-center items-center p-1 border-[1px] w-fit h-fit border-slate-200/30 hover:border-red-500 "
        >
          <i className="text-red-500 fa fa-twitter sm:text-3xl text-xl"></i>
        </a>
        <a
          href={member.social.googlePlus}
          className="rounded-lg flex flex-col justify-center items-center p-1 border-[1px] w-fit  border-slate-200/30h-fit hover:border-red-500 "
        >
          <i className="text-red-500 fa fa-google-plus sm:text-3xl text-xl"></i>
        </a>
        <a
          href={member.social.linkedin}
          className="rounded-lg flex flex-col justify-center items-center p-1 border-[1px] border-slate-200/30 w-fit h-fit hover:border-red-500 "
        >
          <i className="text-red-500 fa fa-linkedin sm:text-3xl text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default ConvenorCard;
