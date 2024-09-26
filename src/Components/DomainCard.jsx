import React from "react";

const DomainCard = ({ item }) => {
  return (
    <div className="gap-3 p-2 flex flex-col justify-center items-center">
      <div className="gap-4 w-full flex flex-row justify-start items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={item.icon} alt={item.title} className="w-20 h-fit" />
        </div>
        <div>
          <span className="sm:text-3xl text-2xl font-bold text-white">{item.title}</span>
        </div>
      </div>
      <div className="sm:text-2xl text-md font-sans text-white font-thin">
        {item.text}
      </div>
    </div>
  );
};

export default DomainCard;
