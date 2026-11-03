"use client";

import React, { useState } from 'react';
import styles from "./CardReview.module.css";
import Image from 'next/image';
import { CardReviewProps, formatRelativeTime } from '../../../constants/reviews';

// Star SVG Component
const StarIcon = () => (
  <svg
    className={styles.starIcon}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    />
  </svg>
);

// Google multi-color SVG Icon
const GoogleIcon = () => (
  <svg className={styles.googleIcon} viewBox="0 0 24 24" aria-label="Google">
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

function CardReview({
  name,
  rating = 5,
  text,
  publishedAtDate,
  time,
  publishAt,
  profile_photo_url,
  isLocalGuide,
}: CardReviewProps) {
  const [imgError, setImgError] = useState(false);

  // Compute exact dynamic relative date based on current date
  const relativeDate = publishedAtDate || time
    ? formatRelativeTime(publishedAtDate || time!)
    : (publishAt || "Reciente");

  // Compute user initials as fallback
  const initials = name
    ? name
        .split(" ")
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  const hasComment = text && text !== "No text provided" && text.trim().length > 0;

  return (
    <div className={styles.card}>
      {/* Top Header: Stars & Google Badge */}
      <div className={styles.header}>
        <div className={styles.starsRow} aria-label={`${rating} de 5 estrellas`}>
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        <div className={styles.googleBadge}>
          <GoogleIcon />
          <span>Reseña</span>
        </div>
      </div>

      {/* Comment Body */}
      <div className={styles.comment}>
        {hasComment ? (
          <p className={styles.commentText}>{`"${text}"`}</p>
        ) : (
          <p className={styles.noCommentText}>Calificación de 5 estrellas en Google</p>
        )}
      </div>

      {/* Author Footer */}
      <div className={styles.user}>
        <div className={styles.avatarWrap}>
          {profile_photo_url && !imgError ? (
            <Image
              src={profile_photo_url}
              alt={name}
              width={44}
              height={44}
              className={styles.photo}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className={styles.initialsFallback}>{initials}</span>
          )}
        </div>

        <div className={styles.userInfo}>
          <h3 className={styles.userName}>{name}</h3>
          <div className={styles.userMeta}>
            {isLocalGuide && <span className={styles.localGuideBadge}>Local Guide · </span>}
            <span>{relativeDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
