import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProRight | Professional Writing. Strategic Voice. Real Impact.",
  description:
    "ProRight helps professionals write with clarity, authority, and authentic voice. Strategic writing mentorship for career advancement, deliverables, and leadership communication.",
  keywords: [
    "professional writing",
    "executive communications",
    "writing mentorship",
    "strategic communication",
    "thought leadership",
    "career narratives",
    "business writing",
  ],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "ProRight | Professional Writing. Strategic Voice. Real Impact.",
    description:
      "ProRight helps professionals write with clarity, authority, and authentic voice.",
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
