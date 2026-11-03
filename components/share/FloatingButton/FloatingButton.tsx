"use client";

import React, { useState, useEffect } from 'react';
import styles from './FloatingButton.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function FloatingButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / docHeight)));
      }

      setIsVisible(scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Ring calculation: r=21, circumference = 2 * PI * 21 ≈ 131.95
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Volver arriba"
          title="Volver arriba"
          className={styles.floatingButton}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          {/* Circular Progress Ring */}
          <svg className={styles.progressRing} width="48" height="48" viewBox="0 0 48 48">
            {/* Background track */}
            <circle
              className={styles.ringTrack}
              cx="24"
              cy="24"
              r={radius}
              strokeWidth="2.5"
            />
            {/* Progress indicator */}
            <circle
              className={styles.ringProgress}
              cx="24"
              cy="24"
              r={radius}
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          {/* Crisp Upward Chevron Arrow */}
          <svg
            className={styles.arrowIcon}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default FloatingButton;
