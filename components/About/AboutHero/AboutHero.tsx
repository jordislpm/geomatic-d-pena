"use client";

import React from 'react';
import styles from "./AboutHero.module.css";
import Link from 'next/link';
import { company_name } from '@/constants';
import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/share/ScrollIndicator/ScrollIndicator';

function AboutHero() {
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
              <span>Sobre nosotros</span>
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
            <span>Trayectoria, Ética & Precisión</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Sobre <span className={styles.titleAccent}>{company_name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            Somos una oficina especializada en agrimensura, geodesia y cartografía en Las Terrenas y la provincia de Samaná. Combinamos tecnología de vanguardia y equipos modernos con un profundo conocimiento legal e inmobiliario para proteger el valor y la certeza de tu propiedad.
          </motion.p>

          {/* Highlights / Credentials Pills */}
          <motion.div
            className={styles.highlightsRow}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className={styles.highlightPill}>
              <div className={styles.highlightIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.highlightText}>
                <strong>Las Terrenas, Samaná</strong>
                <span>· Sede Central</span>
              </div>
            </div>

            <div className={styles.highlightPill}>
              <div className={styles.highlightIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className={styles.highlightText}>
                <strong>Tecnología de Vanguardia</strong>
                <span>· Máxima Precisión</span>
              </div>
            </div>

            <div className={styles.highlightPill}>
              <div className={styles.highlightIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className={styles.highlightText}>
                <strong>Seguridad Jurídica</strong>
                <span>· Deslindes y Títulos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reusable Scroll Indicator */}
      <ScrollIndicator targetId="sobre-nosotros" />
    </section>
  );
}

export default AboutHero;
