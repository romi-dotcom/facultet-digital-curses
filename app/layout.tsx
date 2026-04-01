import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Facultet School — Licensed Education in Lisbon & Porto",
  description:
    "A licensed 14-month evening program in Lisbon or Porto. Get a student residence permit, European certificate, and real digital portfolio — in one enrollment.",
  openGraph: {
    title: "Facultet School — Licensed Education in Lisbon & Porto",
    description:
      "Your visa problem has an education solution. 2,147+ graduates. 94% visa approval. Campuses in Lisbon & Porto.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
