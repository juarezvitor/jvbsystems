import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JVBSystems — Automações & Desenvolvimento Web",
  description:
    "Desenvolvemos sistemas, automações via WhatsApp e experiências digitais que eliminam trabalho manual, fortalecem sua presença e geram crescimento real.",
  keywords: [
    "automação whatsapp",
    "desenvolvimento web",
    "sistemas sob medida",
    "next.js",
    "JVBSystems",
  ],
  authors: [{ name: "JVBSystems" }],
  openGraph: {
    title: "JVBSystems — Automações & Desenvolvimento Web",
    description:
      "Desenvolvemos sistemas, automações via WhatsApp e experiências digitais que eliminam trabalho manual e geram crescimento real.",
    url: "https://www.jvbsystems.com.br",
    siteName: "JVBSystems",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JVBSystems — Automações & Desenvolvimento Web",
    description:
      "Sistemas, automações e experiências digitais que geram resultado.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
