import { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutSection = forwardRef((props, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className="py-10 w-full flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center w-[90%]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="heading-custom"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-4 sm:text-2xl font-semibold text-lg font-sans text-black w-full text-center"
        >
          In the early months of 2020, a group of enterprising students
          conceived a transformative vision: to create a nexus between core
          engineering disciplines and contemporary technological innovations.
          Their ambition was not merely to refine technical prowess but to
          empower students to conceptualize and execute real-world projects of
          core engineering intertwined with the changing and upcoming
          technology that could tangibly impact their communities and
          industries. This vision culminated in the establishment of SAC-KGEC,
          and we had the distinct privilege of materializing this concept
          during the first year as founding members, alongside a team of
          equally committed collaborators.
          <br />
          Students&apos; Automobile Club of Kalyani Government Engineering
          College (SAC-KGEC) is a student-driven initiative aimed at enhancing
          practical engineering skills through hands-on projects.
        </motion.p>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
