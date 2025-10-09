import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Footer from "../components/Footer";

const Home = () => {
  // Refs for scroll animations
  const roadmapRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);

  // Check if elements are in view
  const roadmapInView = useInView(roadmapRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (i) => ({
      width: `${i}%`,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 },
    }),
  };

  // Skill categories for filtering
  const skillCategories = ["All", "Frontend", "Backend", "Database"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Skills data with image icons
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
  ];

  // Filter skills based on category
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Stats data
  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "3", label: "Years Experience" },
    { number: "10+", label: "Happy Clients" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl mt-24 lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Sachin Badgujar</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
              Full Stack Developer & Java Specialist
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              I create scalable web applications using modern technologies,
              delivering robust solutions tailored to client needs with a focus
              on performance and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto bg-indigo-100 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/profile.png"
                alt="Sachin Badgujar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
                }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-white"
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            variants={fadeIn}
          >
            My Achievements
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <p className="text-4xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={roadmapRef}
        className="py-16 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        animate={roadmapInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-4"
            variants={fadeIn}
          >
            My Technical Skills
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto mb-10"
            variants={fadeIn}
          >
            Here's a showcase of my technical expertise and proficiency levels
            across various technologies
          </motion.p>

          {/* Skill Category Filters */}
          <motion.div
            className="flex justify-center mb-12 flex-wrap gap-3"
            variants={fadeIn}
          >
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center bg-gray-100 rounded-lg p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/40/cccccc/999999?text=?" +
                          skill.name;
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
                    animate={roadmapInView ? "visible" : "hidden"}
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
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="py-16 bg-white"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-gray-600 mb-4">
                I'm a passionate full-stack developer with expertise in both
                frontend and backend technologies. My journey in web development
                started 3 years ago, and since then I've been dedicated to
                creating efficient, scalable, and user-friendly applications.
              </p>
              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and tutorials. I believe in continuous
                learning and staying updated with the latest industry trends.
              </p>
              <div className="flex gap-4">
                <a
                  href="/MERN_resume_sachin_badgujar.pdf"
                  download="Sachin_Badgujar_Web_Development_Resume.pdf"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Web Development CV
                </a>

                <a
                  href="/Java_full_stack_resume_sachin_badgujar.pdf"
                  download="Sachin_Badgujar_Java_Full_Stack_Resume.pdf"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Java CV
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-100 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                <p className="text-gray-600 text-sm">
                  React, JavaScript, Tailwind CSS, HTML5, CSS3
                </p>
              </div>
              <div className="bg-purple-100 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                <p className="text-gray-600 text-sm">
                  Java, Spring Boot, Node.js, REST APIs
                </p>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
                <p className="text-gray-600 text-sm">
                  MySQL, MongoDB, PostgreSQL, Firebase
                </p>
              </div>
              <div className="bg-teal-100 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
                <p className="text-gray-600 text-sm">
                  Git, Docker, AWS, VS Code, IntelliJ
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            I'm available for freelance work and full-time opportunities. Let's
            discuss how I can help bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-indigo-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
          >
            Get In Touch
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
