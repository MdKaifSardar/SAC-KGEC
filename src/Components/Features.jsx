import { forwardRef } from "react";
import { domainContent } from "../data/domainData";
import DomainCard from "./DomainCard";
import { motion } from "framer-motion";

const Features = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="features" className="py-10 w-full bg-customColor">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="py-10 flex flex-col justify-center items-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-custom-white"
            >
              Our Domains
            </motion.h2>
          </div>
          <div className="w-[92%] pb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-3 gap-5 grid-cols-1 row-auto">
            {domainContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <DomainCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Features.displayName = "Features";
export default Features;
