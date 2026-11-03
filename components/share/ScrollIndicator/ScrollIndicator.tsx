"use client";

import React from 'react';
import styles from './ScrollIndicator.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollIndicatorProps {
  text?: string;
  targetId?: string;
  className?: string;
}

export default function ScrollIndicator({
  text = "Desliza para explorar",
  targetId,
  className = "",
}: ScrollIndicatorProps) {
  const { scrollY } = useScroll();

  // Fades out and slides down smoothly as soon as the user starts scrolling
  const opacity = useTransform(scrollY, [0, 60], [1, 0]);
  const y = useTransform(scrollY, [0, 60], [0, 18]);

  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Default scroll down one viewport height
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={text}
      className={`${styles.scrollIndicator} ${className}`}
      style={{ opacity, y }}
    >
      <span className={styles.scrollText}>{text}</span>
      <div className={styles.scrollMouse}>
        <span className={styles.scrollWheel} />
      </div>
    </motion.button>
  );
}
