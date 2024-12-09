import { motion } from "framer-motion";
import KGECCollege from "../assets/kgec-college.webp";

const AboutKGEC = () => {
  return (
    <section className="py-10 w-full flex flex-col justify-center items-center bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="heading-custom"
        >
          About KGEC
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 w-[90%]"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={KGECCollege}
            alt="KGEC College Building"
            className="w-96 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="pt-4 sm:text-2xl font-semibold text-lg font-sans text-black text-center md:text-left">
            Kalyani Government Engineering College (KGEC), established in 1995, 
            is a premier engineering institution located in Kalyani, West Bengal. 
            The college offers undergraduate and postgraduate programs in various 
            engineering disciplines and is known for its excellence in technical 
            education. KGEC has consistently ranked among the top engineering 
            colleges in Eastern India and has produced numerous successful 
            engineers who are making significant contributions to the industry 
            and academia globally.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutKGEC;