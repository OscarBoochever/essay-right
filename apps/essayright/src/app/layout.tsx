import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EssayRight | Essay Coaching & Writing Mentorship for Students | Washington, D.C.",
  description:
    "Expert essay coaching and writing mentorship for students in Washington, D.C. and online. College admissions essays, personal statements, research papers, theses, and scholarship applications. Authentic voice development in the age of AI.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    // Core services
    "essay coaching",
    "writing mentorship",
    "writing tutor",
    "essay help",
    "writing coach for students",
    // Admissions
    "college admissions essay help",
    "personal statement help",
    "college essay tutor",
    "admissions essay coach",
    "supplemental essay help",
    "Common App essay help",
    "college application essay writing",
    "graduate school essay help",
    "MBA admissions essay",
    "law school personal statement",
    "medical school personal statement",
    "grad school application writing",
    // Academic writing
    "academic writing help",
    "research paper help",
    "thesis writing help",
    "dissertation editing",
    "honors thesis help",
    "capstone project writing",
    "term paper help",
    "lab report writing help",
    // Scholarships & fellowships
    "scholarship essay help",
    "fellowship application writing",
    "scholarship essay tutor",
    // School assignments
    "essay tutor for high school",
    "college writing help",
    "improve student writing skills",
    "writing fundamentals for students",
    // Career prep for students
    "cover letter help for students",
    "internship application writing",
    "student resume help",
    // AI & authenticity
    "authentic writing in the age of AI",
    "human writing not AI generated",
    "original essay writing help",
    "find your writing voice",
    // Geographic - DC metro
    "essay tutor Washington DC",
    "writing coach DC",
    "college essay help DC",
    "essay tutor Northern Virginia",
    "writing tutor Bethesda",
    "essay coach Arlington VA",
    "writing help McLean VA",
    "essay tutor Chevy Chase MD",
    "college essay help Potomac MD",
    "writing coach Silver Spring MD",
    "essay help Alexandria VA",
    "writing tutor Fairfax VA",
    "essay coach DMV area",
    // Remote/online
    "online essay tutor",
    "virtual writing coach",
    "remote essay coaching",
    "Zoom writing tutor",
    "online college essay help",
    "virtual admissions essay coaching",
    "essay tutor near me",
    "writing coach near me",
    // Parent searches
    "essay help for my child",
    "college essay tutor for teenager",
    "admissions essay help for high schooler",
    "writing coach for college applications",
    "help my child write better",
    "writing tutor for my son",
    "writing tutor for my daughter",
    "my kid's essay sounds like AI",
    "essay tutor that teaches not writes",
    // Student level
    "middle school essay help",
    "middle school writing tutor",
    "high school writing coach",
    "AP essay help",
    "AP English tutor",
    "writing tutor for teens",
    // International students / ESL
    "ESL essay help",
    "essay help for international students",
    "writing tutor for ESL students",
    "international student college essay help",
    "ESL writing coach",
    "TOEFL writing help",
    // Essay types
    "argumentative essay help",
    "persuasive essay tutor",
    "literary analysis essay help",
    "narrative essay coaching",
    "how to write a thesis statement",
    "essay structure help",
    // Specific programs
    "transfer student essay help",
    "early decision essay help",
    "why this school essay help",
    "college essay brainstorming",
    "statement of purpose help",
    "PhD personal statement help",
    // DC neighborhoods
    "essay tutor Georgetown",
    "writing coach Capitol Hill",
    "essay help Dupont Circle",
    "writing tutor Rockville MD",
    "essay coach Falls Church VA",
    "writing tutor Reston VA",
    "essay help Montgomery County MD",
  ],
  openGraph: {
    title: "EssayRight | Essay Coaching & Writing Mentorship for Students",
    description:
      "Expert essay coaching and writing mentorship for students in Washington, D.C. and online. College admissions, academic writing, and scholarship essays. Find your authentic voice.",
    url: "https://essayright.org",
    siteName: "EssayRight",
    type: "website",
  },
  alternates: {
    canonical: "https://essayright.org",
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
