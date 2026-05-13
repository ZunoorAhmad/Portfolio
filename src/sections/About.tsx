import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "../components/SectionReveal";

function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 2;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-colors">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-muted font-medium">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <SectionReveal id="about" className="bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8">
            Zunoor Ahmad — Frontend &amp; full stack development
          </h3>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted mb-12 leading-relaxed">
            <p>
              I&apos;m Zunoor Ahmad, a full stack developer focused on modern web applications, responsive UI/UX, and scalable SaaS-style products. I started my journey into web development driven by a simple belief: technology should make people&apos;s lives easier. At Dev Blends, I&apos;ve had the privilege of building applications that impact thousands of users daily, from education management systems to real-time video collaboration tools.
            </p>
            <p>
              What excites me most is solving complex problems with clean, maintainable code. Whether it's integrating third-party APIs, optimizing performance, or architecting scalable backends, I bring both technical expertise and a genuine care for code quality. I believe in continuous learning, collaborative problem-solving, and delivering solutions that truly matter.
            </p>
            <p>
              Currently pursuing a B.S. in Computer Science while actively working on projects that challenge me to grow. When I'm not coding, you'll find me exploring new technologies or mentoring junior developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Counter value={5} suffix="+" label="Years Experience" />
            <Counter value={50} suffix="+" label="Projects Completed" />
            <Counter value={20} suffix="+" label="Technologies Used" />
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
