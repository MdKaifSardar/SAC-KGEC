import React from "react";

const DomainCard = ({ item }) => {
  return (
    <div className="gap-3 p-2 flex felx-row justify-center items-start">
      <div className="flex flex-col justify-center items-center w-30 h-30">
        <img src={item.icon} alt={item.title} className="w-fit h-fit"/>
      </div>
      <div className="sm:text-2xl text-md font-sans text-white font-thin">
        {item.text}
      </div>
    </div>
  );
};

export default DomainCard;
