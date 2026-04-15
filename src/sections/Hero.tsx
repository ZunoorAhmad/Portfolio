import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { ArrowRight, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Hero() {
  const roles = portfolioData.hero.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <SectionReveal id="home" className="min-h-[90vh] flex flex-col justify-center relative">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            🚀 {portfolioData.hero.availability}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-foreground">
            {portfolioData.hero.title} <br />
            <span className="text-muted text-4xl md:text-5xl lg:text-6xl font-bold block mt-2">
              {portfolioData.hero.subtitle}
            </span>
          </h1>

          <div className="h-12 md:h-16 text-2xl md:text-4xl font-semibold text-gradient mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                {roles[currentRoleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            {portfolioData.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-surface/50 text-foreground rounded-full font-medium transition-all hover:bg-surface hover:border-primary/50"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
