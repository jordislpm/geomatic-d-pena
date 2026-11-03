"use client";

import React from 'react'
import styles from "./HomeHero.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { whatsapp_number } from '@/constants/contacts'
import { motion } from 'framer-motion'
import ScrollIndicator from '@/components/share/ScrollIndicator/ScrollIndicator'

function HomeHero() {
  return (
    <>
      {/* 1. Fullscreen Hero Section (100% of initial screen) */}
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.glowBlob} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            {/* Animated Badge */}
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className={styles.badgePulse}>
                <span className={styles.pulsePing} />
                <span className={styles.pulseDot} />
              </span>
              <span>Agrimensura & Topografía de Alta Precisión</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Profesionalismo <span className={styles.titleAccent}>Garantizado</span> en Cada Medición.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              Soluciones topográficas, deslindes, parcelación y geodesia con tecnología de vanguardia para proyectos inmobiliarios y de construcción en Las Terrenas, Samaná y todo el Nordeste.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              <Link href="/contact" className={styles.primaryBtn}>
                <span>Solicitar Cotización</span>
                <svg
                  className={styles.btnArrow}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services" className={styles.secondaryBtn}>
                <span>Nuestros Servicios</span>
              </Link>

              <a
                href={whatsapp_number}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <Image
                  src="/icons/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className={styles.whatsappIcon}
                />
                <span>WhatsApp Directo</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Reusable Scroll Indicator at bottom of 100vh hero */}
        <ScrollIndicator />
      </section>

      {/* 2. Feature / Trust Banner (Appears on Scroll) */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.metricsRow}>
            <motion.div
              className={styles.metricCard}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className={styles.metricIconWrap}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.metricInfo}>
                <span className={styles.metricTitle}>Sede en Las Terrenas</span>
                <span className={styles.metricDesc}>Samaná y todo el Nordeste</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.metricCard}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            >
              <div className={styles.metricIconWrap}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="22" y1="12" x2="18" y2="12" />
                  <line x1="6" y1="12" x2="2" y2="12" />
                  <line x1="12" y1="6" x2="12" y2="2" />
                  <line x1="12" y1="22" x2="12" y2="18" />
                </svg>
              </div>
              <div className={styles.metricInfo}>
                <span className={styles.metricTitle}>Tecnología de Vanguardia</span>
                <span className={styles.metricDesc}>Equipos modernos de alta exactitud</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.metricCard}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              <div className={styles.metricIconWrap}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className={styles.metricInfo}>
                <span className={styles.metricTitle}>Agrimensura Legal</span>
                <span className={styles.metricDesc}>Deslindes y regularización</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeHero
