"use client"
import React, { useState, useEffect } from 'react'
import styles from "./Header.module.css"
import Image from 'next/image'
import Nav from '../Nav/Nav'
import Link from 'next/link'
import ContactWhatsapp from '@/components/share/ContactWhatsapp/ContactWhatsapp'

function Header() {
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 15) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${scroll ? styles.header_scrolled : ''}`}>
            <div className={`${styles.top__bar} ${scroll ? styles.top__bar_hidden : ''}`}>
                <ContactWhatsapp />
            </div>
            <div className={`${styles.header__nav} ${scroll ? styles.header__nav_scroll : styles.header__nav_top}`}>
                <Link href="/">
                    <Image
                        src="/icons/logo-geomatic-full.png"
                        alt="logo"
                        height={50}
                        width={230}
                        priority
                    />
                </Link>
                <Nav scroll={scroll} />
            </div>
        </header>
    )
}

export default Header
