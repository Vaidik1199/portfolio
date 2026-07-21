import ContactBadge from "./ContactBadge";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
        <div className="space-y-6">
          <ContactBadge />
          <ContactHeading />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}