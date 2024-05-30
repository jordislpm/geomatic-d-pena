"use client"
import React, {useState, useEffect, useRef} from 'react'
import styles from "./Header.module.css"
import Image from 'next/image'
import Nav from '../Nav/Nav'

function Header() {

    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            console.log(window.scrollY)
            if (!isTop && !scroll) {
                setScroll(true);
            } else if (isTop && scroll) {
                setScroll(false);
            }
        };

        const checkInitialScroll = () => {
            const isTop = window.scrollY === 0;
            if (!isTop) {
                setScroll(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        checkInitialScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);


  return (
    <header className={styles.header}>
        <div className={styles.top__bar}>
            <a className={styles.top__bar_button}
            href='https://wa.me/11647667926?text=Hola,%20estoy%20interesado%20en%20tus%20servicios%20como%20agrimensor.'
            target='_blank'>
            <Image
            src="/icons/whatsapp-icon.png"
            alt='whatsapp'
            height={25}
            width={25}/>
            <span>+ 1 ( 647 ) 667 9262</span>
            </a>
        </div>
        <div className={`${styles.header__nav} ${scroll ? styles.header__nav_scroll: styles.header__nav_top}`}>
        <Image
        src="/icons/logo-rec.png"
        alt="logo"
        height={80}
        width={300}/>
        <Nav/>
        </div>
        
    </header>
  )
}

export default Header