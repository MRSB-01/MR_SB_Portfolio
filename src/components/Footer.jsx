import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  // Footer data
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "API Development",
    "Database Design",
    "UI/UX Design",
    "Technical Consulting",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/MRSB-01",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sachin-badgujar-06102b2a0/",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
    },
    {
      name: "Email",
      url: "mailto:sachinbadgujar7777@gmail.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
  ];

  const technologies = [
    "React",
    "Java",
    "Spring Boot",
    "JavaScript",
    "Tailwind CSS",
    "MySQL",
    "Node.js",
    "Python",
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Sachin Badgujar</h3>
            <p className="text-gray-400 mb-6">
              Full Stack Developer specializing in creating performant, scalable
              web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/20/718096/ffffff?text=?";
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-400 flex items-center"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="bg-gray-800 px-3 py-1 rounded-md text-sm text-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-indigo-900 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">sachinbadgujar7777@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-indigo-900 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Pune, India</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-indigo-900 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Working Hours</p>
                <p className="text-white">Mon - Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            © {new Date().getFullYear()} Sachin Badgujar. All rights reserved.
          </p>
          <p className="mt-2">Designed and built with React & Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
