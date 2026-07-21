import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroDescription from "./HeroDescription";
import HeroHeading from "./HeroHeading";
import HeroImage from "./HeroImage";
import HeroSocials from "./HeroSocials";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <HeroBackground />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_.85fr]">
          {/* Left */}
          <div className="flex flex-col items-start">
            <HeroBadge />

            <div className="mt-8">
              <HeroHeading />
            </div>

            <div className="mt-8">
              <HeroDescription />
            </div>

            <HeroButtons />

            <HeroSocials />
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}