import React, { forwardRef } from "react";
import { Logo } from "../data/logo";
import { motion } from "framer-motion";

const AboutSection = forwardRef((props, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className="py-10 w-full flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center w-[90%]">
        <div className="flex flex-col justify-center items-center pt-10">
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: "50%" }}
            className="sm:w-[30%] w-[50%]"
          >
            <img className="w-full h-full" src={Logo} alt="About Us" />
          </motion.div>

          <div className="w-full flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="w-full flex flex-row justify-start items-start sm:text-3xl text-2xl text-customColor font-sans font-bold pb-4"
            >
              Club Activity
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="sm:text-2xl text-lg font-sans font-semibold text-black"
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

export default AboutSection;
