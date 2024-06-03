import React from 'react'
import styles from "./ServiceCard.module.css"
import { ServiceCardProps } from '@/types'
import Image from 'next/image'
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'

function ServiceCard({title,logo,description}:ServiceCardProps) {
  return (
    <div className={styles.card}>
        <Image src={logo}
        alt={title}
        width={65}
        height={65}
        className={styles.img}/>
        <h2>{title.toLocaleUpperCase()}</h2>
        <p>
            {description}
        </p>
        <ButtonPrincipal type='primary' title='Contratar'/>
    </div>
  )
}

export default ServiceCard