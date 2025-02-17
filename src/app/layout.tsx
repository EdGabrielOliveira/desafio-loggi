import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loggi - Acompanhe suas entregas em tempo real",
  description: "Rastreio de encomendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
