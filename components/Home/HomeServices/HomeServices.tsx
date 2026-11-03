"use client";

import React, { useEffect, useState } from 'react';
import styles from "./HomeServices.module.css";
import Image from 'next/image';
import { servicesData } from '@/constants/services';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

function HomeServices() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setSearchParams(params);
    }
  }, []);

  const goToService = (route: string) => {
    if (searchParams) {
      searchParams.set("service", route);
      router.push(`/services?${searchParams.toString()}`);
    } else {
      router.push(`/services?service=${encodeURIComponent(route)}`);
    }
  };

  return (
    <section className={styles.section} id="servicios-home">
      {/* Section Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Nuestros Servicios</span>
        </div>

        <h2 className={styles.mainTitle}>
          Soluciones Especializadas para Cada <span className={styles.titleAccent}>Etapa de tu Terreno</span>
        </h2>

        <p className={styles.subtitle}>
          Desde procesos legales de saneamiento y titulación hasta levantamientos topográficos y planificación de obras de alta precisión.
        </p>
      </motion.div>

      {/* 2x2 Seamless Checkerboard Grid */}
      <div className={styles.gridContainer}>
        {servicesData.map((service, index) => {
          const isInverted = index % 2 !== 0;

          return (
            <motion.div
              key={service.title}
              className={`${styles.row} ${isInverted ? styles.rowInverted : ""}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image Quadrant */}
              <div className={styles.imageWrapper}>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.serviceImg}
                  priority={index === 0}
                />
                <div className={styles.imageOverlay} />

                <div className={styles.imageFloatingBadge}>
                  <span className={styles.floatingDot} />
                  <span>
                    {index === 0 ? "Procesos Catastrales & Títulos" : "Medición & Planificación de Obras"}
                  </span>
                </div>
              </div>

              {/* Content Quadrant */}
              <div className={styles.contentWrapper}>
                <span className={styles.categoryTag}>
                  {service.title}
                </span>

                <h3 className={styles.serviceTitle}>
                  {service.subTitle}
                </h3>

                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                {/* Sub-services highlight pills */}
                {service.services && service.services.length > 0 && (
                  <div className={styles.subServicesList}>
                    {service.services.slice(0, 4).map((subItem) => (
                      <span key={subItem.title} className={styles.subServicePill}>
                        <span className={styles.pillCheck}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>{subItem.title}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Modern CTA Button */}
                <button
                  type="button"
                  className={styles.ctaButton}
                  onClick={() => goToService(service.title)}
                  aria-label={`Ver detalles de ${service.title}`}
                >
                  <span>Explorar {service.title}</span>
                  <svg
                    className={styles.ctaButtonIcon}
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
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeServices;
