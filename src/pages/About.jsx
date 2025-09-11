import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  // Check if elements are in view
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });
  const educationInView = useInView(educationRef, {
    once: true,
    margin: "-100px",
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.1,
      },
    },
  };

  // Skills data
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          level: 75,
          icon: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Java",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Node.js",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python",
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Express.js",
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        {
          name: "MySQL",
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          level: 65,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Git",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          level: 60,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
      ],
    },
  ];

  // Experience data
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Tech Solutions Inc.",
      period: "Jan 2024",
      description:
        "Developed and maintained web applications using React, Spring Boot, and MySQL. Implemented responsive designs and optimized application performance.",
      achievements: [
        "Reduced page load time by 40% through code optimization",
        "Led a team of 3 developers on a major project",
        "Integrated 3+ third-party APIs successfully",
      ],
    },
    {
      role: "Full Stack Java Developer",
      company: "Hruta Solutions",
      period: "Jan 2025",
      description:
        "Assisted in developing backend services using Spring Boot and gained experience in database design and API development.",
      achievements: [
        "Developed RESTful APIs for a customer management system",
        "Optimized database queries, improving performance by 30%",
        "Received outstanding performance review",
      ],
    },
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Pratap college, Amalner",
      period: "2022 - 2025",
      description:
        "Graduated with honors. Focused on software engineering, algorithms, and data structures. Completed several projects in web development.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Sheryians Coding School",
      period: "2023",
      description:
        "Intensive 6-month program covering HTML, CSS, JavaScript, React, Node.js, and database management. Built multiple full-stack applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        {/* About Section */}
        <motion.section
          ref={aboutRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h2>
            <p className="text-gray-600 mb-4">
              I'm a passionate full-stack developer with expertise in both
              frontend and backend technologies. My journey in web development
              started 3 years ago, and since then I've been dedicated to
              creating efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through tech blogs and tutorials. I believe in continuous learning
              and staying updated with the latest industry trends.
            </p>
            <div className="flex gap-4">
              <a
                href="../assets/resume_UpSkill.pdf"
                download="Web_Development_CV.pdf"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Web Development CV
              </a>
              <a
                href="../assets/Sachin_Badgujar_Java_full_stack_resume.pdf"
                download="Sachin_Badgujar_Java_Full_Stack_Resume.pdf"
                className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                Java CV
              </a>
            </div>
          </motion.div>

          <motion.div className="relative" variants={fadeIn}>
            <div className="w-full h-[550px] bg-indigo-100 rounded-2xl overflow-hidden">
              <img
                src="/sky-shirt.png"
                alt="Sachin Badgujar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg w-3/4">
              <h3 className="font-semibold text-gray-900 mb-2">
                4+ Years of Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Building web applications with modern technologies
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          className="mb-20"
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-2 text-center"
            variants={fadeIn}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            I've worked with a variety of technologies and continue to expand my
            skill set
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-10 h-10 mr-4 bg-gray-100 rounded-lg flex items-center justify-center p-2">
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
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          ref={experienceRef}
          className="mb-20"
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-2 text-center"
            variants={fadeIn}
          >
            Work Experience
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            My professional journey and the roles I've undertaken
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                variants={fadeIn}
                whileHover={{ y: -3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.role}
                  </h3>
                  <span className="text-indigo-600 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          ref={educationRef}
          className="mb-20"
          initial="hidden"
          animate={educationInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-2 text-center"
            variants={fadeIn}
          >
            Education
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            My academic background and continuous learning journey
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                variants={fadeIn}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-indigo-600 font-medium mb-4">{edu.period}</p>
                <p className="text-gray-600">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center bg-indigo-50 py-12 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            Get In Touch
          </Link>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
