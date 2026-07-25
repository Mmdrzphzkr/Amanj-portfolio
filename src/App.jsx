import React, { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Services = lazy(() => import("./components/Services"));
const Experience = lazy(() => import("./components/Experience"));
const Team = lazy(() => import("./components/Team"));
const Projects = lazy(() => import("./components/Projects"));
const OrderForm = lazy(() => import("./components/OrderForm"));
const Contact = lazy(() => import("./components/Contact"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen bg-primary">
      <div className="noise-overlay" />
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none z-0" />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#12122b",
            color: "#e0e0ff",
            border: "1px solid rgba(108, 99, 255, 0.3)",
            fontFamily: "'Rajdhani', sans-serif",
          },
        }}
      />

      {/* Navbar is OUTSIDE everything - completely isolated */}
      <Navbar />

      {/* Hero3D has its own isolated Canvas */}
      <Hero3D />

      {/* All other sections are plain React - no Canvas context */}
      <main className="relative z-10">
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Team />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <OrderForm />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
