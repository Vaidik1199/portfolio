import Container from "@/components/ui/Container";

import SkillsBackground from "./SkillsBackground";
import SkillsBadge from "./SkillsBadge";
import SkillsCategories from "./SkillsCategories";
import SkillsHeading from "./SkillsHeading";

export default function Skills() {
  return (
    <section
      id="skills"
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
      <SkillsBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <SkillsBadge />

          <div className="mt-5 sm:mt-6">
            <SkillsHeading />
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <SkillsCategories />
          </div>
        </div>
      </Container>
    </section>
  );
}