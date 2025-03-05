import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science (Chemistry)",
    institution: "Indian Institute of Technology Madras, Chennai (Tamilnadu)",
    year: "2023",
    grade: "7.46 CGPA",
  },
  {
    degree: "Bachelor of Science (Mathematics, Chemistry, Physics)",
    institution: "Maharshi Dayanand Saraswati University, Ajmer (Rajasthan)",
    year: "2021",
    grade: "64.88%",
  },
  {
    degree: "Senior Secondary XII (PCM)",
    institution: "K P Sr Sec School Jobner, Jaipur (Rajasthan)",
    year: "2018",
    grade: "89.80%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {edu.degree}
                  </CardTitle>
                  <CardDescription>
                    <p>{edu.institution}</p>
                    <p className="mt-2">
                      <span className="font-medium">Year: </span>
                      {edu.year}
                    </p>
                    <p>
                      <span className="font-medium">Grade: </span>
                      {edu.grade}
                    </p>
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
