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
        py-16
        sm:py-20
        md:py-24
        lg:py-32
        xl:py-36
      "
    >
      <ProjectsBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <ProjectsBadge />

          <div className="mt-5 sm:mt-6">
            <ProjectsHeading />
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <ProjectGrid />
          </div>
        </div>
      </Container>
    </section>
  );
}