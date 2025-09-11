import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import { div } from "framer-motion/client";

const Skills = ({
  title = "Skills Roadmap",
  description = "Here's a visual representation of my technical expertise",
  showFilters = true,
}) => {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  // Skill categories for filtering
  const skillCategories = ["All", "Frontend", "Backend", "Database", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Skills data with icons, levels, and categories
  const skills = [
    {
      name: "React",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description:
        "Building interactive UIs with hooks, context, and state management",
      color: "from-blue-500 to-blue-600",
      category: "Frontend",
    },
    {
      name: "Java",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      description:
        "Object-oriented programming, data structures, and algorithms",
      color: "from-red-500 to-red-600",
      category: "Backend",
    },
    {
      name: "Spring Boot",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      description: "Developing RESTful APIs and microservices architecture",
      color: "from-green-500 to-green-600",
      category: "Backend",
    },
    {
      name: "Tailwind CSS",
      level: 75,
      icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
      description:
        "Creating responsive and modern UI designs with utility-first CSS",
      color: "from-teal-500 to-teal-600",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description:
        "ES6+ features, asynchronous programming, and DOM manipulation",
      color: "from-yellow-500 to-yellow-600",
      category: "Frontend",
    },
    {
      name: "MySQL",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description:
        "Database design, query optimization, and relational data modeling",
      color: "from-blue-700 to-blue-800",
      category: "Database",
    },
    {
      name: "Node.js",
      level: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description:
        "Server-side JavaScript runtime for building scalable network applications",
      color: "from-green-600 to-green-700",
      category: "Backend",
    },
    {
      name: "Python",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description:
        "Versatile programming for web development, data analysis, and automation",
      color: "from-blue-700 to-blue-800",
      category: "Backend",
    },
    {
      name: "MongoDB",
      level: 65,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description:
        "NoSQL database for modern applications with flexible data models",
      color: "from-green-700 to-green-800",
      category: "Database",
    },
    {
      name: "Git",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description:
        "Version control system for tracking changes and collaborating on code",
      color: "from-orange-500 to-orange-600",
      category: "Tools",
    },
    {
      name: "Docker",
      level: 60,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      description:
        "Containerization platform for developing, shipping, and running applications",
      color: "from-blue-500 to-blue-600",
      category: "Tools",
    },

    {
      name: "Vercel",
      level: 55,
      icon: "https://devicon-website.vercel.app/api/nextjs/original.svg",
      description:
        "Cloud computing services for deploying and scaling applications",
      color: "from-yellow-600 to-yellow-700",
      category: "Tools",
    },
    {
      name: "GitHub",
      level: 55,
      icon: "https://devicon-website.vercel.app/api/github/original.svg",
      description:
        "Version control system for tracking changes and collaborating on code",
      color: "from-yellow-600 to-yellow-700",
      category: "Tools",
    },
  ];

  // Filter skills based on category
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 },
    }),
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.section
        ref={skillsRef}
        className="py-16 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-4"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* Skill Category Filters */}
          {showFilters && (
            <motion.div
              className="flex justify-center mb-12 flex-wrap gap-3"
              variants={itemVariants}
            >
              {skillCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/24/cccccc/999999?text=?";
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {skill.description}
                </p>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Proficiency
                  </span>
                  <span className="text-sm font-bold text-indigo-600">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    variants={progressVariants}
                    custom={skill.level}
                  />
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state if no skills match filter */}
          {filteredSkills.length === 0 && (
            <motion.div className="text-center py-12" variants={itemVariants}>
              <div className="bg-gray-100 p-8 rounded-xl max-w-md mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No skills found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different category to view more skills.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Skills;
