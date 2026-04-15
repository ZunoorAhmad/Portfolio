import { motion } from "framer-motion";
import { Code2, Workflow, Database, ShoppingCart } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";

export function Services() {
  const services = [
    {
      title: "Third-Party API Integration",
      description: "Specialized in integrating complex APIs (Zoom, Agora, Firebase). Increased project features by 30% through seamless API implementation and real-time data synchronization.",
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Real-Time Communication",
      description: "Expert in building video conferencing and live collaboration features. Delivered Agora-based solutions with 95% user satisfaction and zero critical issues.",
      icon: Workflow,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "System Architecture & Optimization",
      description: "Design scalable, efficient systems from ground up. Reduced scheduling errors by 40% through intelligent system design and database optimization.",
      icon: Database,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Full Stack Development",
      description: "End-to-end development across frontend (Angular, Ionic) and backend (Node.js, Django). Delivered 50+ code reviews with 100% standards compliance.",
      icon: ShoppingCart,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionReveal id="services" className="bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Services &amp; <span className="text-gradient">Offerings</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-surface border border-border p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${service.bg}`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
