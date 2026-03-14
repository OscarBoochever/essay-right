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
                John Boochever spent three decades as a partner at two of the
                world&apos;s leading consulting firms, where clear, persuasive
                writing was the job. As a founding partner of Oliver Wyman, he
                built and led the firm&apos;s global Digital and Technology
                Strategy practice and served on its management committee.
                Earlier, at Booz Allen Hamilton, he led the Information Systems
                business across Europe and the Middle East and served on that
                firm&apos;s management committee as well. Strategy
                presentations, board materials, client deliverables, published
                articles: writing that moved busy executives to act was the core
                of his work for over 30 years.
              </p>
              <p>
                In recent years, John has advised select minority- and
                women-owned consulting firms and education-focused enterprises
                on business development, operating models, and institutional
                scale. He is a guest lecturer at Washington College, where he
                teaches writing and communication.
              </p>
              <p>
                John chairs the Smithsonian&apos;s Center for Folklife and
                Cultural Heritage and is a Commissioner Emeritus and former Vice
                Chair of the National Portrait Gallery. His family endowed the
                Smithsonian&apos;s triennial Outwin Boochever Portrait
                Competition, now a cornerstone of contemporary portraiture in
                America. He previously served as an elected trustee of Cornell
                University and continues to serve on the Advisory Council of
                Cornell&apos;s College of Arts &amp; Sciences. He holds advanced
                degrees from Johns Hopkins SAIS and the University of Chicago
                Booth School of Business, and graduated with distinction from
                Cornell.
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
