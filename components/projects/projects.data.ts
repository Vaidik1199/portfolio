export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "StudentOS",
    description:
      "An all-in-one productivity platform built for students featuring attendance management, AI assistant, notes, assignments, timetable, GPA calculator, analytics, and an intuitive modern dashboard to simplify academic life.",
    image: "/projects/studentos.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "OpenAI",
    ],
    github: "https://github.com/Vaidik1199",
    live: "",
    featured: true,
  },
  {
    title: "AI Eye Disease Detection",
    description:
      "A deep learning application that detects eye diseases from retinal images using PyTorch. Built with an interactive Streamlit interface to deliver fast, accessible, and accurate AI-powered predictions.",
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
    live: "",
    featured: true,
  },
];