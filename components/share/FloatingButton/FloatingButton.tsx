"use client"
import React, { useState, useEffect } from 'react'
import styles from './FloatingButton.module.css';
import Image from 'next/image';

function FloatingButton() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = global.pageYOffset;
          setIsVisible(offset > global.innerHeight);
        };
    
        global.addEventListener('scroll', handleScroll);
    
        return () => {
            global.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        global.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };



  return (
    <button className={`${styles.floatingButton} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
        <Image
        src="/icons/icon-up.png"
        alt="icon-up"
        height={40}
        width={40}/>
    </button>
  )
}

export default FloatingButton