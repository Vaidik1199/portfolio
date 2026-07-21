export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Vaidik Choudhary",
    url: "https://vaidikchoudhary.vercel.app",

    image: "https://vaidikchoudhary.vercel.app/Profile.png",

    email: "mailto:vaidikhc@email.com",

    jobTitle: "Full Stack Developer & Software Engineer",

    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, MongoDB, MySQL, and modern web technologies.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ajeenkya DY Patil School of Engineering",
    },

    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Java",
      "Python",
      "Git",
      "GitHub",
      "REST APIs",
      "Full Stack Development",
      "Web Development",
    ],

    sameAs: [
      "https://github.com/Vaidik1199",
      "https://www.linkedin.com/in/vaidik-choudhary-a21b40294/",
      "https://x.com/Vaidikhc",
      "https://www.instagram.com/vaidikhc.99/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}