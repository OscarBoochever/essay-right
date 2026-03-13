"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [contactError, setContactError] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Get Started
          </h2>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            Every student and essay is different. The best way to begin is with
            a brief conversation about your goals and how EssayRight can help.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-navy mb-2">
                Thank you!
              </h3>
              <p className="text-navy/60">
                John will be in touch shortly to schedule your free consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name");
                const email = data.get("email") as string;
                const phone = data.get("phone") as string;
                const service = data.get("service");
                const message = data.get("message");

                if (!email.trim() && !phone.trim()) {
                  setContactError(true);
                  return;
                }
                setContactError(false);

                const contactInfo = [
                  email ? `Email: ${email}` : "",
                  phone ? `Phone: ${phone}` : "",
                ].filter(Boolean).join("%0A");

                window.location.href = `mailto:boocheverjohn@gmail.com?subject=EssayRight Inquiry from ${name}&body=Name: ${name}%0A${contactInfo}%0AService Interest: ${service}%0A%0A${message}`;
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
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
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors ${contactError ? "border-coral" : "border-navy/10"}`}
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
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors ${contactError ? "border-coral" : "border-navy/10"}`}
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>
              {contactError && (
                <p className="text-coral text-sm -mt-4">
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
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="Applications">Applications</option>
                  <option value="Academic Writing">Academic Writing</option>
                  <option value="Writing Coaching">Writing Coaching</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Tell us a bit about your goals <span className="text-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                  placeholder="What are you working on? What's the timeline?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal text-white font-semibold py-4 rounded-full text-lg hover:bg-teal-dark transition-colors shadow-lg shadow-teal/20"
              >
                Schedule a Free Consultation
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-navy/50 text-sm">
            Or email directly:{" "}
            <a
              href="mailto:boocheverjohn@gmail.com"
              className="text-teal hover:text-teal-dark transition-colors font-medium"
            >
              boocheverjohn@gmail.com
            </a>
          </p>
          <p className="text-navy/40 text-sm mt-2">
            In-person in the Washington, D.C. area or virtual anywhere.
          </p>
          <p className="text-navy/40 text-sm mt-2">
            Need-based financial aid is available. Just ask.
          </p>
        </div>
      </div>
    </section>
  );
}
