import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./fonts.css";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import FloatingButton from "@/components/share/FloatingButton/FloatingButton";
import Script from "next/script";
import { totalReviewsCount, averageRatingString } from "@/constants/reviews";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://geomaticdpena.com'),
  title: {
    default: "Geomatic D' Peña | Agrimensor en Las Terrenas y Samaná",
    template: "%s | Geomatic D' Peña",
  },
  description: "Oficina líder de agrimensura, topografía, ingeniería y arquitectura en Las Terrenas, Samaná, RD. Especialistas en deslindes, saneamientos, curvas de nivel, subdivisiones, condominios y levantamientos de alta precisión.",
  applicationName: "Geomatic D' Peña",
  keywords: [
    // Palabras clave sueltas esenciales
    "agrimensor",
    "agrimensura",
    "topografo",
    "topografia",
    "deslinde",
    "deslindes",
    "saneamiento",
    "saneamientos",
    "curva de nivel",
    "curvas de nivel",
    "ingenieria",
    "ingenieria civil",
    "arquitectura",
    "geodesia",
    "geomatica",
    "mensura",
    "catastro",
    "mensuras catastrales",
    "parcela",
    "parcelas",
    "solares",
    "terrenos",
    "condominio",
    "condominios",
    "subdivision",
    "refundicion",
    "replanteo",
    "linderos",
    "georreferenciacion",
    "planos",
    "planimetria",
    "altimetria",
    "construccion",
    "obras civiles",
    "titulacion",
    "titulos de propiedad",
    "tribunal de tierras",
    "jurisdiccion inmobiliaria",
    "gps",
    "gps diferencial",
    "estacion total",
    "dron",
    "drones",
    "fotogrametria",
    "peritaje",
    "movimiento de tierra",
    // Ubicaciones locales y regionales
    "las terrenas",
    "samana",
    "republica dominicana",
    "las galeras",
    "sanchez",
    "coson",
    "portillo",
    "playa bonita",
    "plaza deborah",
    // Términos compuestos de alta intención de búsqueda
    "agrimensor en las terrenas",
    "agrimensor samana",
    "agrimensura las terrenas",
    "agrimensores en samana",
    "deslindes en las terrenas",
    "deslinde de terrenos samana",
    "topografia en las terrenas",
    "topografo en las terrenas",
    "saneamiento catastral samana",
    "saneamiento inmobiliario las terrenas",
    "subdivision de parcelas las terrenas",
    "constitucion de condominio samana",
    "division de condominio las terrenas",
    "levantamiento topografico las terrenas",
    "planos para arquitectura e ingenieria",
    "agrimensor juan tomas de peña",
    "geomatica e inmobiliaria de peña",
    "oficina de agrimensura plaza deborah",
    "precio de deslinde en las terrenas",
    "cotizacion agrimensura las terrenas",
    // Inglés para inversores extranjeros
    "land surveyor",
    "surveyor",
    "topography",
    "boundary survey",
    "land surveying las terrenas",
    "topographic survey dominican republic",
  ],
  authors: [{ name: "Geomatic D' Peña", url: "https://geomaticdpena.com" }],
  creator: "Geomatic D' Peña",
  publisher: "Geomatic D' Peña",
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Geomatic D' Peña | Agrimensor en Las Terrenas y Samaná",
    description: "Servicios expertos de agrimensura, deslindes, saneamientos catastrales, curvas de nivel y topografía para arquitectura e ingeniería en Las Terrenas y Samaná.",
    url: 'https://geomaticdpena.com',
    siteName: "Geomatic D' Peña",
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: "Geomatic D' Peña - Agrimensura, Deslindes y Topografía en Las Terrenas",
      },
    ],
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Geomatic D' Peña | Agrimensor en Las Terrenas y Samaná",
    description: "Deslindes, saneamientos, curvas de nivel y topografía de precisión para proyectos inmobiliarios, de arquitectura e ingeniería en Las Terrenas y Samaná.",
    images: ['/hero.jpg'],
  },
};

// JSON-LD LocalBusiness / ProfessionalService structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Geomatic D' Peña",
  "alternateName": [
    "Geomática e Inmobiliaria De Peña",
    "Geomatic D Peña",
    "Agrimensor Juan Tomas de Peña"
  ],
  "image": "https://geomaticdpena.com/hero.jpg",
  "@id": "https://geomaticdpena.com/#organization",
  "url": "https://geomaticdpena.com",
  "telephone": "+18493737502",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaza Deborah, C. Juan Pablo Duarte 154",
    "addressLocality": "Las Terrenas",
    "addressRegion": "Samaná",
    "postalCode": "32000",
    "addressCountry": "DO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.3125206,
    "longitude": -69.5430732
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Las Terrenas" },
    { "@type": "AdministrativeArea", "name": "Samaná" },
    { "@type": "AdministrativeArea", "name": "Las Galeras" },
    { "@type": "AdministrativeArea", "name": "Sánchez" },
    { "@type": "AdministrativeArea", "name": "Cosón" },
    { "@type": "AdministrativeArea", "name": "Portillo" },
    { "@type": "Country", "name": "República Dominicana" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": averageRatingString,
    "reviewCount": String(totalReviewsCount),
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Agrimensura, Topografía, Ingeniería y Arquitectura",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deslindes y Saneamientos Catastrales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Levantamientos Topográficos y Curvas de Nivel para Arquitectura"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Subdivisión y Refundición de Parcelas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "División para Constitución de Condominio"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Topografía Aplicada a la Construcción e Ingeniería Civil"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {/* Structured Data (Schema.org JSON-LD) for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTH2ZSH4')`,
          }}
        />

        <Script
          id="gtm2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JYV2HT1E1T');`,
          }}
        />

        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
