import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0f14] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-white/70">Have a project in mind or just want to say hi? I’m open to freelance work and collaborations.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Hi, I'm ${data.get('name')}`);
            const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('email')}`);
            window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
          }}
          className="mt-8 grid grid-cols-1 gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="email" name="email" required placeholder="Email address" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <textarea name="message" required rows={5} placeholder="Tell me about your project..." className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" />

          <button type="submit" className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
            <Send className="w-4 h-4" /> Send Message
          </button>

          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <Mail className="w-4 h-4" /> Or email me directly at hello@example.com
          </div>
        </motion.form>
      </div>
    </section>
  );
}
