export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight tracking-tight">
          Clear thinking.{" "}
          <span className="text-teal">Authentic voice.</span>
          <br />
          Writing that matters.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
          EssayRight helps students craft original, persuasive writing for
          college admissions, academic work, and graduate study — in an age
          when authentic voice matters more than ever.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-teal text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-teal-dark transition-colors shadow-lg shadow-teal/25"
          >
            Schedule a Free Consultation
          </a>
          <a
            href="#method"
            className="text-navy font-semibold px-8 py-4 rounded-full text-lg border-2 border-navy/15 hover:border-teal hover:text-teal transition-colors"
          >
            How It Works
          </a>
        </div>
        <p className="mt-14 font-serif italic text-xl md:text-2xl text-navy/50">
          &ldquo;AI can generate text. It cannot generate a voice.&rdquo;
        </p>
      </div>
    </section>
  );
}
