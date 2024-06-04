"use client"
import React, { useState, useEffect, useRef } from 'react'
import styles from "./Header.module.css"
import Image from 'next/image'
import Nav from '../Nav/Nav'
import { contact_number, whatsapp_number } from '@/constants/contacts'
import Link from 'next/link'

function Header() {

    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = global.scrollY === 0;
            if (!isTop && !scroll) {
                setScroll(true);
            } else if (isTop && scroll) {
                setScroll(false);
            }
        };

        const checkInitialScroll = () => {
            const isTop = global.scrollY === 0;
            if (!isTop) {
                setScroll(true);
            }
        };

        global.addEventListener('scroll', handleScroll);
        checkInitialScroll();

        return () => {
            global.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);


    return (
        <header className={styles.header}>
            <div className={styles.top__bar}>
                <a className={styles.top__bar_button}
                    href={whatsapp_number}
                    target='_blank'>
                    <Image
                        src="/icons/whatsapp-icon.png"
                        alt='whatsapp'
                        height={25}
                        width={25} />
                    <span className={styles.number}>{contact_number}</span>
                </a>
            </div>
            <div className={`${styles.header__nav} ${scroll ? styles.header__nav_scroll : styles.header__nav_top}`}>
                <Link href="/">
                    <Image
                        src="/icons/logo-geomatic-full.png"
                        alt="logo"
                        height={50}
                        width={230}
                    />
                </Link>
                <Nav
                    scroll={scroll}
                />
            </div>

        </header>
    )
}

export default Header