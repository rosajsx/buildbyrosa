import type { Metadata } from "next";
import { Space_Mono, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CursorEffect from "@/components/CursorEffect";
import Nav from "@/components/Nav";
import { LangProvider } from "@/context/LangContext";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lucas Rosa — build by rosa",
  description:
    "Desenvolvedor front-end com foco em React e React Native. Constrói interfaces rápidas, acessíveis e com atenção ao detalhe — do mobile ao desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceMono.variable} ${jetbrainsMono.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');else if(t==='dark')document.documentElement.classList.add('dark');})();` }} />
      </head>
      <body>
        <LangProvider>
          <CursorEffect />
          <Nav />
          {children}
          <Analytics />
          <SpeedInsights />
        </LangProvider>
      </body>
    </html>
  );
}
