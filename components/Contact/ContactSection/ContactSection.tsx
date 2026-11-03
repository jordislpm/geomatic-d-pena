"use client";

import React from 'react';
import styles from "./ContactSection.module.css";
import ContactForm from '../ContactForm/ContactForm';
import { contacts_data } from '@/constants/contacts';
import { motion } from 'framer-motion';

function ContactSection() {
  return (
    <section id="formulario-contacto" className={styles.section}>
      <div className={styles.container}>
        {/* Left Side: Map & Location Card */}
        <motion.div
          className={styles.mapCard}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.mapHeader}>
            <div className={styles.locationBadge}>
              <span className={styles.locationDot} />
              <span>Oficina Principal</span>
            </div>
            <h3 className={styles.locationTitle}>Nuestra Ubicación</h3>
            <p className={styles.locationAddress}>{contacts_data.address.info}</p>
          </div>

          <div className={styles.iframeContainer}>
            <iframe
              title="Ubicación Geomatic D' Peña en Las Terrenas"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=es&amp;q=C.%20Juan%20Pablo%20Duarte%20154,%20Las%20Terrenas%2032000,%20Rep%C3%BAblica%20Dominicana.+(Geomatic%20D'%20pe%C3%B1a)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
              loading="lazy"
              className={styles.mapIframe}
            />
          </div>

          <div className={styles.mapFooter}>
            <a
              href="https://maps.google.com/?q=Plaza+Deborah+Las+Terrenas"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openMapLink}
            >
              <span>Abrir en Google Maps</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className={styles.formWrap}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
