import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { experiences } from "../data/portfolio";

export function Experience() {
  return (
    <SectionReveal id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Professional <span className="text-gradient">Journey</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Timeline Line */}
          <motion.div
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-transparent origin-top md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 md:-translate-x-1/2 -translate-x-[7px]"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: 0.5 + idx * 0.3 }}
                  />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <motion.div
                    className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: 0.2 + idx * 0.3, duration: 0.6 }}
                  >
                    <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors shadow-lg relative">
                      {/* Connecting line for desktop */}
                      <div className={`hidden md:block absolute top-8 w-12 h-[2px] bg-border ${isEven ? '-left-12' : '-right-12'}`} />
                      
                      <div className="text-primary font-mono text-sm mb-2">{exp.period}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <div className="text-muted font-semibold text-sm mb-4">{exp.company}</div>
                      <p className="text-muted leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
