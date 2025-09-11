/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To highlight active link

  // Framer Motion variants for mobile menu animation
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Framer Motion variants for nav items animation
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-200"
            >
              MR.SB
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 ${
                    location.pathname === link.path ? "text-indigo-600" : ""
                  }`}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                    initial={{
                      scaleX: location.pathname === link.path ? 1 : 0,
                    }}
                    animate={{
                      scaleX: location.pathname === link.path ? 1 : 0,
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-gray-700 hover:text-indigo-600 font-medium py-2 px-3 rounded-md hover:bg-indigo-50 transition-colors duration-200 ${
                        location.pathname === link.path
                          ? "text-indigo-600 bg-indigo-50"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
