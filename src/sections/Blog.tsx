import { motion } from "framer-motion";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";
import { blogArticles } from "../data/portfolio";

export function Blog() {
  return (
    <SectionReveal id="blog">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all articles <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="space-y-6">
          {blogArticles.map((article, idx) => (
            <motion.a
              key={idx}
              href={article.url || "#"}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 md:p-8 bg-surface rounded-2xl border border-border hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted mb-3 font-mono">
                    <span className="flex items-center gap-1 text-primary">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-background border border-border text-xs uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-muted group-hover:text-white group-hover:bg-primary transition-all duration-300 group-hover:scale-110 shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer"
          className="mt-8 flex md:hidden items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        >
            View all articles <ArrowUpRight size={18} />
          </a>
      </div>
    </SectionReveal>
  );
}
