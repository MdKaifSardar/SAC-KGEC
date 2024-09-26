import React, { forwardRef } from "react";
import ImageAccordion from "./ImageAccordion.jsx";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="portfolio" className="w-full py-10 flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="heading-custom">Our Work</div>
        <div className="font-semibold pb-10 pt-5 w-[90%] text-center ">
          Explore our portfolio of successful projects, showcasing our team's
          dedication, creativity, and technical expertise. From Go-Kart racing
          to various Drones, discover how we've made a lasting impact on the
          automotive industry.
        </div>
      </div>
      <div className="w-full">
        <ImageAccordion />
      </div>
    </div>
  );
});

export default Portfolio;
