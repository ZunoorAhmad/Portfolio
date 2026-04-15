import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";
import { FormEvent, useState } from "react";
import { portfolioData } from "../data/portfolio";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`New portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <SectionReveal id="contact" className="bg-surface/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </p>
        </div>

        <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background element inside form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                isSubmitted 
                  ? "bg-emerald-500 text-white" 
                  : "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSubmitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </div>

        <div className="mt-16 flex justify-center gap-6">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit GitHub profile"
            className="p-4 rounded-full bg-surface border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit LinkedIn profile"
            className="p-4 rounded-full bg-surface border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit X profile"
            className="p-4 rounded-full bg-surface border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
