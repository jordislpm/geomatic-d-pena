"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from "./ContactForm.module.css";
import { FormDataProps } from '@/types';
import Image from 'next/image';

function ContactForm() {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, message, email } = formData;
    const text = `Hola Geomatic D' Peña, mi nombre es ${name.trim()}.\n\nCorreo: ${email.trim()}\nMensaje: "${message.trim()}"\n\nEstoy interesado en sus servicios de agrimensura y topografía.`;
    const dynamicLink = `https://api.whatsapp.com/send?phone=16476679262&text=${encodeURIComponent(text)}`;

    if (typeof window !== 'undefined') {
      window.open(dynamicLink, '_blank', 'noopener,noreferrer');
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {/* Form Header */}
      <div className={styles.formHeader}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Mensaje Directo & WhatsApp</span>
        </div>

        <h3 className={styles.title}>Inicia tu Consulta o Cotización</h3>

        <p className={styles.subtitle}>
          Completa tus datos y te atenderemos directamente vía WhatsApp para responderte con agilidad y rigor técnico.
        </p>
      </div>

      {/* Field: Name */}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          <span>Nombre completo</span>
          <span className={styles.requiredMark}>*</span>
        </label>
        <div className={styles.inputWrap}>
          <svg
            className={styles.fieldIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ej: Juan Pérez"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
      </div>

      {/* Field: Email */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          <span>Correo Electrónico</span>
          <span className={styles.requiredMark}>*</span>
        </label>
        <div className={styles.inputWrap}>
          <svg
            className={styles.fieldIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
      </div>

      {/* Field: Message */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          <span>Detalle del Proyecto o Consulta</span>
          <span className={styles.requiredMark}>*</span>
        </label>
        <div className={styles.textareaWrap}>
          <textarea
            id="message"
            name="message"
            placeholder="Describe el tipo de trabajo (deslinde, levantamiento, subdivisión, etc.) o la ubicación de tu terreno..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={styles.textarea}
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        <Image
          src="/icons/whatsapp-icon.png"
          alt="WhatsApp"
          width={20}
          height={20}
          className={styles.btnWhatsappIcon}
        />
        <span>{isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar por WhatsApp'}</span>
        <svg
          className={styles.btnArrowIcon}
          width="18"
          height="18"
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

      {/* Trust Notice */}
      <div className={styles.trustFooter}>
        <svg
          className={styles.lockIcon}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <span>Atención directa y confidencial · Sin intermediarios</span>
      </div>
    </form>
  );
}

export default ContactForm;
