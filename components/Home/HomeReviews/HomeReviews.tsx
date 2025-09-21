"use client";
import React, { useRef } from "react";
import styles from "./HomeReviews.module.css";
import CardReview from "../../share/CardReview/CardReview";
import Image from "next/image";
import arrowRight from "../../../public/icons/arrow-right.svg";
import arrowRightWhite from "../../../public/icons/arrow-right-white.svg";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {reviewsData } from "../../../constants/reviews";

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
    <section className={styles.section}>
      <div className={styles.textArea}>
        <h2>Testimonios</h2>
        <h3>Confianza y precisión en soluciones de tierras y propiedades</h3>
        <div className={styles.buttons}>
          <div onClick={handlePrev} className={`${styles.button} ${styles.button_left}`}>
            <Image
              src={arrowRight}
              className={styles.defaultIcon}
              alt="arrow"
              width={100}
              height={100}
            />
            <Image
              src={arrowRightWhite}
              className={styles.hoverIcon}
              alt="arrow"
              width={100}
              height={100}
            />
          </div>
          <div onClick={handleNext} className={styles.button}>
            <Image
              src={arrowRight}
              className={styles.defaultIcon}
              alt="arrow"
              width={100}
              height={100}
            />
            <Image
              src={arrowRightWhite}
              className={styles.hoverIcon}
              alt="arrow"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className={styles.reviewsArea}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16} // 1rem gap to match your CSS
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: true,
            },
            769: {
              slidesPerView: "auto",
              spaceBetween: 16,
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
      </div>
    </section>
  );
}

export default HomeReviews;