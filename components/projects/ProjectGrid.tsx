import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";
export default function ProjectGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}

      <div className="group flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 via-white/[0.02] to-transparent p-10 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-3xl">
          🚀
        </div>

        <h3 className="text-2xl font-bold text-white">
          More Projects Coming Soon
        </h3>

        <p className="mt-4 max-w-sm leading-7 text-zinc-400">
          I'm continuously building new full-stack and AI-powered applications.
          This section will grow with more ambitious projects over time.
        </p>
      </div>
    </div>
  );
}