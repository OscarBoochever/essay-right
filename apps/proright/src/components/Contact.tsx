"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Get Started
          </h2>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            Every professional and project is different. The best way to begin
            is with a brief conversation about your goals and how ProRight can
            help.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-deep-blue/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy mb-2">
                Thank you!
              </h3>
              <p className="text-navy/60">
                John will be in touch shortly to schedule your consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const email = data.get("email") as string;
                const phone = data.get("phone") as string;

                if (!email.trim() && !phone.trim()) {
                  setContactError(true);
                  return;
                }
                setContactError(false);
                setSubmitError(false);
                setSubmitting(true);

                data.append("access_key", "f2d3e4b1-4757-490b-83d9-8c8c6816c960");
                data.append("subject", `ProRight Inquiry from ${data.get("name")}`);
                data.append("from_name", "ProRight Contact Form");

                try {
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: data,
                  });
                  const result = await res.json();
                  if (result.success) {
                    setSubmitted(true);
                  } else {
                    setSubmitError(true);
                  }
                } catch {
                  setSubmitError(true);
                } finally {
                  setSubmitting(false);
                }
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Name <span className="text-amber">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-deep-blue/30 focus:border-deep-blue transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={() => contactError && setContactError(false)}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-deep-blue/30 focus:border-deep-blue transition-colors ${contactError ? "border-amber" : "border-navy/10"}`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={() => contactError && setContactError(false)}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-deep-blue/30 focus:border-deep-blue transition-colors ${contactError ? "border-amber" : "border-navy/10"}`}
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>
              {contactError && (
                <p className="text-amber text-sm -mt-4">
                  Please provide an email address or phone number.
                </p>
              )}

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  What can we help with?
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  onChange={(e) => {
                    e.target.classList.toggle("text-navy/30", e.target.value === "");
                    e.target.classList.toggle("text-navy", e.target.value !== "");
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy/30 focus:outline-none focus:ring-2 focus:ring-deep-blue/30 focus:border-deep-blue transition-colors"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="Reports & Deliverables">Reports & Deliverables</option>
                  <option value="Presentations & Speeches">Presentations & Speeches</option>
                  <option value="Published Works">Published Works</option>
                  <option value="Career Narratives">Career Narratives</option>
                  <option value="Strategic Communication Coaching">Strategic Communication Coaching</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Tell us about your project <span className="text-amber">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-deep-blue/30 focus:border-deep-blue transition-colors resize-none"
                  placeholder="What are you working on? What's the timeline?"
                />
              </div>

              {submitError && (
                <p className="text-amber text-sm">
                  Something went wrong. Please try again or email directly.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-deep-blue text-white font-semibold py-4 rounded-full text-lg hover:bg-deep-blue-dark transition-colors shadow-lg shadow-deep-blue/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Schedule a Consultation"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-navy/50 text-sm">
            Or email directly:{" "}
            <a
              href="mailto:boocheverjohn@gmail.com"
              className="text-deep-blue hover:text-deep-blue-dark transition-colors font-medium"
            >
              boocheverjohn@gmail.com
            </a>
          </p>
          <p className="text-navy/40 text-sm mt-2">
            In-person in the Washington, D.C. area or virtual anywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
