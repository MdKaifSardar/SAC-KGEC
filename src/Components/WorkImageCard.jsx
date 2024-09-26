import React from "react";

const WorkImageCard = ({ image }) => {
  return (
    <div className="px-2 bg-red-100 flex flex-col justify-center items-center h-fit">
      <img
        src={image.image}
        srcSet={`${image.image}?w=100 100w, ${image.image}?w=800 800w, ${image.image}?w=1200 1200w`}
        alt={image.title}
        className="h-80 w-auto"
        loading="lazy"
      />
      <span className="pt-3 font-sans font-thin text-2xl text-black">
        {image.title}
      </span>
    </div>
  );
};

export default WorkImageCard;
