"use client";

import React, { useRef } from "react";
import styles from "./HomeReviews.module.css";
import CardReview from "../../share/CardReview/CardReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { reviewsData } from "../../../constants/reviews";
import { motion } from "framer-motion";

function HomeReviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className={styles.section} id="testimonios">
      <div className={styles.glowBlob} />

      <div className={styles.container}>
        {/* Left Column: Narrative & Trust Signals */}
        <motion.div
          className={styles.textArea}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Opiniones de Clientes</span>
          </div>

          <h2 className={styles.title}>
            Confianza y Precisión que <span className={styles.titleAccent}>Hablan por Sí Mismas</span>
          </h2>

          <p className={styles.subtitle}>
            Propietarios, ingenieros y desarrolladores en Las Terrenas y Samaná avalan nuestro compromiso, puntualidad y certeza técnica.
          </p>

          {/* Google Trust Rating Badge */}
          <div className={styles.trustBadge}>
            <div className={styles.trustScore}>
              <span className={styles.trustNumber}>5.0</span>
              <div className={styles.trustStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={styles.trustStarIcon}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>

            <span className={styles.trustDivider} />

            <span className={styles.trustLabel}>
              100% Reseñas Verificadas en Google
            </span>
          </div>

          {/* Navigation Controls */}
          <div className={styles.buttonsRow}>
            <button
              type="button"
              onClick={handlePrev}
              className={styles.navButton}
              aria-label="Reseña anterior"
            >
              <svg
                className={styles.navIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className={styles.navButton}
              aria-label="Siguiente reseña"
            >
              <svg
                className={styles.navIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Swiper Carousel */}
        <motion.div
          className={styles.reviewsArea}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
              },
              769: {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
            className={styles.swiper}
          >
            {reviewsData.map((review, i) => (
              <SwiperSlide key={`${review.name}-${i}`} className={styles.swiperSlide}>
                <CardReview {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeReviews;
