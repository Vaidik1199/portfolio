import Container from "@/components/ui/Container";

import AboutBackground from "./AboutBackground";
import AboutBadge from "./AboutBadge";
import AboutCards from "./AboutCards";
import AboutDescription from "./AboutDescription";
import AboutHeading from "./AboutHeading";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <section
      id="about"
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
      <AboutBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <AboutBadge />

          <div className="mt-5 sm:mt-6">
            <AboutHeading />
          </div>

          <div className="mt-5 sm:mt-6">
            <AboutDescription />
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <AboutStats />
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <AboutCards />
          </div>
        </div>
      </Container>
    </section>
  );
}