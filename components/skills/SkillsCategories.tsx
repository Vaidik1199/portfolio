"use client";
import {
  BrainCircuit,
  Database,
  Globe,
  Server,
} from "lucide-react";

import SkillCard from "./SkillCard";

const categories = [
  {
    title: "Frontend",
    description:
      "Building responsive, interactive and modern user interfaces with a focus on performance and accessibility.",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend",
    description:
      "Developing scalable APIs, authentication systems and server-side applications with clean architecture.",
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
      "Designing and managing structured and NoSQL databases for modern full-stack applications.",
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
      "Exploring AI-powered applications while using modern tools to build, test and deploy software efficiently.",
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
    <div className="mt-16 grid gap-6 lg:grid-cols-2">
      {categories.map((category) => (
        <SkillCard
          key={category.title}
          title={category.title}
          description={category.description}
          icon={category.icon}
          skills={category.skills}
        />
      ))}
    </div>
  );
}