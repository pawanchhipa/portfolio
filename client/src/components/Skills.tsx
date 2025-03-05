import { motion } from "framer-motion";
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiOpencv, SiJupyter, SiAmazon, SiDocker, SiPandas } from "react-icons/si";

const skills = [
  { icon: SiPandas, name: "Machine Learning" },
  { icon: SiPython, name: "Python" },
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiKeras, name: "Keras" },
  { icon: SiOpencv, name: "OpenCV" },
  { icon: SiJupyter, name: "Jupyter" },
  { icon: SiAmazon, name: "AWS" },
  { icon: SiDocker, name: "Docker" },
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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