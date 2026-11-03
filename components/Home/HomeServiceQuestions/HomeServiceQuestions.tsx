"use client";

import React from 'react';
import styles from "./HomeServiceQuestions.module.css";
import { whatsapp_number, contact_number } from '@/constants/contacts';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function HomeServiceQuestions() {
  const cleanPhone = contact_number.replace(/[^0-9+]/g, "");

  return (
    <section className={styles.section} id="contacto-cta">
      <motion.div
        className={styles.bannerCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ambient Glow Elements */}
        <div className={styles.glowWatermark} />
        <div className={styles.glowBlobLeft} />

        {/* Left Side: Content */}
        <div className={styles.textArea}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>¿Tienes Dudas o Solicitudes?</span>
          </div>

          <h2 className={styles.title}>
            Hablemos de tu Proyecto o Terreno en Las Terrenas
          </h2>

          <p className={styles.subtitle}>
            Ofrecemos asesoría técnica y legal sin compromiso. Nuestro equipo de agrimensores está listo para responderte con rapidez y máxima precisión.
          </p>
        </div>

        {/* Right Side: Action Buttons */}
        <div className={styles.actionsArea}>
          <div className={styles.buttonsGroup}>
            {/* Primary Contact Link */}
            <Link href="/contact" className={styles.primaryBtn}>
              <span>Solicitar Cotización</span>
              <svg
                className={styles.btnArrowIcon}
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

            {/* WhatsApp Direct */}
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
          </div>

          {/* Quick Call Footnote */}
          <a href={`tel:${cleanPhone}`} className={styles.callFootnote}>
            <svg
              className={styles.phoneIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Llamada directa: {contact_number}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default HomeServiceQuestions;
