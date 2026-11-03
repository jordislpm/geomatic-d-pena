"use client"
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from "./Nav.module.css"
import Link from 'next/link'
import { routes } from '@/constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { whatsapp_number, contact_number } from '@/constants/contacts'

interface NavProps {
    scroll: boolean
}

function Nav({ scroll }: NavProps) {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [path]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleModal = () => {
        setIsOpen(prev => !prev);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.nav}>
            {/* Desktop Navigation */}
            <ul className={styles.desktopMenu}>
                {routes.map((route) => (
                    <li key={route.name} className={styles.menuItem}>
                        <Link
                            className={`${styles.link} ${route.route === path ? styles.active : ''} ${scroll ? styles.nav__scroll : ""}`}
                            href={route.route}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
                type="button"
                className={styles.menu__burger}
                onClick={toggleModal}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                )}
            </button>

            {/* Mobile Drawer portaled to document.body so it is NEVER constrained by header */}
            {mounted && createPortal(
                <div className={`${styles.mobileContainer} ${isOpen ? styles.mobileContainerOpen : ""}`}>
                    {/* Backdrop Overlay */}
                    <div
                        className={styles.overlay}
                        onClick={closeModal}
                        aria-hidden="true"
                    />

                    {/* Slide-in Drawer */}
                    <aside className={styles.drawer} aria-label="Menú móvil">
                        {/* Drawer Header */}
                        <div className={styles.drawerHeader}>
                            <Link href="/" onClick={closeModal} className={styles.drawerLogoLink}>
                                <Image
                                    src="/icons/logo-geomatic-full.png"
                                    alt="logo"
                                    height={36}
                                    width={160}
                                    className={styles.drawerLogo}
                                />
                            </Link>

                            <button
                                type="button"
                                className={styles.drawerCloseButton}
                                onClick={closeModal}
                                aria-label="Cerrar menú"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className={styles.drawerBody}>
                            <ul className={styles.drawerList}>
                                {routes.map((route) => {
                                    const isActive = route.route === path;
                                    return (
                                        <li key={route.name} className={styles.drawerItem}>
                                            <Link
                                                onClick={closeModal}
                                                className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                                                href={route.route}
                                            >
                                                <span>{route.name}</span>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                </svg>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Quick Contact Footer */}
                            <div className={styles.drawerFooter}>
                                <a
                                    href={whatsapp_number}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.drawerWhatsappBtn}
                                >
                                    <Image
                                        src="/icons/whatsapp-icon.png"
                                        alt="whatsapp"
                                        height={20}
                                        width={20}
                                    />
                                    <span>Chatear por WhatsApp</span>
                                </a>

                                <a
                                    href={`tel:${contact_number.replace(/[^0-9+]/g, "")}`}
                                    className={styles.drawerPhoneBtn}
                                >
                                    <span>Llamar: {contact_number}</span>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>,
                document.body
            )}
        </nav>
    );
}

export default Nav;
