import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Github className="h-8 w-8 text-primary" />
        </motion.div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="flex items-center gap-2 mb-4">
                    <Github className="h-5 w-5" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-auto group"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}