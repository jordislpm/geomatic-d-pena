import React from 'react';
import styles from "./AboutCard.module.css";
import { aboutCardProps } from '@/types';

function AboutCard({ title, description, index }: aboutCardProps) {
  const formattedIndex = String(index).padStart(2, '0');

  return (
    <article className={styles.card}>
      {/* Signature Red Circular Badge that protrudes outside the card */}
      <div className={styles.indexBadge} aria-label={`Pilar ${index}`}>
        <span className={styles.indexNumber}>{formattedIndex}</span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Subtle modern bottom highlight */}
      <div className={styles.bottomAccent} aria-hidden="true" />
    </article>
  );
}

export default AboutCard;
