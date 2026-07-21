import Container from "@/components/ui/Container";

import ExperienceBackground from "./ExperienceBackground";
import ExperienceBadge from "./ExperienceBadge";
import ExperienceHeading from "./ExperienceHeading";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
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
      <ExperienceBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <ExperienceBadge />

          <div className="mt-5 sm:mt-6">
            <ExperienceHeading />
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <ExperienceTimeline />
          </div>
        </div>
      </Container>
    </section>
  );
}