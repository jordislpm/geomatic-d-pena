import type { Metadata } from 'next';
import ServicesGeneral from '@/components/Services/ServicesGeneral/ServicesGeneral';
import ServicesHero from '@/components/Services/ServicesHero/ServicesHero';
import React from 'react';

export const metadata: Metadata = {
  title: "Servicios de Agrimensura, Deslindes y Topografía en Las Terrenas y Samaná",
  description: "Catálogo completo de servicios: deslindes, saneamientos, curvas de nivel para planos de arquitectura, subdivisiones, refundiciones, condominios y topografía aplicada a la ingeniería y construcción en Las Terrenas y Samaná.",
  keywords: [
    "deslinde",
    "deslindes",
    "saneamiento",
    "saneamientos",
    "curva de nivel",
    "curvas de nivel",
    "agrimensura",
    "agrimensor",
    "topografia",
    "topografo",
    "ingenieria",
    "ingenieria civil",
    "arquitectura",
    "planos de arquitectura",
    "condominio",
    "condominios",
    "subdivision",
    "refundicion",
    "replanteo",
    "linderos",
    "geodesia",
    "geomatica",
    "mensura",
    "catastro",
    "mensuras catastrales",
    "movimiento de tierra",
    "volumetria",
    "georreferenciacion",
    "regularizacion de terrenos",
    "servicios de agrimensura las terrenas",
    "deslindes en las terrenas",
    "deslinde de terrenos samana",
    "precio de deslinde en las terrenas",
    "saneamiento catastral republica dominicana",
    "subdivision de parcelas las terrenas",
    "constitucion de condominio las terrenas",
    "division de condominio samana",
    "regimen de condominio republica dominicana",
    "topografia para construccion",
    "levantamiento topografico las terrenas",
    "planos de curvas de nivel samana",
    "replanteo topografico de obras",
    "agrimensura para desarrollo inmobiliario",
    "land surveying services dominican republic",
    "boundary survey las terrenas",
    "topographic survey samana",
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Servicios de Agrimensura, Deslindes y Curvas de Nivel | Geomatic D' Peña",
    description: "Deslindes, saneamientos, curvas de nivel, subdivisiones, condominios y levantamientos topográficos para arquitectura e ingeniería en Las Terrenas y Samaná.",
    url: 'https://geomaticdpena.com/services',
    siteName: "Geomatic D' Peña",
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: "Servicios de Agrimensura en Las Terrenas",
      },
    ],
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Servicios de Agrimensura | Geomatic D' Peña",
    description: "Catálogo especializado de mensura, topografía e ingeniería en Las Terrenas y Samaná.",
    images: ['/hero.jpg'],
  },
};

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesGeneral />
    </main>
  );
}
