const audiences = [
  {
    title: "Middle School Students",
    items: [
      "Competitive school applications",
      "Building strong writing habits",
      "Essays & school assignments",
      "Finding a confident voice early",
    ],
  },
  {
    title: "High School Students",
    items: [
      "College admissions essays",
      "Scholarship applications",
      "Personal statements",
      "AP & IB extended essays",
    ],
  },
  {
    title: "College Students",
    items: [
      "Term papers & research papers",
      "Honors theses",
      "Fellowship applications",
      "Internship essays",
    ],
  },
  {
    title: "Graduate Students",
    items: [
      "Statements of purpose",
      "Dissertations & theses",
      "Grant proposals",
      "Academic articles",
    ],
  },
  {
    title: "International Students",
    items: [
      "English academic voice",
      "Admissions essays",
      "Clarity of argument",
      "Cultural tone & style",
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
          From middle school to PhD programs, EssayRight works with students
          at every stage of their academic journey.
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
                    <span className="text-teal mt-1 shrink-0">
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
