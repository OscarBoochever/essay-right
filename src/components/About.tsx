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
                John Boochever has spent more than three decades helping leaders
                and organizations communicate complex ideas clearly and
                persuasively. He brings that same rigor, and genuine love of
                good writing, to helping students find their voice.
              </p>
              <p>
                Professionally, John was a partner at two of the world&apos;s leading
                consulting firms. At Oliver Wyman, he was a founding partner and
                global head of the firm&apos;s Digital and Technology Strategy
                practice. Earlier, at Booz Allen Hamilton, he led the
                Information Systems business across Europe and the Middle East
                and served on both firms&apos; management committees. In recent
                years, he has advised minority- and women-owned consulting firms
                and education-focused enterprises on business development and
                institutional growth.
              </p>
              <p>
                John has a long and deep relationship with the Smithsonian
                Institution. He chairs the Center for Folklife and Cultural
                Heritage, which includes Smithsonian Folkways Recordings, and is
                a Commissioner Emeritus of the National Portrait Gallery, where
                he served as Vice Chair. His family endowed and continues to
                sustain the Smithsonian&apos;s triennial Outwin Boochever Portrait
                Competition, now a cornerstone of contemporary portraiture in
                America.
              </p>
              <p>
                His governance experience extends to higher education and
                nonprofits: he previously served as an elected trustee of Cornell
                University and continues to serve on the Advisory Council of
                Cornell&apos;s College of Arts & Sciences. His board service has
                included Higher Achievement, Sidwell Friends School, and other
                educational organizations.
              </p>
              <p>
                On a more personal note: John has been editing his three
                children&apos;s writing since grade school. Between them, they have
                collected one PhD, four master&apos;s degrees, and three
                bachelor&apos;s degrees across Cornell, Harvard, UC Davis, the
                University of Vermont, and Lipscomb University. He takes partial
                credit for the essays.
              </p>
              <p>
                Beyond his own family, John has helped two generations of young
                management consultants become better business writers, and has
                coached applicants for fellowships, grants, and board roles.
              </p>
              <p>
                He holds advanced degrees from the Johns Hopkins School of
                Advanced International Studies (SAIS) and the University of
                Chicago Booth School of Business, and did his undergraduate work
                at Cornell University, where he graduated with distinction.
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
