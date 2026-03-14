const steps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand the strategic context. Who is the audience? What decision does this writing need to drive? Busy readers give you one chance. We make sure you know what success looks like before a word is written.",
  },
  {
    number: "02",
    title: "Voice",
    description:
      "Find your authentic professional voice. Not corporate jargon, not AI boilerplate. The way you would explain it to a smart colleague over coffee, sharpened and elevated for the page.",
  },
  {
    number: "03",
    title: "Structure",
    description:
      "Organize the argument so it builds logically and persuades. Every section earns its place. Every transition carries momentum. Readers with five minutes get the point in three.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Polish until every sentence is precise, confident, and impossible to skim past. Cut the filler. Sharpen the point. Make it sound like you at your best.",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-20 md:py-28 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-4">
          The ProRight Method
        </h2>
        <p className="text-center text-white/50 max-w-2xl mx-auto mb-16 text-lg">
          Great professional writing is not about sounding impressive. It is
          about thinking clearly and communicating with precision and purpose.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-serif text-5xl font-bold text-deep-blue/30 mb-2 block">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/55 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/35 text-sm max-w-2xl mx-auto">
            ProRight works collaboratively with clients to strengthen their
            ideas, structure, and voice. AI tools may be part of your workflow.
            We ensure the final product reflects your judgment, your expertise,
            and your perspective.
          </p>
        </div>
      </div>
    </section>
  );
}
