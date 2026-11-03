"use client";

import React from 'react';
import styles from "./ServicesHero.module.css";
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/share/ScrollIndicator/ScrollIndicator';

function ServicesHero() {
  return (
    <section className={styles.hero}>
      {/* Background Overlays */}
      <div className={styles.overlay} />
      <div className={styles.glowBlob} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className={styles.breadcrumb}>
              <svg
                className={styles.breadcrumbIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Inicio</span>
              <span style={{ opacity: 0.4 }}>/</span>
              <span>Servicios</span>
            </Link>
          </motion.div>

          {/* Eyebrow Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className={styles.badgePulse}>
              <span className={styles.pulsePing} />
              <span className={styles.pulseDot} />
            </span>
            <span>Soluciones Integrales de Agrimensura</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Servicios Profesionales de <span className={styles.titleAccent}>Agrimensura</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            Ofrecemos levantamientos de alta exactitud, saneamiento legal, deslindes y asesoría técnica especializada para el sector público y privado en Las Terrenas, Samaná y toda la República Dominicana.
          </motion.p>

          {/* Highlights / Service Categories Pills */}
          <motion.div
            className={styles.highlightsRow}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className={styles.highlightPill}>
              <div className={styles.highlightIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className={styles.highlightText}>
                <strong>Mensura Catastral & Deslindes</strong>
                <span>· Títulos y Ley</span>
              </div>
            </div>

            <div className={styles.highlightPill}>
              <div className={styles.highlightIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className={styles.highlightText}>
                <strong>Topografía de Obra</strong>
                <span>· Curvas y Nivelación</span>
              </div>
            </div>

            <div className={styles.highlightPill}>
              <div className={styles.highlightIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <div className={styles.highlightText}>
                <strong>División & Condominio</strong>
                <span>· Urbanismo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reusable Scroll Indicator */}
      <ScrollIndicator targetId="servicios-contenido" text="Explora nuestros servicios" />
    </section>
  );
}

export default ServicesHero;
