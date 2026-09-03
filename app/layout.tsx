import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jhinuk Roy • Full-Stack & AI/ML Engineer • Portfolio",
  description:
    "Portfolio of Jhinuk Roy : Full-Stack Developer & AI/ML Specialist. B.Tech CSBS from Asansol Engineering College. Real-time log analytics, CNN computer vision, and award-winning systems.",
  keywords: [
    "Jhinuk Roy",
    "Full-Stack Developer",
    "Python",
    "AI/ML Engineer",
    "Next.js",
    "React",
    "Django",
    "FastAPI",
    "Computer Vision",
    "Anomaly Detection",
    "Asansol Engineering College",
  ],
  authors: [{ name: "Jhinuk Roy" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&family=Space+Grotesk:wght@400;500;600;700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090b14] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
