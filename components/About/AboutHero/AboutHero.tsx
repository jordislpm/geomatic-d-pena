import React from 'react'
import styles from "./AboutHero.module.css"


function AboutHero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__text}>
            <h3>Sobre</h3>
            <h2>Geomatic D&apos; Peña</h2>
        </div>
    </div>
  )
}

export default AboutHero