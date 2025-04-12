import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Unidas Livre - Carro por Assinatura",
  description: "Carro 0km com tudo incluso. Assine com praticidade, economia e sem burocracia.",
  openGraph: {
    title: "Unidas Livre - Carro por Assinatura",
    description: "Carro 0km com tudo incluso. Assine com praticidade, economia e sem burocracia.",
    url: "https://unidas-livre.vercel.app/",
    siteName: "Unidas Livre",
    images: [
      {
        url: "/img/logo-unidas-livre.png",
        width: 372,
        height: 182,
        alt: "Imagem Logo do Unidas Livre",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
