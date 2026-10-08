import type { Metadata } from "next";
import "./globals.css";
import "./studio.css";
import "./motion.css";
import "./github.css";

export const metadata: Metadata = {
  title: "Muhammad Furqan | Software Engineer",
  description:
    "Portfolio of Muhammad Furqan, a software engineer building reliable Rails backends, AI-enabled products, and thoughtful web experiences.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Muhammad Furqan | Software Engineer",
    description:
      "Backend-focused software engineer working across Ruby on Rails, Django, AI automation, and modern web systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
