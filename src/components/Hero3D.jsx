import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden bg-[#0b0f14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#0b0f14] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 lg:pt-48">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
        >
          Building playful, modern experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/80 text-base md:text-lg"
        >
          I craft interactive web apps with 3D, motion, and delightful details. Scroll to explore selected work and get in touch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 px-6 py-3 transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
