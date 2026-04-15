import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <SectionReveal id="projects" className="bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl bg-surface border border-border flex flex-col ${
                project.featured ? "lg:col-span-2 lg:flex-row" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Image Placeholder area */}
              <div
                className={`relative bg-linear-to-br ${project.gradient} border-b lg:border-b-0 lg:border-r border-border overflow-hidden ${
                  project.featured ? "lg:w-1/2 min-h-[300px]" : "h-[200px]"
                } flex items-center justify-center p-8`}
              >
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                <div className="relative z-10 text-4xl text-primary/50 font-black tracking-widest uppercase opacity-20 transform -rotate-12 select-none">
                  {project.tech}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live preview for ${project.title}`}
                    className="p-3 rounded-full bg-primary text-white hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a
                    href={project.repoUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open repository for ${project.title}`}
                    className="p-3 rounded-full bg-surface text-foreground border border-border hover:scale-110 transition-transform"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Content area */}
              <div className={`p-8 flex flex-col justify-between ${project.featured ? "lg:w-1/2" : ""}`}>
                <div>
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    {project.tech}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-background border border-border text-muted"
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
    </SectionReveal>
  );
}
