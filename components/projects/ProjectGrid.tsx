import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

export default function ProjectGrid() {
  return (
    <div
      className="
        grid
        gap-6
        sm:gap-7
        lg:gap-8
        lg:grid-cols-2
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
}