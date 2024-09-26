import React from "react";
import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/HeroBanner";
import Features from "../Components/Features";
import AboutSection from "../Components/About";
import PortfolioSection from "../Components/Portfolio";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonials";
import Contact from "../Components/Contact";
import { useEffect, useRef, useState } from "react";
import SocialLinks from "../Components/SocialLinks";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: useRef(null),
    features: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    team: useRef(null),
    testimonial: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = () => {
    const sectionIds = Object.keys(sections);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let activeId = "home";
    for (let id of sectionIds) {
      const section = sections[id].current;
      if (
        section &&
        section.offsetTop < scrollPosition &&
        section.offsetTop + section.clientHeight > scrollPosition
      ) {
        activeId = id;
      }
    }
    setActiveSection(activeId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col w-full">
      <Navbar
        sections={[
          { id: "home", ref: sections.home, label: "Home" },
          { id: "features", ref: sections.features, label: "Features" },
          { id: "about", ref: sections.about, label: "About" },
          {
            id: "portfolio",
            ref: sections.portfolio,
            label: "portfolio",
          },
          { id: "team", ref: sections.team, label: "Team" },
          {
            id: "testimonial",
            ref: sections.testimonial,
            label: "Testimonial",
          },
          { id: "contact", ref: sections.contact, label: "Contact" },
        ]}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />
      <SocialLinks/>
      <HeroBanner ref={sections.home} />
      <Features ref={sections.features}/>
      <AboutSection ref={sections.about} />
      <PortfolioSection ref={sections.portfolio} />
      <Team ref={sections.team} />
      <Testimonial ref={sections.testimonial} />
      <Contact ref={sections.contact} />
    </div>
  );
};

export default Home;
