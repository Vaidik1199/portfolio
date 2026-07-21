import Container from "@/components/ui/Container";

import AboutBadge from "./AboutBadge";
import AboutCards from "./AboutCards";
import AboutDescription from "./AboutDescription";
import AboutHeading from "./AboutHeading";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <AboutBadge />

          <div className="mt-8">
            <AboutHeading />
          </div>

          <div className="mt-8">
            <AboutDescription />
          </div>

          <AboutStats />

          <AboutCards />
        </div>
      </Container>
    </section>
  );
}