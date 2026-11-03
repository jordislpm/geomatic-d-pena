"use client";

import React from 'react';
import styles from "./Footer.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { contact_number, contacts_data, whatsapp_number } from '@/constants/contacts';
import { routes } from '@/constants';
import { servicesData } from '@/constants/services';
import { company_name } from '@/constants';

function Footer() {
  const path = usePathname();
  const currentYear = new Date().getFullYear();
  const cleanPhone = contact_number.replace(/[^0-9+]/g, "");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main 4-Column Grid */}
        <div className={styles.grid}>
          {/* Column 1: Brand & Direct Contact */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandTitle}>
              Geomatic <span className={styles.brandAccent}>D' Peña</span>
            </Link>

            <p className={styles.brandTagline}>
              Agrimensura, geodesia y topografía de alta precisión en Las Terrenas, Samaná y toda la República Dominicana.
            </p>

            <div className={styles.contactList}>
              <a
                href="https://maps.google.com/?q=Plaza+Deborah+Las+Terrenas+Samana"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{contacts_data.address.info}</span>
              </a>

              <a
                href={`mailto:${contacts_data.email.info}`}
                className={styles.contactItem}
              >
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{contacts_data.email.info}</span>
              </a>

              <a
                href={`tel:${cleanPhone}`}
                className={styles.contactItem}
              >
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{contact_number}</span>
              </a>
            </div>

            <a
              href={whatsapp_number}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <Image
                src="/icons/whatsapp-icon.png"
                alt="WhatsApp"
                width={18}
                height={18}
                className={styles.whatsappIcon}
              />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className={styles.colTitle}>Compañía</h4>
            <ul className={styles.navList}>
              {routes.map((route) => {
                const isActive = route.route === path;
                return (
                  <li key={route.name}>
                    <Link
                      href={route.route}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    >
                      <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <span>{route.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Main Services */}
          <div>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.navList}>
              {servicesData.map((service) => (
                <li key={service.title}>
                  <Link
                    href={`/services?service=${encodeURIComponent(service.title)}`}
                    className={styles.navLink}
                  >
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className={styles.navLink}>
                  <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Deslindes & Saneamiento</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.navLink}>
                  <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span>Topografía de Obras</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div className={styles.mapCol}>
            <h4 className={styles.colTitle}>Ubicación</h4>
            <p className={styles.mapDesc}>
              Visítanos en nuestra oficina principal en Las Terrenas:
            </p>
            <div className={styles.mapWrapper}>
              <iframe
                title="Ubicación Geomatic D' Peña"
                className={styles.mapIframe}
                src="https://maps.google.com/maps?width=400&amp;height=250&amp;hl=es&amp;q=C.%20Juan%20Pablo%20Duarte%20154,%20Las%20Terrenas%2032000,%20Rep%C3%BAblica%20Dominicana.+(Geomatic%20D'%20pe%C3%B1a)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © {currentYear} {company_name}. Todos los derechos reservados.
          </p>

          <div className={styles.locationBadge}>
            <span className={styles.locationDot} />
            <span>Las Terrenas · Samaná · República Dominicana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
