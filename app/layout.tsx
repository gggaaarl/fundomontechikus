import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundo Montechico | Aceite de Oliva Extra Virgen",
  description:
    "Aceite de oliva extra virgen de extracción en frío. Achanizo - Chaparra - Caravelí - Arequipa - Perú.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${outfit.variable} ${bodoni.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-ink">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
