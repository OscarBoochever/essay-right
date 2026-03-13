const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Identify the central insight or story the essay needs to convey. Great writing begins with a clear idea worth expressing.",
  },
  {
    number: "02",
    title: "Voice",
    description:
      "Find the student's authentic way of saying it. No templates, no AI-generated language. Just their voice, sharpened and confident.",
  },
  {
    number: "03",
    title: "Structure",
    description:
      "Organize ideas so the argument flows logically and persuades. Every paragraph earns its place, every transition makes sense.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Polish the prose until every sentence is concise, elegant, and compelling. Cut the clutter. Keep the power.",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-20 md:py-28 px-6 bg-navy text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
          The EssayRight Method
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-16 text-lg">
          Great writing isn&apos;t about sounding impressive. It&apos;s about thinking
          clearly and expressing ideas with authenticity and precision.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-serif text-5xl font-bold text-teal/30">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-semibold mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            EssayRight works collaboratively with students to strengthen their
            ideas and writing. All essays remain the student&apos;s own work. We do
            not generate essays. We help students develop their own ideas and
            voice so their writing is original, authentic, and unmistakably
            theirs.
          </p>
        </div>
      </div>
    </section>
  );
}
