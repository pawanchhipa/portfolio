import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Top 2.6% in IIT JAM 2021",
    description: "Ranked among the top performers in a prestigious exam conducted by IISC Bangalore with more than 15K applicants across India.",
  },
  {
    title: "INSPIRE Scholarship Recipient",
    description: "Awarded to the Top 1% of graduating students nationwide by the Department of Science and Technology, Government of India.",
  },
  {
    title: "Merit-based Scholarship",
    description: "Awarded by the Chandak Family Foundation for achieving the top grade in a batch of 110 students.",
  },
  {
    title: "District Science Quiz Champion",
    description: "Led a team of 4 students to secure the 1st Prize among 50+ teams in a district-level science quiz competition in Ajmer.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Achievements & Awards
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
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
                    <Trophy className="h-5 w-5 text-primary" />
                    {achievement.title}
                  </CardTitle>
                  <CardDescription>
                    {achievement.description}
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
