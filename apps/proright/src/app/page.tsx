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
  name: "ProRight",
  description:
    "Strategic writing mentorship for professionals. Executive communications, board presentations, speeches, published works, career strategy, and communication coaching in Washington, D.C. and online.",
  url: "https://proright.org",
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
    description:
      "Former partner at Oliver Wyman and Booz Allen Hamilton with 30+ years of executive writing experience. Guest lecturer at Washington College.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Professional Writing Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Reports & Deliverables",
        description:
          "Board presentations, strategic plans, client deliverables, and policy documents for executives and professionals.",
      },
      {
        "@type": "OfferCatalog",
        name: "Presentations & Speeches",
        description:
          "Keynotes, conference talks, executive briefings, and panel remarks. Professional speechwriting and presentation coaching.",
      },
      {
        "@type": "OfferCatalog",
        name: "Published Works",
        description:
          "Articles, white papers, op-eds, and thought leadership. Professional ghostwriting and publishing support.",
      },
      {
        "@type": "OfferCatalog",
        name: "Career Strategy",
        description:
          "Executive bios, LinkedIn profiles, cover letters, resumes, interview preparation, and career positioning narratives.",
      },
      {
        "@type": "OfferCatalog",
        name: "Communication Coaching",
        description:
          "Ongoing mentorship for professionals. Executive presence, compensation negotiations, and leadership communication.",
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
      <Hero />
      <Problem />
      <Services />
      <Method />
      <WhoWeHelp />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
