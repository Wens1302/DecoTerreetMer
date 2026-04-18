import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Terre et Mer – Design d'Intérieur à Tanger",
    template: "%s | Terre et Mer Design",
  },
  description:
    "Agence de décoration intérieure et rénovation basée à Tanger, Maroc. Nous créons des espaces raffinés entre la terre et la mer.",
  keywords: [
    "décoration intérieure Tanger",
    "rénovation appartement Tanger",
    "architecte intérieur Maroc",
    "design intérieur Tanger",
    "home staging Maroc",
  ],
  authors: [{ name: "Terre et Mer Design" }],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://terreetmer.ma",
    siteName: "Terre et Mer Design",
    title: "Terre et Mer – Design d'Intérieur à Tanger",
    description:
      "Agence de décoration intérieure et rénovation basée à Tanger, Maroc.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
