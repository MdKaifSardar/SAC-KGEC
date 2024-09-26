import React, { forwardRef } from "react";
import ImageAccordion from "./ImageAccordion.jsx";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div className="py-10 w-full flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="heading-custom">Our Work</div>
        <div className="pb-10 pt-5 w-[90%] text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque
          neque impedit adipisci consequuntur explicabo reiciendis labore
          dolore, maxime praesentium.
        </div>
      </div>
      <div className="w-full">
        <ImageAccordion />
      </div>
    </div>
  );
});

export default Portfolio;
