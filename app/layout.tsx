import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geomatic de peña",
  description: "Somos una destacada oficina de agrimensura comprometida con la excelencia en servicios topográficos y cartográficos. Nuestro equipo de expertos agrimensores ofrece soluciones precisas y confiables para proyectos de ingeniería, construcción, urbanismo y más. Con tecnología de vanguardia y un enfoque centrado en el cliente, garantizamos resultados sobresalientes y satisfacción en cada proyecto. Confía en nosotros para tus necesidades de levantamiento topográfico, delineación de terrenos, parcelación y todo lo relacionado con la georreferenciación. ¡Contáctanos hoy mismo para impulsar el éxito de tu proyecto con precisión y profesionalismo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
