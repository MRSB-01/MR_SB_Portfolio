import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 graphic */}
        <motion.div
          className="relative   mt-30"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="relative inline-block">
            <svg
              className="w-48 h-48 mx-auto"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4F46E5"
                d="M45,-59.3C59.4,-49.5,72.5,-36.9,76.8,-20.7C81.1,-4.5,76.5,15.3,66.8,31.8C57.1,48.3,42.3,61.5,25.2,68.7C8.1,75.9,-11.3,77.1,-28.2,71.2C-45.1,65.3,-59.4,52.3,-68,35.4C-76.6,18.5,-79.5,-2.3,-75.1,-20.8C-70.8,-39.3,-59.2,-55.5,-44.3,-65.1C-29.5,-74.7,-11.5,-77.7,3.5,-82.2C18.5,-86.7,30.7,-92.7,45,-59.3Z"
                transform="translate(100 100)"
              />
            </svg>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-6xl font-bold text-white">404</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h1>

        <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
          Oops! The page you're looking for seems to have wandered off into the
          digital void.
        </motion.p>

        {/* Suggested actions */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-8"
          variants={itemVariants}
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What can you do?
          </h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Return to the homepage</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Explore our navigation menu</span>
            </li>
          </ul>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-200"
          >
            Go Back
          </button>
        </motion.div>

        {/* Additional help */}
        <motion.div
          className="mt-8 text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>
            Need help?{" "}
            <a
              href="/contact"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
