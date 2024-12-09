import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import teamBanner from "../assets/background/bg.jpeg"; // Add your banner image
import { faculty, convenors, coordinators, domainLeads} from "../data/teamMembers";
import PropTypes from 'prop-types';
import { useState } from 'react';
import Navbar from "../Components/Navbar";

const MemberCard = ({ member }) => (
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative group w-72 bg-gradient-to-br from-gray-100 to-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-150 transition-all duration-300"
>
  <div className="relative h-64 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
    <img
      src={member.imgSrc}
      alt={member.name}
      className="w-full h-full rounded object-cover transition-transform duration-300 "
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <div className="flex space-x-4">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="p-6 text-center flex flex-col items-center justify-center min-h-[120px]">
    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">{member.name}</h3>
    <p className="text-md text-gray-600 mt-2">{member.position}</p>
  </div>
</motion.div>

);

MemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

const TeamSection = ({ title, members, isDropdown = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      {isDropdown ? (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-3xl font-bold text-red-600 text-center mb-8 hover:text-red-700 transition-colors"
        >
          <span>{title}</span>
          <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
      ) : (
        <h2 className="text-3xl font-bold text-red-600 text-center mb-8">{title}</h2>
      )}
      
      <div className={`flex flex-wrap justify-center gap-8 transition-all duration-300 ${isDropdown && !isExpanded ? 'hidden' : ''}`}>
        {members.map((member, index) => (
          <MemberCard 
            key={index} 
            member={member} 
          />
        ))}
      </div>
    </motion.section>
  );
};

const TeamPage = () => {
  const [activeSection, ] = useState("");
  
  // Dummy sections for navbar consistency
  const sections = [
    { id: "home", ref: { current: null }, label: "Home" },
    { id: "features", ref: { current: null }, label: "Domains" },
    { id: "about", ref: { current: null }, label: "About" },
    { id: "portfolio", ref: { current: null }, label: "Portfolio" },
    { id: "team", ref: { current: null }, label: "Team" },
    { id: "testimonial", ref: { current: null }, label: "Testimonial" },
    { id: "contact", ref: { current: null }, label: "Contact" }
  ];

  const onNavClick = () => {
    // Handle navigation back to home page sections
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        sections={sections}
        activeSection={activeSection}
        onNavClick={onNavClick}
      />
      
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] mt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamBanner})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-end pb-12 text-white">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-center max-w-2xl px-4"
          >
            Meet the passionate individuals who drive innovation and excellence at SAC-KGEC
          </motion.p>
        </div>
      </motion.div>

      {/* Team Sections */}
      <div className="container mx-auto px-4 max-w-7xl">
        <TeamSection title="Faculty Advisors" members={faculty} />
        <TeamSection title="Convenors" members={convenors} />
        <TeamSection title="Coordinators" members={coordinators} />
        <TeamSection title="Domain Leads" members={domainLeads}  />
        {/* <TeamSection title="Fourth Year Members" members={fourthYear} isDropdown={true} />
        <TeamSection title="Third Year Members" members={thirdYear} isDropdown={true} /> */}
      </div>

      <Footer />
    </div>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  })).isRequired,
  isDropdown: PropTypes.bool,
};

export default TeamPage;