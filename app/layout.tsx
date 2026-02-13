import type { Metadata } from "next";
import { Playfair_Display, Geologica } from "next/font/google";
import "./globals.css";


const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
})

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AyaỌba Aláṣẹ",
  description: "AyaỌba Aláṣẹ is a contemporary African fashion brand redefining modern femininity through modest elegance.",
  keywords: ["AyaỌba Aláṣẹ", "AyaỌba", "Aláṣẹ", "African fashion", "modest fashion", "contemporary fashion", "African brand", "modern femininity", "modest elegance"],
  authors: [{ name: "AyaỌba Aláṣẹ" }],
  creator: "AyaỌba Aláṣẹ",
  publisher: "AyaỌba Aláṣẹ",
  openGraph: {
    title: "AyaỌba Aláṣẹ",
    description: "AyaỌba Aláṣẹ is a contemporary African fashion brand redefining modern femininity through modest elegance.",
    url: "https://ayaobaalase.com",
    siteName: "AyaỌba Aláṣẹ",
    images: [
      {
        url: "https://ayaobaalase.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AyaỌba Aláṣẹ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AyaỌba Aláṣẹ",
    description: "AyaỌba Aláṣẹ is a contemporary African fashion brand redefining modern femininity through modest elegance.",
    images: ["https://ayaobaalase.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${geologica.variable} overflow-x-hidden  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
