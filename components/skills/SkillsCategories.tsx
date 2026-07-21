"use client";

import {
  BrainCircuit,
  Database,
  Globe,
  Server,
} from "lucide-react";
import { motion } from "motion/react";

import SkillCard from "./SkillCard";

const categories = [
  {
    title: "Frontend",
    description:
      "Building responsive, interactive, and accessible user interfaces with modern web technologies.",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    description:
      "Developing scalable APIs, authentication systems, and robust server-side applications.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Authentication",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Database",
    description:
      "Designing and managing relational and NoSQL databases for modern applications.",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
      "Database Design",
    ],
  },
  {
    title: "AI & Tools",
    description:
      "Exploring AI while using modern developer tools to build, test, and deploy production-ready software.",
    icon: BrainCircuit,
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Streamlit",
      "Postman",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
];

export default function SkillsCategories() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 grid gap-7 lg:grid-cols-2"
    >
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: index * 0.12,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SkillCard
            title={category.title}
            description={category.description}
            icon={category.icon}
            skills={category.skills}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}