import { forwardRef } from "react";
import ImageAccordion from "./ImageAccordion.jsx";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="portfolio" className="w-full py-10 flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="heading-custom">Our Work</div>
        <div className="font-semibold pb-10 pt-5 w-[90%] text-center">
          We specialize in designing and building go-karts, offering students a
          platform to apply theoretical knowledge in real-world scenarios. Our
          club emphasizes innovation, teamwork, and the spirit of engineering
          excellence. We also regularly participate in the Formula Kart Design
          Challenge (FKDC), a prestigious national-level competition that
          challenges students to design, build, and race go-karts. Over the
          years, we have gained significant experience in crafting vehicles from
          scratch, constantly improving with each new project.
        </div>
      </div>
      <div className="w-full">
        <ImageAccordion />
      </div>
    </div>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;
