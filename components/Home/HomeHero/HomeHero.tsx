import React from 'react'
import styles from "./HomeHero.module.css"


function HomeHero() {
  return (
    <section className={styles.hero}>
        <div className={styles.hero__text}>
            <h2>Profesionalismo garantizado.</h2>
            <h3>Las terrenas, Samana, y todo el nordeste</h3>
        </div>
    </section>
  )
}

export default HomeHero