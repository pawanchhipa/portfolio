import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Certification } from "@shared/schema";
import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Certifications() {
  const { data: certifications, isLoading } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications?.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    {cert.title}
                  </CardTitle>
                  <CardDescription>
                    {cert.issuer} - {new Date(cert.date).getFullYear()}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
