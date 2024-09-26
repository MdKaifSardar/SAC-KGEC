import React, { forwardRef } from "react";
import { convenors } from "../data/team";
import ConvenorCard from "./ConvenorCard";

const Team = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-10 flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center pt-10">
        <h2 className="heading-custom">Conveners</h2>
        <p className="main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
          risus vitae massa semper aliquam quis mattis quam.
        </p>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center">
        <div className="p-10 gap-10 flex md:flex-row flex-col justify-center items-center">
          {convenors.map((member, index) => (
            <ConvenorCard key={index} index={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Team;
