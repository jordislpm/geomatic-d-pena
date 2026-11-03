import type { Metadata } from "next";
import styles from "./page.module.css";
import Hero from "@/components/Home/HomeHero/HomeHero";
import HomeAbout from "@/components/Home/HomeAbout/HomeAbout";
import HomeServices from "@/components/Home/HomeServices/HomeServices";
import HomeReviews from "@/components/Home/HomeReviews/HomeReviews";
import HomeServiceQuestions from "@/components/Home/HomeServiceQuestions/HomeServiceQuestions";

export const metadata: Metadata = {
  title: "Agrimensor en Las Terrenas y Samaná | Geomatic D' Peña",
  description: "Oficina líder de agrimensura, topografía, ingeniería y arquitectura en Las Terrenas y Samaná. Especialistas en deslindes, saneamiento catastral, curvas de nivel, subdivisiones, condominios y levantamientos GPS con tecnología moderna y garantía jurídica.",
  keywords: [
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
    "parcela",
    "solares",
    "terrenos",
    "condominio",
    "subdivision",
    "refundicion",
    "replanteo",
    "linderos",
    "georreferenciacion",
    "planos",
    "planimetria",
    "altimetria",
    "obras civiles",
    "construccion",
    "titulacion",
    "tribunal de tierras",
    "las terrenas",
    "samana",
    "republica dominicana",
    "las galeras",
    "sanchez",
    "coson",
    "portillo",
    "agrimensor en las terrenas",
    "agrimensura las terrenas",
    "agrimensores en samana",
    "deslindes en las terrenas",
    "deslinde de terrenos samana",
    "topografia en las terrenas",
    "topografo en las terrenas",
    "saneamiento catastral samana",
    "subdivision de parcelas las terrenas",
    "constitucion de condominio samana",
    "levantamiento topografico las terrenas",
    "planos de curvas de nivel",
    "agrimensor juan tomas de peña",
    "geomatica e inmobiliaria de peña",
    "oficina de agrimensura plaza deborah",
    "land surveyor",
    "surveyor",
    "boundary survey",
    "topographic survey las terrenas",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Agrimensor en Las Terrenas y Samaná | Geomatic D' Peña",
    description: "Servicios líderes de agrimensura, deslindes, curvas de nivel y topografía para arquitectura e ingeniería en Las Terrenas y Samaná.",
    url: 'https://geomaticdpena.com',
    siteName: "Geomatic D' Peña",
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: "Geomatic D' Peña - Agrimensor en Las Terrenas y Samaná",
      },
    ],
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agrimensor en Las Terrenas y Samaná | Geomatic D' Peña",
    description: "Deslindes, saneamientos, curvas de nivel, subdivisiones y topografía de precisión en Las Terrenas y Samaná.",
    images: ['/hero.jpg'],
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeReviews />
      <HomeServiceQuestions />
    </main>
  );
}
