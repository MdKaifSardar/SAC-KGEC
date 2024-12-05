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
        <div className="flex flex-col justify-center items-center pt-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: "50%" }}
            className="heading-custom"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: "50%" }}
            className="pt-4 sm:text-2xl font-semibold text-lg font-sans text-black w-full"
          >
            Students’ Automobile Club of Kalyani Government Engineering College
            (SAC-KGEC), is a student-driven initiative aimed at enhancing
            practical engineering skills through hands-on projects.
          </motion.p>
        </div>

        <div className="gap-20 w-full flex sm:flex-row flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="heading-custom"
            >
              Club Activity
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="pt-4 sm:text-2xl font-semibold text-lg font-sans text-black w-full"
            >
              We specialize in designing and building go-karts, offering
              students a platform to apply theoretical knowledge in real-world
              scenarios. Our club emphasizes innovation, teamwork, and the
              spirit of engineering excellence. We also regularly participate in
              the Formula Kart Design Challenge (FKDC), a prestigious
              national-level competition that challenges students to design,
              build, and race go-karts. Over the years, we have gained
              significant experience in crafting vehicles from scratch,
              constantly improving with each new project.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
