import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://facultet.school"),
  title: "Student Permit Renewal in Portugal | Facultet School",
  description:
    "Evening professional programmes with an AIMA-accepted enrolment certificate. DGERT-licensed school in Lisbon. Documents ready in 2–3 business days.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Student Permit Renewal in Portugal | Facultet School",
    description:
      "Keep your student permit. Build your European career. 423 students enrolled. DGERT-licensed.",
    locale: "en_US",
    type: "website",
    url: "https://facultet.school",
    images: [
      {
        url: "/gallery/gallery-1.png",
        width: 1200,
        height: 630,
        alt: "Facultet School Lisbon campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Permit Renewal in Portugal | Facultet School",
    description:
      "Evening professional programmes with an AIMA-accepted enrolment certificate. DGERT-licensed school in Lisbon.",
    images: ["/gallery/gallery-1.png"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Facultet School",
  url: "https://facultet.school",
  logo: "https://facultet.school/favicon.ico",
  description:
    "DGERT-licensed educational institution in Lisbon offering evening professional programmes with AIMA-accepted enrolment certificates for student permit renewal.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  areaServed: "PT",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "admissions",
    email: "leto@facultet.school",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "423",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
