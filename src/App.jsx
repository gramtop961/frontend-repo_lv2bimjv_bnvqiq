import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white selection:bg-cyan-400/30 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero3D />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm bg-[#0b0f14]">
        © {new Date().getFullYear()} MyPortfolio — Crafted with React, motion, and 3D.
      </footer>
    </div>
  );
}
