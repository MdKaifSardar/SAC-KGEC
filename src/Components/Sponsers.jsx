import React from "react";
import logo1 from "../assets/sponsers/Zebronics-black.png";
import logo2 from "../assets/sponsers/boat-logo.png";
import logo3 from "../assets/sponsers/Wow-Momo-Logo.png";
import logo4 from "../assets/sponsers/beardo-logo.png";
import SponsorNav from "./SponsorNav";
import { brochure, sponsorContent } from "../data/sponsorContent";

const sponsorLogos = [
  { src: logo1, alt: "Zebronics" },
  { src: logo2, alt: "Boat" },
  { src: logo3, alt: "Wow Momo" },
  { src: logo4, alt: "Beardo" },
];

const Sponsers = () => {
  return (
    <>
      <SponsorNav />
      <div className="flex flex-col justify-center items-center w-full h-fit">
        <h2 className="heading-custom">Why sponsor us?</h2>
        <div className="pt-10 gap-10 flex sm:flex-row flex-col justify-center sm:items-start items-center w-full h-fit">
          <div className="gap-5 sm:w-[60%] w-[92%] grid sm:grid-cols-2 grid-cols-1 row-auto ">
            {sponsorContent.map((content, index) => (
              <div key={index} className="bg-customColor shadow px-5 py-4 rounded-xl flex flex-col justify-start items-start gap-3">
                <span className="font-sans font-bold text-white sm:text-2xl text-xl">
                  {content.title}
                </span>
                <span className="leading-tight font-sans sm:text-xl text-lg text-white pl-5 ">
                  {content.text}
                </span>
              </div>
            ))}
          </div>
          <div className="sm:w-[30%] w-[92%] flex flex-col justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="qr-code"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full h-32 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] sponsor-logo">
          {[...Array(4)].map((_, index) => (
            <ul
              key={index}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {sponsorLogos.map((logo, idx) => (
                <li key={idx}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="py-20 flex flex-col justify-center items-center w-[92vw]">
          <img src={brochure} alt="sac-brochure" />
        </div>
      </div>
    </>
  );
};

export default Sponsers;
