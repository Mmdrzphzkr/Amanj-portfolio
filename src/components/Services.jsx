import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiGlobeAlt,
  HiDeviceMobile,
  HiChartBar,
  HiCog,
  HiShieldCheck,
  HiLightningBolt,
} from "react-icons/hi";

const services = [
  {
    icon: <HiGlobeAlt className="text-3xl" />,
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with React, Next.js, and .NET. SEO-optimized and blazing fast.",
    tags: ["React", "Next.js", ".NET", "Responsive"],
    color: "#6c63ff",
    gradient: "from-accent/20 to-transparent",
  },
  {
    icon: <HiDeviceMobile className="text-3xl" />,
    title: "App Development",
    desc: "Cross-platform mobile applications with smooth UX and native performance. From concept to App Store deployment.",
    tags: ["React Native", "iOS", "Android", "PWA"],
    color: "#00ff88",
    gradient: "from-neonGreen/20 to-transparent",
  },
  {
    icon: <HiChartBar className="text-3xl" />,
    title: "Trading Bots",
    desc: "Automated trading systems with smart algorithms, backtesting capabilities, and real-time market analysis.",
    tags: ["Python", "API", "Algorithms", "Analytics"],
    color: "#00d4ff",
    gradient: "from-neonBlue/20 to-transparent",
  },
  {
    icon: <HiCog className="text-3xl" />,
    title: "Backend Systems",
    desc: "Robust server-side solutions, REST APIs, database architecture, and cloud deployment infrastructure.",
    tags: [".NET", "Node.js", "PostgreSQL", "Docker"],
    color: "#ff006e",
    gradient: "from-neonPink/20 to-transparent",
  },
  {
    icon: <HiShieldCheck className="text-3xl" />,
    title: "Security & Optimization",
    desc: "Performance optimization, security audits, and best practices implementation for existing applications.",
    tags: ["Security", "Performance", "Audit", "SSL"],
    color: "#6c63ff",
    gradient: "from-accent/20 to-transparent",
  },
  {
    icon: <HiLightningBolt className="text-3xl" />,
    title: "Consulting",
    desc: "Technical consulting for startups and businesses. Architecture planning, tech stack selection, and team guidance.",
    tags: ["Strategy", "Architecture", "Planning", "Review"],
    color: "#00ff88",
    gradient: "from-neonGreen/20 to-transparent",
  },
];

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            What we offer to bring your vision to reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="tech-card group relative overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}
                style={{ background: service.color }}
              />

              <div className="relative z-10">
                <div
                  className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  {service.title}
                </h3>

                <p className="font-body text-sm text-gray-400 leading-relaxed mb-4">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md font-mono text-[10px] tracking-wider"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
