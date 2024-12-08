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
          In the early months of 2020, a group of enterprising students conceived a transformative vision: to create a nexus between core engineering disciplines and contemporary technological innovations. Their ambition was not merely to refine technical prowess but to empower students to conceptualize and execute real-world projects of core engineering intertwined with the changing and upcoming technology that could tangibly impact their communities and industries. This vision culminated in the establishment of SAC-KGEC, and we had the distinct privilege of materializing this concept during the first year as founding members, alongside a team of equally committed collaborators.<br/>
          Students&apos; Automobile Club of Kalyani Government Engineering College (SAC-KGEC) is a student-driven initiative aimed at enhancing practical engineering skills through hands-on projects.
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
              Since its inception, SAC-KGEC has relentlessly advanced, transcending initial expectations and expanding across multifarious domains. It has been instrumental in enhancing the cognitive faculties of countless students at KGEC, refining their expertise in diverse areas such as manufacturing, design, and innovation. Yet, SAC-KGEC&apos;s influence extends far beyond the confines of technical acumen; it has played a pivotal role in the holistic development of its members, equipping them with the requisite skills to excel in the competitive and ever-evolving professional landscape. Through initiatives that fostered competencies such as public speaking, mass management, project scheduling, team building, and leadership, SAC-KGEC has ensured its members are not only proficient engineers but also versatile and industry-ready professionals.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
