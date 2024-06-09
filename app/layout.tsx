import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css"
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingButton from "@/components/share/FloatingButton/FloatingButton";
import Script from "next/script";


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
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Script 
      id="gtm" 
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTH2ZSH4')`
      }}>
      </Script>

      <Script 
      id="gtm2" 
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JYV2HT1E1T')`
      }}>
      </Script>

      {/* <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTH2ZSH4');</script>
<!-- End Google Tag Manager --> */}
      </head>
      <body className={``}>
        <Header />
        {children}
        <Footer />
        <FloatingButton/>
      </body>
    </html>
  );
}
