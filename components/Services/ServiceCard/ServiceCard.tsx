"use client";

import React from 'react';
import styles from "./ServiceCard.module.css";
import { ServiceCardProps } from '@/types';
import Image from 'next/image';

function ServiceCard({ title, logo, description }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      {/* Card Header: Icon & Category Tag */}
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <Image
            src={logo}
            alt={title}
            width={38}
            height={38}
            className={styles.iconImg}
          />
        </div>

        <span className={styles.cardTag}>Especializado</span>
      </div>

      {/* Card Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Card Footer: Subtle Quality Guarantee Tag */}
      <div className={styles.footerTag}>
        <svg
          className={styles.footerIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Garantía & Validez Jurídica</span>
      </div>
    </article>
  );
}

export default ServiceCard;
