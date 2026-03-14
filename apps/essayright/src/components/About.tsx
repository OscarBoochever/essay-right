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
                src="/john.jpg"
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
            <p className="text-teal font-medium mb-8">
              Founder, EssayRight
            </p>

            <div className="space-y-5 text-navy/70 leading-relaxed">
              <p>
                John Boochever has spent more than three decades writing for a
                living. As a partner at Oliver Wyman and Booz Allen Hamilton,
                clear, persuasive writing was the job: pitching strategies to
                executives, translating complex ideas into language that moved
                people to action. He brings that same discipline, and genuine
                love of good writing, to helping students find their voice.
              </p>
              <p>
                Born in Luxembourg and educated at international and European
                schools before attending public high school in the U.S., John
                has spent 22 years abroad, with professional experience spanning
                17 countries across six continents. He has advanced proficiency
                in French and basic comprehension in Spanish, Dutch, German, and
                Italian. That firsthand experience navigating languages,
                cultures, and academic systems gives him a unique ability to help
                international students find their voice in English.
              </p>
              <p>
                John has been editing his three children&apos;s writing since
                grade school. Between them, they have collected one PhD, four
                master&apos;s degrees, and three bachelor&apos;s degrees across
                Cornell, Harvard, UC Davis, the University of Vermont, and
                Lipscomb University. He takes partial credit for the essays.
              </p>
              <p>
                John is also a guest lecturer at Washington College and a
                mentor at Higher Achievement, working directly with students on
                writing and communication skills. He chairs the
                Smithsonian&apos;s Center for Folklife and Cultural Heritage, is
                a Commissioner Emeritus of the National Portrait Gallery, and
                has served as an elected trustee of Cornell University. He holds
                advanced degrees from Johns Hopkins SAIS and the University of
                Chicago Booth School of Business, and graduated with distinction
                from Cornell.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-navy/10">
              <p className="font-serif italic text-navy/50 text-lg">
                &ldquo;Writing is ultimately about thinking. When students learn
                to organize their ideas clearly, their writing becomes
                stronger, and their confidence grows.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
