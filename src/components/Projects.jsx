import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink, HiEye } from "react-icons/hi";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "website",
    image: "🛒",
    desc: "Full-featured online store with payment integration, admin panel, and inventory management.",
    tech: ["React", "Next.js", ".NET", "PostgreSQL"],
    color: "#6c63ff",
  },
  {
    title: "Crypto Trading Bot",
    category: "bot",
    image: "📈",
    desc: "Automated cryptocurrency trading bot with smart algorithms, backtesting, and risk management.",
    tech: ["Python", "API", "WebSocket", "ML"],
    color: "#00ff88",
  },
  {
    title: "SaaS Dashboard",
    category: "webapp",
    image: "📊",
    desc: "Analytics dashboard with real-time data visualization, user management, and reporting tools.",
    tech: ["React", "TypeScript", ".NET", "Charts"],
    color: "#00d4ff",
  },
  {
    title: "Food Delivery App",
    category: "app",
    image: "🍕",
    desc: "Mobile food ordering application with real-time tracking, payments, and restaurant management.",
    tech: ["React Native", "Node.js", "MongoDB"],
    color: "#ff006e",
  },
  {
    title: "Forex Signal Bot",
    category: "bot",
    image: "💹",
    desc: "Forex market analysis bot providing trading signals based on technical indicators and AI predictions.",
    tech: ["Python", "Pandas", "TensorFlow", "API"],
    color: "#6c63ff",
  },
  {
    title: "Portfolio Website",
    category: "website",
    image: "🌐",
    desc: "Modern 3D portfolio website with Three.js animations, glass morphism, and smooth interactions.",
    tech: ["React", "Three.js", "Framer Motion"],
    color: "#00ff88",
  },
  {
    title: "Healthcare Management",
    category: "webapp",
    image: "🏥",
    desc: "Patient management system with appointment scheduling, medical records, and billing integration.",
    tech: ["Next.js", ".NET", "PostgreSQL", "Docker"],
    color: "#00d4ff",
  },
  {
    title: "Fitness Tracker App",
    category: "app",
    image: "💪",
    desc: "Fitness tracking application with workout plans, progress charts, and social features.",
    tech: ["React Native", "Firebase", "Charts"],
    color: "#ff006e",
  },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Websites", value: "website" },
  { name: "Web Apps", value: "webapp" },
  { name: "Mobile Apps", value: "app" },
  { name: "Trading Bots", value: "bot" },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of our recent work and creations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-xl font-heading text-xs font-semibold 
                tracking-wider transition-all duration-300 ${
                  filter === cat.value
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "glass text-gray-400 hover:text-white"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="tech-card group overflow-hidden"
              >
                {/* Project Image Placeholder */}
                <div
                  className="h-36 rounded-xl mb-4 flex items-center justify-center text-5xl
                    transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                    border: `1px solid ${project.color}20`,
                  }}
                >
                  {project.image}
                </div>

                <h3 className="font-heading font-bold text-white text-sm mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-gray-500 leading-relaxed mb-3">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded font-mono text-[9px]"
                      style={{
                        background: `${project.color}10`,
                        color: project.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2 rounded-lg font-heading text-[10px] font-semibold 
                      tracking-wider flex items-center justify-center gap-1 transition-all duration-300
                      hover:bg-accent/20"
                    style={{
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                    }}
                  >
                    <HiEye /> VIEW
                  </button>
                  <button
                    className="flex-1 py-2 rounded-lg font-heading text-[10px] font-semibold 
                      tracking-wider flex items-center justify-center gap-1 text-white 
                      transition-all duration-300 hover:opacity-80"
                    style={{ background: project.color }}
                  >
                    <HiExternalLink /> LIVE
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
