import logo1 from "../assets/sponsers/Zebronics-black.png";
import logo2 from "../assets/sponsers/boat-logo.png";
import logo3 from "../assets/sponsers/Wow-Momo-Logo.png";
import logo4 from "../assets/sponsers/beardo-logo.png";
import SponsorNav from "./SponsorNav";
import { brochure, sponsorContent } from "../data/sponsorContent";
import { motion } from "framer-motion";
import Footer from "./Footer";

const sponsorLogos = [
  { src: logo1, alt: "Zebronics" },
  { src: logo2, alt: "Boat" },
  { src: logo3, alt: "Wow Momo" },
  { src: logo4, alt: "Beardo" },
];

const Sponsers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <SponsorNav />
      <div className="flex flex-col justify-center items-center w-full h-fit py-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading-custom text-4xl font-bold mb-8"
        >
          Why Partner With Us?
        </motion.h2>

        {/* Benefits Grid */}
        <div className="pt-10 gap-6 flex sm:flex-row flex-col justify-center sm:items-start items-center w-full max-w-7xl px-4">
          <div className="gap-6 sm:w-[60%] w-[92%] grid sm:grid-cols-2 grid-cols-1">
            {sponsorContent.map((content, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-sans font-bold text-gray-800 sm:text-2xl text-xl mb-3">
                  {content.title}
                </h3>
                <p className="font-sans sm:text-lg text-base text-gray-600">
                  {content.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* QR Code Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:w-[30%] w-[92%] bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Scan to Connect</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="qr-code"
              className="w-full rounded-lg"
            />
            <p className="text-center mt-4 text-gray-600">Scan this QR code to get in touch with our sponsorship team</p>
          </motion.div>
        </div>

        {/* Current Sponsors Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 w-full"
        >
          <h3 className="text-3xl font-bold text-center mb-10">Our Current Partners</h3>
          <div className="w-full h-32 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            {[...Array(4)].map((_, index) => (
              <ul
                key={index}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                style={{ animation: 'infinite-scroll 15s linear infinite' }}
              >
                {sponsorLogos.map((logo, idx) => (
                  <li key={idx} className="mx-8">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </motion.div>

        {/* Brochure Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="py-20 flex flex-col justify-center items-center w-full max-w-6xl px-4"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Download Our Sponsorship Brochure</h3>
          <img 
            src={brochure} 
            alt="sac-brochure" 
            className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>

      {/* Add this footer section at the bottom, before the closing div */}
      <Footer/>
    </div>
  );
};

export default Sponsers;
