import React, { Suspense } from 'react';
import styles from "./ServicesGeneral.module.css";
import ServicesOptions from '../ServicesOptions/ServicesOptions';

function ServicesGeneral() {
  return (
    <section id="servicios-contenido" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Catálogo Especializado</span>
          </div>

          <h2 className={styles.title}>
            Soluciones Técnicas & Legales de <span className={styles.titleAccent}>Agrimensura</span>
          </h2>

          <p className={styles.subtitle}>
            Selecciona la categoría de tu interés para conocer los procesos y solicitar atención inmediata con nuestro equipo en Las Terrenas y Samaná.
          </p>
        </div>

        {/* Options Switcher & Cards Catalog */}
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Cargando catálogo...</div>}>
          <ServicesOptions />
        </Suspense>
      </div>
    </section>
  );
}

export default ServicesGeneral;
