import { forwardRef } from "react";
import { convenors } from "../data/team";
import ConvenorCard from "./ConvenorCard";

const Team = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="convenors" className="py-10 flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center pt-10">
        <h2 className="heading-custom">Convenors</h2>
        <p className="main-text">
          
        </p>
      </div>

      <div className="w-[90%] flex gap-2 flex-col justify-center items-center">
        <div className="w-full py-10 gap-10 flex md:flex-row flex-col justify-center items-center">
          {convenors.map((member, index) => (
            <ConvenorCard key={index} index={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
});

Team.displayName = 'Team';

export default Team;
