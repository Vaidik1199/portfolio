import Container from "@/components/ui/Container";

import ExperienceBadge from "./ExperienceBadge";
import ExperienceHeading from "./ExperienceHeading";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <div className="space-y-16">
          <div className="space-y-6">
            <ExperienceBadge />

            <ExperienceHeading />
          </div>

          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
}