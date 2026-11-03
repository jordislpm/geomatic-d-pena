"use client";

import React from 'react';
import styles from "./HomeAbout.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { company_name } from '@/constants';
import { motion } from 'framer-motion';

function HomeAbout() {
  return (
    <section className={styles.section} id="sobre-nosotros-home">
      <div className={styles.container}>
        {/* Left Column: Company Narrative */}
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Sobre nuestra empresa</span>
          </div>

          {/* Heading */}
          <h2 className={styles.title}>
            Precisión y <span className={styles.titleAccent}>Certeza Jurídica</span> en Cada Proyecto.
          </h2>

          {/* Description */}
          <p className={styles.description}>
            <strong>{company_name}</strong> es una oficina profesional de agrimensura multidisciplinaria. Brindamos soluciones integrales para el sector público y privado, combinando tecnología de vanguardia y estricta metodología técnica que garantiza máxima exactitud, agiliza plazos y protege tu patrimonio.
          </p>

          {/* Value Checklist */}
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <div className={styles.featureCheck}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <strong>Agrimensura Legal & Deslindes:</strong> Seguridad jurídica en procesos catastrales y títulos.
              </div>
            </li>

            <li className={styles.featureItem}>
              <div className={styles.featureCheck}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <strong>Tecnología de Vanguardia:</strong> Equipos modernos de alta precisión para levantamientos.
              </div>
            </li>

            <li className={styles.featureItem}>
              <div className={styles.featureCheck}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <strong>Sede en Las Terrenas:</strong> Cobertura ágil y experta en Samaná y a nivel nacional.
              </div>
            </li>
          </ul>

          {/* CTA Link */}
          <Link href="/about" className={styles.ctaBtn}>
            <span>Conoce Más Sobre Nosotros</span>
            <svg
              className={styles.ctaIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>

        {/* Right Column: Differentiator Modern Card */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
        >
          <div className={styles.card}>
            <div className={styles.cardGlow} />

            <div className={styles.cardHeader}>
              <span className={styles.cardBadge}>Valor Diferencial</span>
              <div className={styles.cardEquipment}>
                <Image
                  src="/topo-level.png"
                  alt="Equipo topográfico de precisión"
                  width={36}
                  height={36}
                  priority={false}
                />
              </div>
            </div>

            <h3 className={styles.cardTitle}>Lo que nos diferencia</h3>

            <p className={styles.cardText}>
              Acompañamiento técnico y legal continuo desde la planificación hasta la obtención de aprobaciones catastrales, garantizando resultados exactos conforme a la ley.
            </p>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className={styles.pillarInfo}>
                  <span className={styles.pillarTitle}>Seguridad Jurídica</span>
                  <span className={styles.pillarDesc}>Apego total a la Ley de Registro Inmobiliario dominicana.</span>
                </div>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className={styles.pillarInfo}>
                  <span className={styles.pillarTitle}>Compromiso & Puntualidad</span>
                  <span className={styles.pillarDesc}>Cumplimiento riguroso de cronogramas y entregas ágiles.</span>
                </div>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.pillarInfo}>
                  <span className={styles.pillarTitle}>Experiencia Local</span>
                  <span className={styles.pillarDesc}>Conocimiento técnico especializado del terreno de Samaná.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeAbout;
