const problems = [
  {
    icon: (
      <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.007.858a2.25 2.25 0 0 1-1.493.57H7.5a2.25 2.25 0 0 1-1.493-.57L5 14.5m14 0V8.25a2.25 2.25 0 0 0-2.25-2.25h-1.5" />
      </svg>
    ),
    title: "AI is everywhere",
    text: "Students increasingly rely on AI to generate text. The result: generic, formulaic writing that admissions officers and professors spot immediately.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Voice is vanishing",
    text: "When every essay sounds the same, originality becomes the rarest and most valuable quality. Templates and AI strip away what makes writing compelling.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: "EssayRight is the antidote",
    text: "We teach students to think clearly, find their authentic voice, and write prose that is unmistakably their own. No AI. No shortcuts. Just better writing.",
  },
];

export default function Problem() {
  return (
    <section id="about-essayright" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Why EssayRight?
        </h2>
        <p className="text-center text-navy/60 max-w-2xl mx-auto mb-16 text-lg">
          In a world flooded with AI-generated text, authentic writing is a
          superpower. EssayRight helps students develop it.
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-navy/65 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
