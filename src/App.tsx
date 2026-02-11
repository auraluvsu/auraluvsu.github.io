import { Mail, Github, Linkedin, Twitch, Zap, Code2, Globe } from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion } from "motion/react";

export default function App() {
  const skills = [
    { category: "Tech Stack", items: ["C++", "Python", "Go", "TypeScript", "PostgreSQL", "Nodejs", "Docker", "Git", "Neovim", "Linux", "MacOS"] },
    { category: "Core Skills", items: ["HTTP services", "REST APIs", "WebSockets", "async workflows", "concurrency", "algorithms", "ML basics", "DB design", "API architecture", "real-time systems", "backend engineering", "day trading", "forex"] },
  ];

  const projects = [
    {
      title: "Nyx — Go Chess Engine",
      description: "A high-performance chess engine written in Go with move-generation logic, perft validation, and a Python + PyTorch integration for machine-learning experiments.",
      technologies: ["Go", "Python", "PyTorch", "algorithms", "data structures"],
      icon: Zap,
      imageUrl: "https://images.unsplash.com/photo-1668877038574-77a83e176ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzYzNzM0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://github.com/auraluvsu/Nyx",
    },
    {
      title: "Sachiel — Minimalist Desktop Notepad",
      description: "A lightweight, distraction-free desktop notepad focused on speed and clarity. Built with Go and TypeScript, featuring clean UI and a fast startup profile.",
      technologies: ["Go", "TypeScript", "UI design", "Wails"],
      icon: Code2,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yfGVufDB8fHx8MTczNzU3MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://github.com/auraluvsu/Sachiel",
    },
    {
      title: "ATW — Around The World Web App",
      description: "A TypeScript full-stack application using Node.js and React, fetching and presenting travel/location data through clean API consumption.",
      technologies: ["TypeScript", "Node.js", "React", "API integration"],
      icon: Globe,
      imageUrl: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NjM3NDkzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://github.com/auraluvsu/atw",
    },
  ];

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--jade-100)] via-background to-background opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--jade-200)] rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--jade-300)] rounded-full blur-3xl opacity-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-2 bg-secondary rounded-full"
          >
            <p className="text-muted-foreground">👋 Hi, I'm Nas</p>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[var(--jade-800)] to-[var(--jade-600)] bg-clip-text text-transparent"
          >
            Backend developer
            <br />
            building reliable systems.
          </motion.h1>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-sm"
          >
            <p className="text-lg leading-relaxed text-foreground">
              I'm a 19-year-old backend developer specializing in building fast, reliable systems with C++, Python, Go and Typescript. 
              I focus on web API development, systems programming, high-performance computing, and machine learning fundamentals. 
              I'm experienced with HTTP services, WebSockets, async workflows, concurrency, REST APIs, Docker, PostgreSQL, Git, real-time systems, 
              day trading, and forex. Based in London with Canadian roots, I love crafting backend systems that balance performance and simplicity.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-muted-foreground mb-4">Skills & Tech</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skillGroup) => (
                <div 
                  key={skillGroup.category}
                  className="bg-card border border-border rounded-xl p-4 hover:bg-secondary/50 transition-colors"
                >
                  <p className="text-sm text-muted-foreground mb-2">{skillGroup.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="border-[var(--jade-300)] text-foreground hover:bg-[var(--jade-100)] transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3">Featured Projects</h2>
            <p className="text-muted-foreground">Recent work showcasing backend engineering and problem-solving.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  icon={project.icon}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gradient background */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[var(--jade-100)] to-[var(--jade-200)] dark:from-[#2a2e33] dark:to-[#2a2e33] border-2 border-transparent dark:border-[var(--jade-500)] rounded-3xl p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg0NSwgMTA5LCA5MCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="mb-4 dark:text-[var(--jade-400)]">Let's build something great together.</h2>
              <p className="text-lg text-muted-foreground dark:text-[var(--jade-300)] mb-8 max-w-2xl mx-auto">
                Open to new opportunities, collaborations, and interesting conversations about backend systems.
              </p>

              {/* GitHub */}
              <div className="mb-6">
                <a 
                  href="https://github.com/auraluvsu" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground dark:text-[var(--jade-400)] hover:text-primary transition-colors mb-4"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/auraluvsu</span>
                </a>
              </div>

              {/* Email Input */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-card dark:bg-[#353a40] text-foreground dark:text-[var(--jade-300)] placeholder:text-muted-foreground dark:placeholder:text-[var(--jade-600)] focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button 
                    className="bg-primary hover:bg-[var(--jade-700)] text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/auraluvsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card dark:bg-[#353a40] border border-border dark:border-[var(--jade-600)] dark:text-[var(--jade-400)] hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card dark:bg-[#353a40] border border-border dark:border-[var(--jade-600)] dark:text-[var(--jade-400)] hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitch.tv/auraluvsuxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card dark:bg-[#353a40] border border-border dark:border-[var(--jade-600)] dark:text-[var(--jade-400)] hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Twitch"
                >
                  <Twitch className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Nas. Building backend systems that work.</p>
        </div>
      </footer>
    </div>
  );
}