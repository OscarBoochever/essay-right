import Image from "next/image";

export default function About() {
  return (
    <section id="john" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/suit.jpg"
                alt="John Boochever"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                quality={100}
                unoptimized
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
              Meet John Boochever
            </h2>
            <p className="text-deep-blue font-medium mb-8">
              Founder, ProRight
            </p>

            <div className="space-y-5 text-navy/70 leading-relaxed">
              <p>
                John Boochever spent three decades at the highest levels of
                management consulting, where clear, persuasive writing was the
                job. As a founding partner of Oliver Wyman, he built and led the
                firm&apos;s global Digital and Technology Strategy practice.
                Earlier, at Booz Allen Hamilton, he was the regional practice
                leader for information systems across the UK, Europe, and the
                Middle East, covering six geographic markets. Strategy
                presentations, board materials, client deliverables, published
                articles: writing that moved busy executives to act was the core
                of his work for over 30 years.
              </p>
              <p>
                Born in Luxembourg and educated at international and European
                schools before attending public high school in the U.S., John
                has spent 22 years abroad, with professional experience spanning
                17 countries across six continents. He has advanced proficiency
                in French and basic comprehension in Spanish, Dutch, German, and
                Italian. That range gives him an intuitive understanding of how
                to communicate across cultures, industries, and organizational
                hierarchies.
              </p>
              <p>
                John is a guest lecturer at Washington College and chairs the
                Smithsonian&apos;s Center for Folklife and Cultural Heritage. He
                is a Commissioner Emeritus of the National Portrait Gallery and
                has served as an elected trustee of Cornell University. He holds
                advanced degrees from Johns Hopkins SAIS and the University of
                Chicago Booth School of Business, and graduated with distinction
                from Cornell.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-navy/10">
              <p className="font-serif italic text-navy/50 text-lg">
                &ldquo;The best professional writing doesn&apos;t sound
                &apos;professional.&apos; It sounds like a clear thinker who
                respects the reader&apos;s time.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
