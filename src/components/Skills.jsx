import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiFigma,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 90, color: "#ffffff" },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        level: 92,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 85,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 90,
        color: "#06B6D4",
      },
      { name: "HTML5", icon: <SiHtml5 />, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, level: 93, color: "#1572B6" },
      { name: "Redux", icon: <SiRedux />, level: 82, color: "#764ABC" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: ".NET", icon: <SiDotnet />, level: 88, color: "#512BD4" },
      { name: "Python", icon: <SiPython />, level: 87, color: "#3776AB" },
      { name: "Node.js", icon: <SiNodedotjs />, level: 80, color: "#339933" },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 82, color: "#47A248" },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: 78,
        color: "#4169E1",
      },
      { name: "Docker", icon: <SiDocker />, level: 72, color: "#2496ED" },
      { name: "Git", icon: <SiGit />, level: 90, color: "#F05032" },
      { name: "Figma", icon: <SiFigma />, level: 65, color: "#F24E1E" },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const activeSkills =
    skillCategories.find((c) => c.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-2 rounded-xl font-heading text-sm font-semibold tracking-wider 
                transition-all duration-300 ${
                  activeCategory === cat.category
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "glass text-gray-400 hover:text-white"
                }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="tech-card group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="text-2xl transition-all duration-300 group-hover:scale-125"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">
                    {skill.name}
                  </h4>
                  <span
                    className="font-mono text-xs"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="skill-bar-bg h-2">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
