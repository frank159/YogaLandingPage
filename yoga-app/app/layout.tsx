"use client"; // Necessário para usar useEffect e window

import { useEffect } from "react";
import { Playfair_Display, Lato } from "next/font/google"; 
import { GlobalStyles } from "@/app/GlobalStyles";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700", "900"], 
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  useEffect(() => {
    // 1. Força o scroll para o topo imediatamente ao carregar/recarregar
    window.scrollTo(0, 0);
    
    // 2. Desativa a restauração automática de scroll do navegador
    // Isso evita que o navegador tente pular para a posição antiga antes da animação
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <html lang="pt-br" className={`${playfair.variable} ${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}