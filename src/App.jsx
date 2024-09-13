import './App.css'
import Navbar from './Components/Navbar'
import HeroBanner from './Components/HeroBanner'
// import HeroText from './Components/HeroText'
import Features from './Components/Features'
import AboutSection from './Components/About'
import PortfolioSection from './Components/Portfolio'
import Team from './Components/Team'
import Testimonial from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { useRef } from 'react'

function App() {
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Navbar featuresRef={featuresRef} aboutRef={aboutRef} portfolioRef={portfolioRef} teamRef={teamRef} testimonialRef={testimonialRef} contactRef={contactRef} footerRef={footerRef}/>
      <HeroBanner/>
      {/* <HeroText/> */}
      <Features ref={featuresRef}/>
      <AboutSection ref={aboutRef}/>
      <PortfolioSection ref={portfolioRef}/>
      <Team ref={teamRef}/>
      <Testimonial ref={testimonialRef}/>
      <Contact ref={contactRef}/>
      <Footer ref={footerRef}/>
    </>
  )
}

export default App
