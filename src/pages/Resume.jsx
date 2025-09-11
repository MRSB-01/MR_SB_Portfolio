import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Footer from "../components/Footer";

const Resume = () => {
  // Refs for sections to trigger scroll animation
  const resumeRef = useRef(null);
  const resumeInView = useInView(resumeRef, { once: true, margin: "-100px" });

  // Resume data
  const personalInfo = {
    name: "Sachin Badgujar",
    title: "Full Stack Developer",
    photo: "/profile.png",
    email: "sachinbadgujar7777@gmail.com",
    phone: "+91 9322017280",
    location: "Pune, India",
    linkedin: "https://www.linkedin.com/in/sachin-badgujar-06102b2a0/",
    github: "https://github.com/MRSB-01",
    summary:
      "Passionate full-stack developer with expertise in creating scalable web applications using modern technologies. Focused on delivering robust solutions with clean code and excellent user experiences.",
  };

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Pratap college, Amalner",
      period: "2012 – 2025",
      grade: "9.2 CGPA",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "M.S Mundada school",
      period: "2019 – 2020",
      grade: "76%",
    },
  ];

  const skills = [
    {
      name: "React",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Java",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "from-red-500 to-red-700",
    },
    {
      name: "Spring Boot",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Tailwind CSS",
      level: 75,
      icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
      color: "from-teal-500 to-teal-700",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      name: "MySQL",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-700 to-blue-900",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer Intern",
      company: "Tech Solutions Inc.",
      period: "Jan 2024",
      description:
        "Developed and maintained web applications using React and Spring Boot. Implemented responsive designs and optimized application performance.",
      achievements: [
        "Reduced page load time by 40% through code optimization",
        "Led a team of 3 developers on a major project",
        "Integrated 3+ third-party APIs successfully",
      ],
    },
    {
      role: "Full Stack Java Developer",
      company: "CodeCraft Solutions",
      period: "Jan 2025",
      description: "Assisted in building RESTful APIs and database management.",
      achievements: [
        "Developed RESTful APIs for a customer management system",
        "Optimized database queries, improving performance by 30%",
      ],
    },
  ];

  const projects = [
    {
      title: "Authentication System",
      link: "#",
      description: "Secure authentication platform with Spring Boot and React.",
      technologies: ["React", "Spring Boot", "MySQL", "Hibernate"],
    },
    {
      title: "Smart Contact Manager",
      link: "#",
      description: "Contact management app with CRUD operations.",
      technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Real-Time Chat Application",
      link: "#",
      description: "MERN stack real-time chat app.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardHoverVariants = {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Resume</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my education, skills, and professional
            experience
          </p>
        </motion.div>

        <motion.div
          ref={resumeRef}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={resumeInView ? "visible" : "hidden"}
        >
          {/* Left Column - Profile & Contact */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={itemVariants}
          >
            {/* Profile Card */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-indigo-400 to-purple-500 p-1">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {personalInfo.name}
              </h2>
              <p className="text-indigo-600 font-medium text-center mb-6">
                {personalInfo.title}
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
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
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-700 text-sm hover:text-indigo-600"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{personalInfo.phone}</span>
                </div>

                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
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
                  <span className="text-gray-700">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-lg hover:bg-indigo-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </motion.a>
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-lg hover:bg-indigo-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="h-5 w-5"
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 mr-3 bg-gray-100 rounded-lg flex items-center justify-center p-1">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/20/cccccc/999999?text=?";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-indigo-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={itemVariants}
          >
            {/* Summary Card */}
            <motion.div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
              <p className="text-indigo-100">{personalInfo.summary}</p>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              variants={cardHoverVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-indigo-200 before:rounded-full before:border-4 before:border-white before:shadow"
                  >
                    <h4 className="text-lg font-bold text-gray-800">
                      {exp.role}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden sm:block sm:mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{exp.description}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exp.achievements.map((achievement, aIndex) => (
                        <li key={aIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education & Projects Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education Card */}
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-purple-200 before:rounded-full before:border-4 before:border-white before:shadow"
                    >
                      <h4 className="text-lg font-bold text-gray-800">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 text-sm">{edu.period}</p>
                      <p className="text-indigo-600 font-medium mt-1">
                        {edu.grade}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Projects Card */}
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                variants={cardHoverVariants}
                whileHover="hover"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Projects
                </h3>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-bold text-gray-800">
                        <a
                          href={project.link}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          {project.title}
                        </a>
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="../assets/Sachin_Badgujar_Java_full_stack_resume.pdf"
            download="Sachin_Badgujar_Java_Full_Stack_Resume.pdf"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
