const audiences = [
  {
    title: "Career Escalation",
    items: [
      "Executive communications & board materials",
      "Thought leadership articles",
      "Conference presentations",
      "Internal strategy documents",
    ],
  },
  {
    title: "Career Pivots",
    items: [
      "Positioning narratives for new industries",
      "Executive bios & LinkedIn overhaul",
      "Cover letters that reframe experience",
      "Interview preparation materials",
    ],
  },
  {
    title: "Private Sector Leaders",
    items: [
      "Client-facing deliverables",
      "Proposals & pitch decks",
      "Annual reports & stakeholder updates",
      "Strategic plans & business cases",
    ],
  },
  {
    title: "Public Sector & Nonprofits",
    items: [
      "Policy briefs & legislative testimony",
      "Grant applications & funding proposals",
      "Public-facing communications",
      "Board reports & impact statements",
    ],
  },
  {
    title: "Educators & Academics",
    items: [
      "Tenure & promotion packages",
      "Published research & articles",
      "Conference papers & presentations",
      "Grant proposals & fellowship applications",
    ],
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Who We Help
        </h2>
        <p className="text-center text-navy/60 max-w-2xl mx-auto mb-16 text-lg">
          From early-career professionals to C-suite executives, ProRight works
          with people whose writing shapes their reputation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-cream rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-lg font-semibold text-navy mb-4">
                {audience.title}
              </h3>
              <ul className="space-y-2.5">
                {audience.items.map((item) => (
                  <li
                    key={item}
                    className="text-navy/65 text-sm flex items-start gap-2"
                  >
                    <span className="text-deep-blue mt-1 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
