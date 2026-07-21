import Container from "@/components/ui/Container";

import ProjectsBadge from "./ProjectsBadge";
import ProjectsHeading from "./ProjectsHeading";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <div className="space-y-16">
          <div className="space-y-6">
            <ProjectsBadge />

            <ProjectsHeading />
          </div>

          <ProjectGrid />
        </div>
      </Container>
    </section>
  );
}