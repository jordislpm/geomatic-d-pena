import React, { useRef, useEffect, useState } from 'react';
import styles from './Section.module.css';

function LazySection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (observer && sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    return (
      <div
        ref={sectionRef}
        className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      >
        {/* {children} */}
      </div>
    );
  };

export default LazySection