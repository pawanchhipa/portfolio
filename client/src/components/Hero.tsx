import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Hi, I'm Pawan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            I'm passionate about data and its potential to drive scientific discovery. 
            Working at the intersection of chemistry and computational methods, 
            I love exploring how data can unlock new insights in materials science.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center text-muted-foreground">
            <a href="mailto:work.pawanchhipa@gmail.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
            <a href="https://github.com/pawanchhipa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Germany (from April 2025)</span>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}