import React from 'react'
import styles from "./ServiceCard.module.css"
import { ServiceCardProps } from '@/types'
import Image from 'next/image'
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'
import ButtonAnchor from '@/components/share/ButtonAnchor/ButtonAnchor'
import { whatsapp_number } from '@/constants/contacts'

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
        <ButtonAnchor type='primary' title='Contratar' href={whatsapp_number}/>
    </div>
  )
}

export default ServiceCard