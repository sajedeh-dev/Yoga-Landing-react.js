import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import {fadeIn} from "../utils/motion"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const HEADER_OFFSET = 80; // ارتفاع هدر ثابتت

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About Us" },
    { to: "services", label: "Services" },
    { to: "testimonial", label: "Testimonial" },
  ];

  return (
    <motion.nav
    variants={fadeIn("down", 0.2)}
    initial = "hidden"
    whileInView ="show"
    viewport={{once:true}}
     className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16 ">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-[#303030] rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-[#FF862F] -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>

        {/* mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/* desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-HEADER_OFFSET}
              spy={true}
              onSetActive={(to) => setActiveLink(to)}
              className={`cursor-pointer text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5
                after:w-0 hover:after:w-full after:bg-orange-600  after:transition-all
                ${activeLink === link.to ? "text-orange-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* get in touch (desktop) */}
        <Link
          to="newsletter"
          smooth={true}
          duration={500}
          offset={-HEADER_OFFSET}
          spy={true}
          onSetActive={(to) => setActiveLink(to)}
          className="hidden md:block bg-orange-600  text-white py-2.5 px-3 rounded-lg hover:bg-orange-500  text-sm font-medium transition-all hover:shadow-lg hover:shadow-orange-300 cursor-pointer"
        >
          Get in touch
        </Link>
      </div>

      {/* mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-top border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-HEADER_OFFSET}
                spy={true}
                onSetActive={(to) => setActiveLink(to)}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium py-2 cursor-pointer ${
                  activeLink === link.to ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="newsletter"
              smooth={true}
              duration={500}
              offset={-HEADER_OFFSET}
              spy={true}
              onSetActive={(to) => setActiveLink(to)}
              onClick={() => setIsMenuOpen(false)}
              className="w-full block text-center bg-[#FF862F] text-white py-2.5 px-3 rounded-lg hover:bg-orange-600 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100 cursor-pointer"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
