export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "StudentOS",
    description:
      "A modern all-in-one student productivity platform featuring attendance tracking, AI assistant, notes, assignments, timetable, GPA calculator, analytics, and a beautiful dashboard designed to simplify academic life.",
    image: "/projects/studentos.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
    ],
    github: "https://github.com/Vaidik1199/StudentOS",
    live: "https://studentos-eight.vercel.app",
    featured: true,
  },
  {
    title: "AI Eye Disease Detection",
    description:
      "An AI-powered retinal disease detection system built with PyTorch and Streamlit that analyzes retinal images to deliver fast, accurate, and accessible predictions through an intuitive interface.",
    image: "/projects/eye-disease.png",
    technologies: [
      "Python",
      "PyTorch",
      "Streamlit",
      "OpenCV",
      "NumPy",
      "Pandas",
    ],
    github: "https://github.com/Vaidik1199",
    featured: true,
  },
];