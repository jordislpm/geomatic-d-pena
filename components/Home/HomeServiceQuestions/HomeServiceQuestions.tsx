import React from 'react'
import styles from "./HomeServiceQuestions.module.css"
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'
import ButtonAnchor from '@/components/share/ButtonAnchor/ButtonAnchor'
import { whatsapp_number } from '@/constants/contacts'
import Link from 'next/link'

function HomeServiceQuestions() {
  return (
    <div className={styles.content}>
      <h3>
        ¿SOLICITUDES O PREGUNTAS DE SERVICIOS?
      </h3>
      <Link href="/contact" style={{textDecoration: "none",
  color: "inherit"}}>
      <ButtonPrincipal
        type='secundary'
        title='CONTACTANOS' />
      </Link>
      
    </div>
  )
}

export default HomeServiceQuestions