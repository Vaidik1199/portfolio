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
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-x-clip
        pt-16
        sm:pt-20
        md:pt-24
        lg:pt-16
      "
    >
      <HeroBackground />

      <Container className="flex-1">
        <div
          className="
            grid
            min-h-[calc(100vh-4rem)]
            items-center
            gap-10
            py-6
            sm:gap-12
            sm:py-8
            lg:min-h-[calc(100vh-5rem)]
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-14
            lg:py-0
          "
        >
          {/* Left */}
          <div className="relative z-10 flex flex-col items-start">
            <HeroBadge />

            <div className="mt-5 sm:mt-6">
              <HeroHeading />
            </div>

            <div className="mt-5 sm:mt-6">
              <HeroDescription />
            </div>

            <HeroButtons />

            <HeroSocials />
          </div>

          {/* Right */}
          <div
            className="
              relative
              flex
              justify-center
              lg:-translate-y-12
              lg:justify-end
            "
          >
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}