import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 100;
          const offsetPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 100;
        const offsetPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full bg-gray-900 text-white py-8 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p>Kalyani Government Engineering College</p>
            <p>Kalyani, Nadia</p>
            <p>West Bengal - 741235</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('convenors')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
            <a 
                href="https://github.com/SAC-KGEC"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors text-2xl"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/sac_kgec?igsh=MWJzN3dnMm1iNDFjMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors text-2xl"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/students-automobile-club-of-kgec/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} SAC-KGEC. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
