import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Experience } from "@shared/schema";
import { format } from "date-fns";
import { Briefcase } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

export default function Experience() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section id="experience" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences?.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="mb-8 relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <Briefcase className="absolute -left-3 top-0 bg-background p-1 text-primary h-6 w-6" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                {exp.endDate
                  ? format(new Date(exp.endDate), "MMM yyyy")
                  : "Present"}
              </p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}