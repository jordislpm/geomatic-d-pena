"use client";

import React from 'react';
import styles from "./AboutGeneral.module.css";
import Image from 'next/image';
import Link from 'next/link';
import AboutCard from '../AboutCard/AboutCard';
import { aboutApproach } from '@/constants/about';
import { motion } from 'framer-motion';

function AboutGeneral() {
  return (
    <section id="sobre-nosotros" className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Company Narrative & Visual Showcase */}
        <motion.div
          className={styles.narrativeCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Trayectoria & Compromiso</span>
          </div>

          <h2 className={styles.title}>
            Agrimensura de Alta Precisión y <span className={styles.titleAccent}>Certeza Jurídica</span> en Cada Proyecto
          </h2>

          <div className={styles.textBlock}>
            <p className={styles.leadParagraph}>
              Somos una destacada oficina de agrimensura en Las Terrenas y la península de Samaná, comprometida con la excelencia técnica y legal en servicios topográficos y de mensura catastral.
            </p>

            <p>
              Ofrecemos soluciones precisas y confiables para proyectos de ingeniería, construcción, urbanismo e inversión inmobiliaria. Vamos más allá de la agrimensura tradicional, integrando tecnología moderna y un enfoque centrado en la tranquilidad de nuestros clientes para garantizar resultados rigurosos en cada fase del proceso.
            </p>

            <p>
              Nuestra labor abarca regularización de terrenos, deslindes, saneamientos, subdivisión, refundición, división para constitución de condominio y topografía aplicada a obras civiles. Nos enorgullecemos de brindar soluciones que ahorran tiempo, previenen contingencias y aseguran que cada propiedad cuente con un respaldo documental y técnico incuestionable.
            </p>
          </div>

          {/* Action Link */}
          <div className={styles.actionWrap}>
            <Link href="/contact" className={styles.ctaButton}>
              <span>Consultar con un Agrimensor</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          {/* Two Images Gallery */}
          <div className={styles.imagesGrid}>
            <div className={styles.imageCard}>
              <div className={styles.imageWrap}>
                <Image
                  src="/surveyor-topcon.jpg"
                  alt="Agrimensor con equipo de alta precisión en campo"
                  width={420}
                  height={280}
                  className={styles.imageImg}
                />
              </div>
              <div className={styles.imageCaption}>
                <span className={styles.captionTag}>Tecnología de Campo</span>
                <span className={styles.captionTitle}>Equipos Modernos de Alta Exactitud</span>
              </div>
            </div>

            <div className={styles.imageCard}>
              <div className={styles.imageWrap}>
                <Image
                  src="/contour.png"
                  alt="Modelado topográfico y curvas de nivel digitales"
                  width={420}
                  height={280}
                  className={styles.imageImg}
                />
              </div>
              <div className={styles.imageCaption}>
                <span className={styles.captionTag}>Cartografía Digital</span>
                <span className={styles.captionTitle}>Modelado Topográfico y Curvas de Nivel</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Why Choose Us / Our Approach (Numbered Cards) */}
        <motion.aside
          className={styles.approachCol}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.approachHeader}>
            <div className={styles.badgeDark}>
              <span className={styles.badgeDotDark} />
              <span>¿Por qué elegirnos?</span>
            </div>

            <h3 className={styles.approachTitle}>
              Nuestro <span className={styles.titleAccent}>Enfoque</span>
            </h3>

            <p className={styles.approachSubtitle}>
              Cuatro pilares de valor que garantizan la precisión, celeridad y seguridad técnica en cada proyecto inmobiliario:
            </p>
          </div>

          <div className={styles.approachList}>
            {aboutApproach.map((approach, index) => (
              <AboutCard
                key={approach.title}
                index={index + 1}
                title={approach.title}
                description={approach.description}
              />
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default AboutGeneral;
