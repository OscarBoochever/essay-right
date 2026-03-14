import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Method from "@/components/Method";
import WhoWeHelp from "@/components/WhoWeHelp";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EssayRight",
  description:
    "Expert essay coaching and writing mentorship for students. College admissions essays, personal statements, research papers, theses, scholarship applications, and writing coaching in Washington, D.C. and online.",
  url: "https://essayright.org",
  email: "boocheverjohn@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Washington",
    addressRegion: "DC",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Washington, D.C." },
    { "@type": "State", name: "Virginia" },
    { "@type": "State", name: "Maryland" },
    { "@type": "Country", name: "United States" },
  ],
  founder: {
    "@type": "Person",
    name: "John Boochever",
    jobTitle: "Founder",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Essay Coaching Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Admissions Essays",
        description:
          "Personal statements, supplemental essays, scholarship and fellowship applications for college, graduate school, MBA, law school, and medical school.",
      },
      {
        "@type": "OfferCatalog",
        name: "School Assignments",
        description:
          "Essays, term papers, lab reports, and class projects. Writing fundamentals for high school and college students.",
      },
      {
        "@type": "OfferCatalog",
        name: "Research & Theses",
        description:
          "Research papers, honors theses, capstone projects, and dissertations. Academic writing coaching and editing.",
      },
      {
        "@type": "OfferCatalog",
        name: "Internship & Job Applications",
        description:
          "Cover letters, application essays, and resumes for students entering the workforce.",
      },
      {
        "@type": "OfferCatalog",
        name: "Writing Coaching",
        description:
          "Ongoing writing mentorship for students who want to become genuinely stronger writers.",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Method />
        <WhoWeHelp />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
