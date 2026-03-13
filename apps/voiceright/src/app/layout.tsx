import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoiceRight | Professional Writing. Strategic Voice. Real Impact.",
  description:
    "VoiceRight helps professionals write with clarity, authority, and authentic voice. Strategic writing mentorship for career advancement, deliverables, and leadership communication.",
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
