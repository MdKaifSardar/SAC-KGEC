import React, { forwardRef } from "react";
import { domainContent } from "../data/domainData";
import DomainCard from "./DomainCard";

const Features = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="features" className="py-10 w-full bg-customColor">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="py-10 flex flex-col justify-center items-center">
          <h2 className="heading-custom-white">Our Domains</h2>
        </div>
        <div className="w-[92%] pb-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-3 gap-5 grid-cols-1 row-auto">
          {domainContent.map((item, index) => (
            <DomainCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;
