import type { Metadata } from 'next';
import ContactHero from '@/components/Contact/ContactHero/ContactHero';
import ContactSection from '@/components/Contact/ContactSection/ContactSection';
import React from 'react';

export const metadata: Metadata = {
  title: "Contacto & Cotización de Agrimensura | Las Terrenas, Samaná",
  description: "Solicita tu cotización inmediata para deslindes, saneamientos, curvas de nivel, levantamientos topográficos y proyectos de arquitectura o ingeniería civil en Las Terrenas y Samaná. Oficina en Plaza Deborah, C. Juan Pablo Duarte 154.",
  keywords: [
    "agrimensor",
    "agrimensura",
    "topografia",
    "deslinde",
    "saneamiento",
    "curva de nivel",
    "curvas de nivel",
    "ingenieria",
    "ingenieria civil",
    "arquitectura",
    "cotizacion",
    "presupuesto",
    "precio de deslinde",
    "contacto agrimensor las terrenas",
    "cotizacion deslinde las terrenas",
    "precio deslinde samana",
    "cuanto cuesta un agrimensor en republica dominicana",
    "agrimensor telefono las terrenas",
    "agrimensor whatsapp samana",
    "oficina agrimensura plaza deborah",
    "consulta tecnica agrimensura",
    "contratar agrimensor en las terrenas",
    "agrimensor urgente samana",
    "presupuesto levantamiento topografico",
    "agrimensor cerca de mi las terrenas",
    "Plaza Deborah C Juan Pablo Duarte 154",
    "contact land surveyor las terrenas",
    "surveying quote dominican republic",
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contacto & Cotización | Geomatic D' Peña Las Terrenas",
    description: "Atención técnica y legal directa para proyectos de agrimensura, arquitectura e ingeniería en Las Terrenas y Samaná. Respuesta rápida por WhatsApp o en nuestra oficina en Plaza Deborah.",
    url: 'https://geomaticdpena.com/contact',
    siteName: "Geomatic D' Peña",
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: "Contacto Geomatic D' Peña Las Terrenas",
      },
    ],
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contacto & Cotización | Geomatic D' Peña",
    description: "Comunícate con nuestros agrimensores en Las Terrenas y solicita presupuesto para tu proyecto.",
    images: ['/hero.jpg'],
  },
};

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
    </main>
  );
}
