import React from 'react'
import styles from "./Hero.module.css"


function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__text}>
            <h2>Profesionalismo garantizado.</h2>
            <h3>Las terrenas, Samana y todo el nordeste</h3>
        </div>
    </div>
  )
}

export default Hero