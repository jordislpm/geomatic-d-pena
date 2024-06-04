import React from 'react'
import styles from "./AboutHero.module.css"
import { company_name } from '@/constants'


function AboutHero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__text}>
            <h3>Sobre</h3>
            <h2>{company_name}</h2>
        </div>
    </div>
  )
}

export default AboutHero