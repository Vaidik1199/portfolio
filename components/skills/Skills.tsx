import Container from "@/components/ui/Container";

import SkillsBadge from "./SkillsBadge";
import SkillsCategories from "./SkillsCategories";
import SkillsHeading from "./SkillsHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-36"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <SkillsBadge />

          <div className="mt-8">
            <SkillsHeading />
          </div>

          <SkillsCategories />
        </div>
      </Container>
    </section>
  );
}