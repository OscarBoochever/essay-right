export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-7xl font-bold text-navy leading-tight tracking-tight mb-6">
          Your ideas deserve
          <br />
          your <span className="text-deep-blue">voice</span>.
        </h1>
        <p className="text-lg md:text-xl text-navy/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI can draft your report in seconds. But when everyone uses the same
          tools, everyone sounds the same. ProRight helps professionals write
          with clarity, authority, and a voice that is unmistakably theirs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="bg-deep-blue text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-deep-blue-dark transition-colors shadow-lg shadow-deep-blue/25"
          >
            Schedule a Consultation
          </a>
          <a
            href="#method"
            className="text-navy font-semibold px-8 py-4 rounded-full text-lg border-2 border-navy/15 hover:border-deep-blue hover:text-deep-blue transition-colors"
          >
            How It Works
          </a>
        </div>
        <p className="font-serif italic text-navy/40 text-lg max-w-xl mx-auto">
          &ldquo;AI isn&apos;t going away. But neither is the need to sound like
          yourself.&rdquo;
        </p>
      </div>
    </section>
  );
}
