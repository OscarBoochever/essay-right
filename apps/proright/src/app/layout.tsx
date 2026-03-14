import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProRight | Professional Writing Coaching & Strategic Communication | Washington, D.C.",
  description:
    "Strategic writing mentorship for professionals in Washington, D.C. and online. Executive communications, board presentations, speeches, published works, career strategy, and communication coaching. Write with clarity and authority.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  keywords: [
    // Core services
    "professional writing coach",
    "writing mentorship for professionals",
    "strategic communication coaching",
    "executive writing coach",
    "business writing mentor",
    // Reports & deliverables
    "board presentation writing",
    "strategic plan writing help",
    "client deliverable writing",
    "policy document writing",
    "executive report writing",
    "professional report editing",
    "business document writing help",
    // Speeches & presentations
    "speech writing help",
    "keynote speech writing",
    "executive briefing preparation",
    "presentation script writing",
    "conference talk preparation",
    "panel remarks preparation",
    "public speaking coach",
    "speechwriter",
    // Published works
    "white paper writing",
    "op-ed writing help",
    "thought leadership content",
    "article ghostwriting",
    "professional article writing",
    "op-ed ghostwriter",
    "thought leadership ghostwriter",
    // Career strategy
    "executive bio writing",
    "LinkedIn profile writing",
    "professional cover letter writing",
    "executive resume writing",
    "career pivot strategy",
    "career advancement coaching",
    "interview preparation coaching",
    "compensation negotiation coaching",
    "professional positioning narrative",
    // Communication coaching
    "communication coaching for executives",
    "executive presence coaching",
    "leadership communication coaching",
    "ongoing writing mentorship",
    "professional development writing",
    // Industry-specific
    "writing coach for consultants",
    "writing help for government professionals",
    "nonprofit writing coach",
    "academic professional writing help",
    "writing for educators",
    "writing coach for public sector",
    // AI & authenticity
    "authentic professional writing",
    "human writing not AI",
    "professional voice development",
    "writing that sounds like you",
    // Geographic - DC metro
    "writing coach Washington DC",
    "professional writing help DC",
    "executive coach DC",
    "communication coaching DC",
    "writing mentor Northern Virginia",
    "professional writing coach Bethesda",
    "executive writing Arlington VA",
    "writing coach McLean VA",
    "business writing Chevy Chase MD",
    "writing coach Potomac MD",
    "communication coaching Silver Spring",
    "writing help Alexandria VA",
    "professional writing DMV area",
    // Remote/online
    "online professional writing coach",
    "virtual communication coaching",
    "remote writing mentorship",
    "Zoom writing coach",
    "online executive coaching",
    "virtual professional development",
    "writing coach near me",
    "professional writing help near me",
    // Pain-point searches
    "how to write better at work",
    "my writing sounds generic",
    "improve business writing skills",
    "writing takes too long",
    "how to write more concisely",
    "how to write clearly for executives",
    "writing holding me back at work",
    // Audience-specific
    "CEO writing coach",
    "writing coach for managers",
    "C-suite communication coaching",
    "writing mentor for entrepreneurs",
    "startup founder writing coach",
    // Additional services
    "grant writing coach",
    "proposal writing coach",
    "investor pitch writing help",
    "memo writing help",
    "executive summary writing help",
    "clear writing for business",
    "professional email writing help",
    // AI differentiation
    "stop sounding like ChatGPT at work",
    "AI-proof writing skills",
    "writing skills AI cannot replace",
    "personal brand voice coaching",
    "find your professional writing voice",
    // DC neighborhoods
    "writing coach Georgetown DC",
    "executive coach Capitol Hill",
    "professional writing Dupont Circle",
    "writing coach Tysons VA",
    "business writing Rockville MD",
    "writing mentor Falls Church VA",
    "professional writing coach Reston VA",
  ],
  openGraph: {
    title: "ProRight | Professional Writing Coaching & Strategic Communication",
    description:
      "Strategic writing mentorship for professionals in Washington, D.C. and online. Executive communications, speeches, published works, career strategy, and communication coaching.",
    url: "https://proright.org",
    siteName: "ProRight",
    type: "website",
  },
  alternates: {
    canonical: "https://proright.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
