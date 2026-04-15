import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { portfolioData, navLinks } from "../data/portfolio";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Navigation",
      links: navLinks.map((link) => ({
        label: link,
        href: `#${link.toLowerCase()}`,
      })),
    },
    {
      title: "Services",
      links: [
        { label: "Full Stack Development", href: "#services" },
        { label: "API Integration", href: "#services" },
        { label: "Quality Code", href: "#services" },
        { label: "Consultation", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "My Work", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Blog", href: "#blog" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        {/* Top Section - Brand and Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {portfolioData.brand.split(" ")[0]}<span className="text-primary">{portfolioData.brand.split(" ")[1]}</span>
            </h3>
            <p className="text-muted mb-6 leading-relaxed max-w-sm">
              Full Stack Developer with expertise in Angular, Ionic, Node.js, Django, and modern web technologies. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-foreground font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors group"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{portfolioData.contact.email}</span>
                </a>
                <a
                  href={`tel:${portfolioData.contact.phone}`}
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors group"
                >
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{portfolioData.contact.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-muted">
                  <MapPin size={18} />
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-border">
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            >
              <h4 className="text-foreground font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-primary transition-colors text-sm group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-primary" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {portfolioData.brand}. All rights reserved. | 
            <a href="#" className="text-primary hover:underline ml-2">Privacy Policy</a>
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
