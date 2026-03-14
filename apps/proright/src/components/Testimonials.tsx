const testimonials = [
  {
    quote: "Testimonial placeholder. Client quotes will go here.",
    name: "Client Name",
    detail: "Title, Organization",
  },
  {
    quote: "Testimonial placeholder. Client quotes will go here.",
    name: "Client Name",
    detail: "Title, Organization",
  },
  {
    quote: "Testimonial placeholder. Client quotes will go here.",
    name: "Client Name",
    detail: "Title, Organization",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 bg-light-blue">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          What People Are Saying
        </h2>
        <p className="text-center text-navy/50 mb-16 text-lg">
          Testimonials coming soon.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm text-left"
            >
              <span className="text-deep-blue text-4xl font-serif leading-none block mb-3">
                &ldquo;
              </span>
              <p className="text-navy/60 italic leading-relaxed mb-6 text-sm">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-light-blue" />
                <div>
                  <p className="text-navy font-medium text-sm">{t.name}</p>
                  <p className="text-navy/40 text-xs">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
