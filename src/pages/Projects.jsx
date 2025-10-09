import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Footer from "../components/Footer";


const Projects = () => {
  // Ref for projects section to trigger scroll animation
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  // Project data with tech stack icons
  const projects = [
    {
      id: 1,
      title: "Authentication System",
      description:
        "Built a secure authentication platform with Spring Boot, React, Hibernate, Tailwind CSS, and MySQL, integrated Brevo for email verification and notifications.",
      techStack: [
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Hibernate",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
        },
      ],
      period: "Oct 2024 – Dec 2024",
      category: "Full Stack",
      liveDemo: "https://authify-frontend-chi.vercel.app/",
      github: "https://github.com/MRSB-01/Authify-frontend",
    },
    {
      id: 2,
      title: "First Information Report (FIR)",
      description:
        "Online First Information Report (FIR) management platform built with React, Node.js, Express, MongoDB, Tailwind CSS, and Zod for validation. Deployed on Vercel.",
      techStack: [
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Hibernate",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
        },
      ],
      period: "Aug 2024 – Oct 2024",
      category: "Full Stack",
      liveDemo: "https://fir-app-frontend.vercel.app/",
      github: "https://github.com/MRSB-01/FIR-app-frontend",
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description:
        "Built a real-time chat application during my graduation using the MERN stack. The app allows users to sign up, log in, and chat in real-time with others in a clean and responsive UI.",
      techStack: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Socket.io",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        },
      ],
      period: "Dec 2024 – Feb 2025",
      category: "Full Stack",
      liveDemo: "https://chat-app-cyan-ten.vercel.app/",
      github: "https://github.com/MRSB-01/chat-app",
    },
    {
      id: 4,
      title: "AI Interview Mocker",
      description:
        "Integrated GenAI API to generate interview questions and simulate HR/technical interview conversations.",
      techStack: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Gemini AI",
          icon: "https://devicon-website.vercel.app/api/google/original.svg",
        },
      ],
      period: "Feb 2024 – Jun 2025",
      category: "AI Integration",
      liveDemo: "https://ai-interview-mocker-inky.vercel.app/",
      github: "https://github.com/VM-2004/AI-Interview-mocker",
    },
    {
      id: 5,
      title: "AI Image Enhancer",
      description:
        "Built a web application that enhances and improves image quality using the PicWish AI API. Users can upload low-quality images and receive enhanced, clearer versions within seconds.",
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PicWish API",
          icon: "https://devicon-website.vercel.app/api/fastapi/original.svg",
        },
      ],
      period: "Mar 2024 – May 2025",
      category: "AI Integration",
      liveDemo: "https://ai-image-enhancer-three.vercel.app/",
      github: "https://github.com/MRSB-01/AI-Image-Enhancer/tree/main",
    },
    {
      id: 6,
      title: "Droply – Cloud Storage SaaS",
      description:
        "Droply is a modern cloud storage SaaS application that allows users to securely upload, store, and manage files online.",
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Cloud",
          icon: "https://devicon-website.vercel.app/api/googlecloud/original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
        },
      ],
      period: "Jan 2025 – Present",
      category: "SaaS",
      liveDemo: "https://droply-eight.vercel.app/",
      github: "https://github.com/MRSB-01/Droply/tree/main",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work, demonstrating skills in full-stack
            development, AI integration, and SaaS solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              variants={itemVariants}
              whileHover="hover"
              custom={hoverVariants}
            >
              <div className="p-6">
                {/* Project Category */}
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full mb-4">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Project Period */}
                <p className="text-sm text-gray-500 mb-4">{project.period}</p>

                {/* Project Description */}
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1 rounded-md"
                        title={tech.name}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-4 h-4 mr-2"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/16/cccccc/999999?text=?";
                          }}
                        />
                        <span className="text-xs text-gray-700">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex justify-between">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="flex items-center text-gray-600 hover:text-gray-900 font-medium text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            I’m excited to work on your next project. Let’s connect!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
