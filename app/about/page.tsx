import type { Metadata } from 'next';
import AboutGeneral from '@/components/About/AboutGeneral/AboutGeneral';
import AboutHero from '@/components/About/AboutHero/AboutHero';
import React from 'react';

export const metadata: Metadata = {
  title: "Sobre Nosotros | Oficina de Agrimensura Geomatic D' Peña en Las Terrenas",
  description: "Conoce a Geomatic D' Peña (Geomática e Inmobiliaria De Peña), oficina líder de agrimensura, topografía e ingeniería en Las Terrenas y Samaná dirigida por el Agrim. Juan Tomás de Peña Medina. Más de 5 años de experiencia técnica y legal para el sector inmobiliario y de la construcción.",
  keywords: [
    "agrimensor",
    "agrimensura",
    "topografia",
    "topografo",
    "ingenieria",
    "ingenieria civil",
    "arquitectura",
    "deslinde",
    "saneamiento",
    "curva de nivel",
    "geodesia",
    "geomatica",
    "mensura",
    "catastro",
    "sobre geomatic d peña",
    "geomatica e inmobiliaria de peña",
    "agrimensor juan tomas de peña",
    "juan tomas de peña medina",
    "oficina de agrimensura las terrenas",
    "agrimensores en samana",
    "agrimensor en las terrenas",
    "empresa de agrimensura en samana",
    "equipo de agrimensura las terrenas",
    "tecnologia topografica moderna",
    "agrimensor profesional colegiado",
    "seguridad juridica inmobiliaria samana",
    "oficina agrimensor plaza deborah",
    "servicios catastrales certificados",
    "land surveyor las terrenas samana",
    "surveying company dominican republic",
    "experiencia agrimensura republica dominicana",
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "Sobre Nosotros | Geomatic D' Peña - Agrimensura en Las Terrenas",
    description: "Trayectoria, equipo y tecnología moderna en servicios de mensura, topografía e ingeniería en Las Terrenas y Samaná.",
    url: 'https://geomaticdpena.com/about',
    siteName: "Geomatic D' Peña",
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: "Equipo y Oficina Geomatic D' Peña Las Terrenas",
      },
    ],
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sobre Nosotros | Geomatic D' Peña",
    description: "Trayectoria, equipo y tecnología de vanguardia en agrimensura e ingeniería en Las Terrenas y Samaná.",
    images: ['/hero.jpg'],
  },
};

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutGeneral />
    </main>
  );
}
