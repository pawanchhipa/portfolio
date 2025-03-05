import { motion } from "framer-motion";
import { SiPython, SiJupyter, SiPandas, SiScikitlearn, SiTensorflow, SiKeras, SiGooglecolab, SiMicrosoftexcel, SiCanva, SiLatex, SiGithub, SiAnaconda } from "react-icons/si";
import { HiCode, HiDatabase } from "react-icons/hi";
import { Vial, FlaskConical } from "lucide-react";

const skills = [
  { icon: SiPython, name: "Python" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiKeras, name: "Keras" },
  { icon: SiJupyter, name: "Jupyter" },
  { icon: SiGooglecolab, name: "Google Colab" },
  { icon: SiAnaconda, name: "Anaconda" },
  { icon: HiCode, name: "RDKit" },
  { icon: Vial, name: "Chem-Draw" },
  { icon: FlaskConical, name: "Gaussian" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiMicrosoftexcel, name: "MS Office" },
  { icon: SiCanva, name: "Canva" },
  { icon: SiLatex, name: "LaTeX" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <skill.icon className="h-12 w-12 text-primary" />
              <span className="text-sm text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}