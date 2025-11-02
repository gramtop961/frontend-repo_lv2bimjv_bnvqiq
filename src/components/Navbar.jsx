import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = "px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Rocket className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold">MyPortfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#contact" className={linkClass}>Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 text-white/80 hover:text-white"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 text-white/80 hover:text-white"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:hello@example.com" className="p-2 text-white/80 hover:text-white"><Mail className="w-5 h-5" /></a>
        </div>

        <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            <a href="#projects" onClick={() => setOpen(false)} className="py-2 text-white/90">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-white/90">Contact</a>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-1 text-white/80"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1 text-white/80"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:hello@example.com" className="p-1 text-white/80"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
