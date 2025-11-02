import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    tag: 'Web App',
    desc: 'Live metrics with websockets, charts, and keyboard-driven UX.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: '3D Product Configurator',
    tag: '3D / WebGL',
    desc: 'Customize materials and lighting with a responsive, mobile-first UI.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Marketing Microsite',
    tag: 'Website',
    desc: 'Animated landing with scroll-based reveals and subtle parallax.',
    href: '#',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1400&auto=format&fit=crop',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0b0f14] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-white/70 max-w-2xl">A snapshot of recent projects focusing on performance, usability, and motion.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.a
              key={i}
              variants={item}
              href={p.href}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-cyan-300/80">{p.tag}</div>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white" />
                </div>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-transparent to-[#0b0f14]" />
    </section>
  );
}
