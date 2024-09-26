import React, { forwardRef } from "react";
import { domainContent } from "../data/domainData";
import DomainCard from "./DomainCard";

const Features = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="features">
      <div className="container">
        <div className="pb-10 flex flex-col justify-center items-center pt-10">
          <h2 className="heading-custom">Our Domains</h2>
        </div>
        <div className="p-2 grid grid-cols- sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-3 gap-5 grid-cols-1 row-autogap-2">
          {domainContent.map((item, index) => (
            <DomainCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;
