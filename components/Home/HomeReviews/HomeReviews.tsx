"use client";

import React, { useRef, useState } from "react";
import styles from "./HomeReviews.module.css";
import CardReview from "../../share/CardReview/CardReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  reviewsData,
  totalReviewsCount,
  averageRating,
  averageRatingString,
} from "../../../constants/reviews";
import { motion } from "framer-motion";

// Google multi-color SVG icon
const GoogleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={styles.googleIcon}
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

function HomeReviews() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

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
              <span className={styles.trustNumber}>{averageRatingString}</span>
              <div className={styles.trustStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={styles.trustStarIcon}
                    viewBox="0 0 20 20"
                    fill={i < Math.round(averageRating) ? "#FBBC05" : "#4b5563"}
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

            <div className={styles.trustLabelWrapper}>
              <GoogleIcon />
              <span className={styles.trustLabel}>
                <strong className={styles.trustTotal}>{totalReviewsCount} Reseñas</strong> en Google · 100% Verificadas
              </span>
            </div>
          </div>

          {/* Navigation Controls & Counter */}
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

            {/* Slide Index Counter (e.g. 1 / 17) */}
            <div
              className={styles.counter}
              aria-label={`Reseña ${currentSlide} de ${totalReviewsCount}`}
            >
              <span className={styles.counterCurrent}>{currentSlide}</span>
              <span className={styles.counterDivider}>/</span>
              <span className={styles.counterTotal}>{totalReviewsCount}</span>
            </div>
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
              setCurrentSlide(swiper.realIndex + 1);
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex + 1);
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
