"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from "./ServicesOptions.module.css";
import { servicesData } from '@/constants/services';
import { whatsapp_number, contact_number } from '@/constants/contacts';
import { useSearchParams } from 'next/navigation';
import ServiceCard from '../ServiceCard/ServiceCard';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

function ServicesOptions() {
  const searchParams = useSearchParams();
  const [selectedGroup, setSelectedGroup] = useState<string>("Procesos de Mensura");
  const catalogRef = useRef<HTMLDivElement>(null);
  const cleanPhone = contact_number.replace(/[^0-9+]/g, "");

  // Read URL query parameter on mount or change
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const match = servicesData.find(
        (s) => s.title.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) {
        setSelectedGroup(match.title);

        // Smooth scroll to catalog with header offset
        setTimeout(() => {
          if (catalogRef.current) {
            const headerOffset = 90;
            const elementPosition = catalogRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 120);
      }
    }
  }, [searchParams]);

  // Handle Tab Switch
  const handleSelectTab = (title: string) => {
    setSelectedGroup(title);

    // Update URL query smoothly without reloading page
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set("service", title);
      window.history.replaceState(null, '', url.toString());
    }
  };

  // Find active group data
  const currentServiceGroup =
    servicesData.find((s) => s.title === selectedGroup) || servicesData[0];

  return (
    <div className={styles.main} ref={catalogRef}>
      {/* Modern Segmented Control / Pill Switcher */}
      <div className={styles.tabsContainer} role="tablist" aria-label="Grupos de servicios">
        {servicesData.map((group) => {
          const isActive = selectedGroup === group.title;
          const isMensura = group.title.includes("Mensura");

          return (
            <button
              key={group.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelectTab(group.title)}
              className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ""}`}
            >
              <span className={styles.tabIcon}>
                {isMensura ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                )}
              </span>

              <span>{group.title}</span>

              <span className={styles.tabCount}>
                {group.services?.length || 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* Group Description Banner */}
      <div className={styles.groupInfo}>
        <span className={styles.groupSubTitle}>
          {currentServiceGroup.subTitle}
        </span>
        <p className={styles.groupDesc}>
          {currentServiceGroup.description}
        </p>
      </div>

      {/* Cards Catalog Grid with Animated Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedGroup}
          className={styles.catalog}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {currentServiceGroup.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modern High-Converting Dedicated Call-to-Action (CTA) Banner */}
      <motion.div
        className={styles.ctaBanner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.ctaGlow} aria-hidden="true" />

        <div className={styles.ctaHeader}>
          <div className={styles.ctaBadge}>
            <span className={styles.ctaBadgeDot} />
            <span>Contratación Directa & Asesoría Técnica</span>
          </div>

          <h3 className={styles.ctaTitle}>
            ¿Listo para iniciar tu trabajo o necesitas asesoría para tu propiedad?
          </h3>

          <p className={styles.ctaSubtitle}>
            Tanto si deseas contratar un levantamiento, deslinde o proceso catastral de inmediato, como si buscas evaluar las opciones técnicas para tu terreno, nuestro equipo en Las Terrenas y Samaná te atiende con rapidez, precisión y presupuesto sin compromiso.
          </p>
        </div>

        <div className={styles.ctaActions}>
          <a
            href={whatsapp_number}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <Image
              src="/icons/whatsapp-icon.png"
              alt="WhatsApp"
              width={18}
              height={18}
              className={styles.whatsappIcon}
            />
            <span>Consultar por WhatsApp</span>
          </a>

          <Link href="/contact" className={styles.quoteBtn}>
            <span>Contratar o Cotizar Trabajo</span>
            <svg
              className={styles.btnArrowIcon}
              width="18"
              height="18"
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
        </div>

        <div className={styles.ctaFooter}>
          <a href={`tel:${cleanPhone}`} className={styles.phoneLink}>
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

          <div className={styles.ctaTrustPills}>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Contratación ágil y directa
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Respuesta en menos de 24h
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Presupuesto claro y sin compromiso
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServicesOptions;
