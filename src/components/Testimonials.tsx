export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-6 bg-light-teal">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
          What Families Are Saying
        </h2>
        <p className="text-navy/50 mb-16 text-lg">
          Testimonials coming soon.
        </p>

        {/* Placeholder testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm text-left"
            >
              <div className="text-teal text-3xl font-serif mb-4">&ldquo;</div>
              <p className="text-navy/40 italic leading-relaxed text-sm mb-6">
                Testimonial placeholder. Student and parent quotes will go
                here.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10" />
                <div>
                  <p className="text-navy/30 text-sm font-medium">Student Name</p>
                  <p className="text-navy/20 text-xs">University, Class of 20XX</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
