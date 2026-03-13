import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EssayRight | Clear Thinking. Authentic Voice. Writing That Matters.",
  description:
    "EssayRight helps students and professionals craft original, persuasive writing for admissions, academic work, and professional goals. Expert writing mentorship in the age of AI.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
