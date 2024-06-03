import React from 'react'
import styles from "./AboutCard.module.css"
import { aboutCardProps } from '@/types'

function AboutCard({title,description, index}:aboutCardProps) {
  return (
    <div className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.index}>
            {index}
        </div>
    </div>
  )
}

export default AboutCard