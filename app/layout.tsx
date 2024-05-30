import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css"
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://geomaticdpena.com'),
  title: {
    default: 'Geomatic D\' Peña - Agrimensura en Las Terrenas, Samaná',
    template: '%s | Geomatic D\' Peña - Agrimensura en Las Terrenas, Samaná',
  },
  description: 'Somos una destacada oficina de agrimensura comprometida con la excelencia en servicios topográficos y cartográficos. Nuestro equipo de expertos agrimensores ofrece soluciones precisas y confiables para proyectos de ingeniería, construcción, urbanismo y más. Con tecnología de vanguardia y un enfoque centrado en el cliente, garantizamos resultados sobresalientes y satisfacción en cada proyecto. Confía en nosotros para tus necesidades de levantamiento topográfico, delineación de terrenos, parcelación y todo lo relacionado con la georreferenciación. ¡Contáctanos hoy mismo para impulsar el éxito de tu proyecto con precisión y profesionalismo!',
  applicationName: 'Geomatic D\' Peña',
  keywords: ['agrimensura', 'topografía', 'Las Terrenas', 'Samaná', 'República Dominicana', 'medición de terrenos', 'desarrollo inmobiliario', 'servicios profesionales', 'geodesia', 'cartografía', 'levantamientos topográficos', 'geomática', 'planificación urbana', 'georreferenciación', 'deslinde','saneamiento', 'curva de nivel', 'agrimensor', 'topografo'],
  authors: [{ name: 'Geomatic D\' Peña', url: 'https://geomaticdpena.com' }],
  creator: 'jordisdev.com',
  publisher: 'jordisdev.com',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    title: 'Geomatic D\' Peña - Agrimensura en Las Terrenas, Samaná',
    description: 'Somos una destacada oficina de agrimensura comprometida con la excelencia en servicios topográficos y cartográficos. Nuestro equipo de expertos agrimensores ofrece soluciones precisas y confiables para proyectos de ingeniería, construcción, urbanismo y más. Con tecnología de vanguardia y un enfoque centrado en el cliente, garantizamos resultados sobresalientes y satisfacción en cada proyecto. Confía en nosotros para tus necesidades de levantamiento topográfico, delineación de terrenos, parcelación y todo lo relacionado con la georreferenciación. ¡Contáctanos hoy mismo para impulsar el éxito de tu proyecto con precisión y profesionalismo!',
    url: 'https://geomaticdpena.com',
    siteName: 'Geomatic D\' Peña',
    type: 'website',
    locale: 'es-ES',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={``}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
