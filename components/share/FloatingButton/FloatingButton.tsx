"use client"
import React, { useState, useEffect } from 'react'
import styles from './FloatingButton.module.css';
import Image from 'next/image';

function FloatingButton() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.pageYOffset;
          setIsVisible(offset > window.innerHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
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