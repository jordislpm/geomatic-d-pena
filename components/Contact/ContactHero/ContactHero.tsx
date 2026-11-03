"use client";

import React from 'react';
import styles from "./ContactHero.module.css";
import Link from 'next/link';
import { contact_number, whatsapp_number, contacts_data } from '@/constants/contacts';
import { motion } from 'framer-motion';
import ScrollIndicator from '@/components/share/ScrollIndicator/ScrollIndicator';

function ContactHero() {
  const cleanPhone = contact_number.replace(/[^0-9+]/g, "");

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
              <span>Contacto</span>
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
            <span>Atención Personalizada & Asesoría Técnica</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Ponte en <span className={styles.titleAccent}>Contacto</span> con Nosotros
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            ¿Tienes un proyecto en desarrollo, necesitas un deslinde o asesoría técnica para tu terreno? Escríbenos o comunícate directamente con nuestros agrimensores en Las Terrenas y Samaná.
          </motion.p>

          {/* Quick Action Contact Pills */}
          <motion.div
            className={styles.contactActionsRow}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            {/* WhatsApp Direct Action */}
            <a
              href={whatsapp_number}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionPill} ${styles.actionPillWhatsapp}`}
            >
              <div className={styles.actionIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className={styles.actionText}>
                <strong>WhatsApp Directo</strong>
                <span>· Respuesta rápida</span>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${cleanPhone}`}
              className={styles.actionPill}
            >
              <div className={styles.actionIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className={styles.actionText}>
                <strong>{contact_number}</strong>
                <span>· Llamar</span>
              </div>
            </a>

            {/* Email Address */}
            <a
              href={`mailto:${contacts_data.email.info}`}
              className={styles.actionPill}
            >
              <div className={styles.actionIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.actionText}>
                <strong>{contacts_data.email.info}</strong>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Reusable Scroll Indicator */}
      <ScrollIndicator targetId="formulario-contacto" text="Envíanos un mensaje" />
    </section>
  );
}

export default ContactHero;
