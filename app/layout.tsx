import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Atelier Yokai",
  description: "Salon de tatouage à Béthune",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
