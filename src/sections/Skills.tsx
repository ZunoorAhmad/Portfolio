import { motion } from "framer-motion";
import { SectionReveal } from "../components/SectionReveal";
import { 
  SiReact, SiNextdotjs, SiAngular, SiJavascript, SiHtml5, SiCss,
  SiNodedotjs, SiNestjs, SiDjango, SiFastapi, SiLaravel,
  SiN8N, SiZapier, SiMake,
  SiGit, SiGithub, SiShopify, SiWordpress
} from "react-icons/si";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Angular", icon: SiAngular, color: "#DD0031" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss, color: "#1572B6" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      ],
    },
    {
      title: "Automation",
      skills: [
        { name: "n8n", icon: SiN8N, color: "#FF6D5A" },
        { name: "Zapier", icon: SiZapier, color: "#FF4A00" },
        { name: "Make.com", icon: SiMake, color: "#6A22B4" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
        { name: "WordPress", icon: SiWordpress, color: "#21759B" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <SectionReveal id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-surface rounded-2xl p-8 border border-border"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={sIdx}
                      variants={itemVariants}
                      className="group flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    >
                      <Icon className="text-xl transition-colors group-hover:text-[var(--hover-color)]" style={{ "--hover-color": skill.color } as any} />
                      <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
