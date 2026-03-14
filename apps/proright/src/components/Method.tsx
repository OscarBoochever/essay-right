const steps = [
  {
    number: "01",
    title: "Share your project",
    description:
      "Send us the draft, the brief, or just the deadline. We will get on a call to understand what you need and who is going to read it.",
  },
  {
    number: "02",
    title: "We work together",
    description:
      "Collaborative sessions, async markup, or a combination. We sharpen your argument, find your voice, and cut everything that does not earn its place.",
  },
  {
    number: "03",
    title: "You ship it",
    description:
      "You deliver writing that sounds like you at your best. Clear, confident, and impossible to mistake for something a machine wrote.",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-20 md:py-28 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-white/50 max-w-2xl mx-auto mb-16 text-lg">
          No onboarding decks. No ten-step process. Just good work, fast.
        </p>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}
