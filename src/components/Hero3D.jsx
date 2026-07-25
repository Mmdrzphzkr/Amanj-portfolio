import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";

// ✅ Icons are defined OUTSIDE - never go near Canvas
const ArrowDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-accent"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
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
);

const BoltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-neonGreen"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// ✅ This component ONLY contains Three.js objects - no SVG or HTML
const Scene = () => (
  <>
    <ambientLight intensity={0.2} />
    <pointLight position={[10, 10, 10]} intensity={0.8} color="#6c63ff" />
    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
    <pointLight position={[0, 10, 0]} intensity={0.3} color="#00d4ff" />
    <Suspense fallback={null}>
      <ParticleField count={1500} />
      <FloatingGeometry />
    </Suspense>
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.5}
      maxPolarAngle={Math.PI / 1.8}
      minPolarAngle={Math.PI / 3}
    />
  </>
);

const Hero3D = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* ✅ Canvas is completely isolated in its own div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* ✅ Overlays - completely outside Canvas */}
      <div
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        className="bg-gradient-to-b from-primary/40 via-transparent to-primary pointer-events-none"
      />
      <div
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        className="bg-gradient-to-r from-primary/60 via-transparent to-primary/60 pointer-events-none"
      />

      {/* ✅ All HTML content - completely outside Canvas */}
      <div
        style={{ position: "relative", zIndex: 10 }}
        className="h-full flex flex-col items-center justify-center px-4 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <BoltIcon />
          <span className="font-mono text-xs text-gray-300 tracking-wider">
            FULL-STACK DEVELOPMENT TEAM
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl
            text-white leading-tight mb-2"
        >
          WE BUILD
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl
            leading-tight mb-6 gradient-text"
        >
          DIGITAL PRODUCTS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-gray-400 max-w-2xl mb-4 leading-relaxed"
        >
          Websites • Web Applications • Mobile Apps • Trading Bots
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-mono text-sm text-accent/70 mb-10 tracking-wider"
        >
          React &nbsp;|&nbsp; Next.js &nbsp;|&nbsp; .NET &nbsp;|&nbsp; Python
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="order" smooth duration={800} offset={-80}>
            <button className="btn-primary flex items-center gap-2">
              <CodeIcon />
              START A PROJECT
            </button>
          </Link>
          <Link to="projects" smooth duration={800} offset={-80}>
            <button className="btn-outline">VIEW OUR WORK</button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex gap-8 md:gap-16 mt-16"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "50+", label: "Projects Done" },
            { value: "3", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-2xl md:text-3xl gradient-text">
                {stat.value}
              </div>
              <div className="font-body text-xs md:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: "absolute", bottom: "2rem" }}
          className="left-1/2 -translate-x-1/2"
        >
          <Link to="about" smooth duration={800} offset={-80}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <span className="font-mono text-xs text-gray-500 tracking-widest">
                SCROLL
              </span>
              <ArrowDownIcon />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
