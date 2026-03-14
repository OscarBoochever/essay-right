const problems = [
  {
    title: "AI leveled the playing field",
    description:
      "Every professional now has access to the same AI tools. The output is competent but generic. When your deliverables read like everyone else's, your expertise becomes invisible.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    iconColor: "text-amber",
    iconBg: "bg-light-amber",
  },
  {
    title: "Competent isn't compelling",
    description:
      "AI-generated prose is polished but hollow. It lacks the specificity, judgment, and point of view that make writing persuasive. Readers notice, even when they can't articulate why.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    iconColor: "text-[#B22234]",
    iconBg: "bg-[#FDECEA]",
  },
  {
    title: "ProRight is the advantage",
    description:
      "We help professionals use AI as a starting point, not a crutch. You keep the efficiency. We bring the voice, the precision, and the strategic clarity that set your work apart.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    iconColor: "text-deep-blue",
    iconBg: "bg-light-blue",
  },
];

const principles = [
  {
    title: "Write for busy readers",
    description:
      "Your audience has five minutes. Respect that. Structure ideas so the point lands immediately and the details reward a closer read.",
  },
  {
    title: "Sound like yourself",
    description:
      "AI-generated prose is fluent and forgettable. The goal is writing with a point of view, with specificity, with the texture of someone who actually knows what they are talking about.",
  },
  {
    title: "Give people a reason to read",
    description:
      "If writing sounds like AI, readers treat it like AI: skim it, summarize it, delegate it to their own machine. Writing that carries a real voice earns real attention.",
  },
  {
    title: "Cut through the noise",
    description:
      "Boilerplate, filler phrases, hedging that says nothing. It all tells the reader to stop paying attention. We strip it out so what remains is compelling, direct, and worth their time.",
  },
];

export default function Problem() {
  return (
    <section id="about-proright" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Why ProRight?
        </h2>
        <p className="text-center text-navy/60 max-w-2xl mx-auto mb-16 text-lg">
          AI made writing easier. It also made everyone sound identical. In a
          competitive professional world, that sameness is a liability.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${problem.iconBg} flex items-center justify-center ${problem.iconColor} mb-5`}
              >
                {problem.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                {problem.title}
              </h3>
              <p className="text-navy/65 leading-relaxed text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-navy/10">
          <h3 className="font-serif text-2xl font-bold text-navy text-center mb-12">
            The philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h4 className="font-serif text-lg font-semibold text-navy mb-2">
                  {principle.title}
                </h4>
                <p className="text-navy/55 leading-relaxed text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
