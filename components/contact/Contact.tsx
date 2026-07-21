import Container from "@/components/ui/Container";

import ContactBackground from "./ContactBackground";
import ContactBadge from "./ContactBadge";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
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
      <ContactBackground />

      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <ContactBadge />

          <div className="mt-5 sm:mt-6">
            <ContactHeading />
          </div>

          <div
            className="
              mt-10
              grid
              gap-8
              sm:gap-10
              lg:mt-14
              lg:grid-cols-2
              lg:gap-14
              xl:gap-16
            "
          >
            <ContactInfo />

            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}