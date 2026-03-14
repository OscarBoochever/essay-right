const topRow = [
  {
    title: "Reports & Deliverables",
    description:
      "Board presentations, strategic plans, client deliverables, and policy documents. Writing that reflects the depth of your thinking and respects your reader's time.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Presentations & Speeches",
    description:
      "Keynotes, conference talks, executive briefings, and panel remarks. A script that sounds like you at your best, not like you reading AI output.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Published Works",
    description:
      "Articles, white papers, op-eds, and thought leadership. Get published with writing that carries your authority and keeps busy readers engaged.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

const bottomRow = [
  {
    title: "Career Strategy",
    description:
      "Executive bios, LinkedIn profiles, positioning narratives, cover letters, and interview preparation. Whether you are advancing or pivoting, we help you tell the story of your career with clarity and confidence.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Communication Coaching",
    description:
      "Ongoing mentorship for professionals who want to become genuinely stronger communicators. Executive presence, compensation negotiations, and the writing behind career advancement.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Services
        </h2>
        <p className="text-center text-navy/60 max-w-2xl mx-auto mb-16 text-lg">
          Strategic writing mentorship for professionals. Every engagement is
          built around your goals, your voice, and your deadlines.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topRow.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-navy/5"
            >
              <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center text-deep-blue mb-5">
                {service.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-navy/65 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-6 max-w-5xl mx-auto">
          {bottomRow.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-navy/5 w-full md:w-[calc((100%-1.5rem)/3)]"
            >
              <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center text-deep-blue mb-5">
                {service.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-navy/65 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
