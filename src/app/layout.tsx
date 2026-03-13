import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EssayRight | Clear Thinking. Authentic Voice. Writing That Matters.",
  description:
    "EssayRight helps students craft original, persuasive writing for college admissions, academic work, and graduate study. Expert essay coaching and writing mentorship in the age of AI.",
  keywords: [
    "essay coaching",
    "college admissions essays",
    "writing tutor",
    "essay help",
    "college application essays",
    "writing mentorship",
    "academic writing",
    "graduate school essays",
  ],
  openGraph: {
    title: "EssayRight | Clear Thinking. Authentic Voice. Writing That Matters.",
    description:
      "Expert essay coaching and writing mentorship for students at every level. Find your voice in the age of AI.",
    url: "https://essayright.org",
    siteName: "EssayRight",
    type: "website",
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
