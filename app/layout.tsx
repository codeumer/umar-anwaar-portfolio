import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umar Anwaar | Senior React Native Developer",
  description:
    "Senior React Native Developer specializing in realtime systems, booking platforms, GPS tracking, mobile architecture, and performance optimization.",
  keywords: [
    "Umar Anwaar",
    "Senior React Native Developer",
    "React Native",
    "Reanimated",
    "Mobile Engineering",
    "Realtime Systems",
    "GPS Tracking",
    "Booking Platforms",
  ],
  authors: [{ name: "Umar Anwaar" }],
  openGraph: {
    title: "Umar Anwaar | Senior React Native Developer",
    description:
      "Senior React Native Developer specializing in realtime systems, booking platforms, GPS tracking, mobile architecture, and performance optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#070b12]">{children}</body>
    </html>
  );
}
