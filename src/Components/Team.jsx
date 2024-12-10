import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const Team = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <section ref={ref} id="convenors" className="py-10 flex flex-col justify-center items-center w-full mb-4">
      <div className="flex flex-col justify-center items-center pt-10">
        <h2 className="heading-custom">Our Team</h2>
        <p className="main-text">
          
        </p>
      </div>

      {/* <div className="w-[90%] flex gap-2 flex-col justify-center items-center">
        <div className="w-full py-10 gap-10 flex md:flex-row flex-col justify-center items-center">
          {convenors.map((member, index) => (
            <ConvenorCard key={index} index={index} member={member} />
          ))}
        </div>
      </div> */}
      <p className="main-text text-center max-w-2xl mb-8">
        Meet our dedicated team of faculty advisors, convenors, coordinators and domain leads who work tirelessly to drive innovation and excellence at SAC-KGEC.
      </p>
      <button
        onClick={() => navigate("/team")}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
      >
        Meet Our Team
      </button>
    </section>
  );
});

Team.displayName = 'Team';

export default Team;
