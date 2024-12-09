import { motion } from "framer-motion";

const ClubActivity = () => {
  return (
    <section className="py-10 w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="heading-custom"
        >
          Club Activity
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="pt-4 sm:text-2xl font-semibold text-lg font-sans text-black w-[90%] text-center"
        >
          Since its inception, SAC-KGEC has relentlessly advanced,
          transcending initial expectations and expanding across
          multifarious domains. It has been instrumental in enhancing the
          cognitive faculties of countless students at KGEC, refining their
          expertise in diverse areas such as manufacturing, design, and
          innovation. Yet, SAC-KGEC&apos;s influence extends far beyond the
          confines of technical acumen; it has played a pivotal role in the
          holistic development of its members, equipping them with the
          requisite skills to excel in the competitive and ever-evolving
          professional landscape. Through initiatives that fostered
          competencies such as public speaking, mass management, project
          scheduling, team building, and leadership, SAC-KGEC has ensured
          its members are not only proficient engineers but also versatile
          and industry-ready professionals.
        </motion.div>
      </div>
    </section>
  );
};

export default ClubActivity; 