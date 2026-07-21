import Container from "@/components/ui/Container";

import ProjectGrid from "./ProjectGrid";
import ProjectsBackground from "./ProjectsBackground";
import ProjectsBadge from "./ProjectsBadge";
import ProjectsHeading from "./ProjectsHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
        lg:py-36
      "
    >
      <ProjectsBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <ProjectsBadge />

          <div className="mt-6">
            <ProjectsHeading />
          </div>

          <div className="mt-14">
            <ProjectGrid />
          </div>
        </div>
      </Container>
    </section>
  );
}