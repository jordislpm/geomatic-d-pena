import React from 'react'
import styles from "./HomeServiceQuestions.module.css"
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'
import ButtonAnchor from '@/components/share/ButtonAnchor/ButtonAnchor'
import { whatsapp_number } from '@/constants/contacts'

function HomeServiceQuestions() {
  return (
    <div className={styles.content}>
      <h3>
        ¿SOLICITUDES O PREGUNTAS DE SERVICIOS?
      </h3>
      <ButtonAnchor
      href={whatsapp_number}
        type='secundary'
        title='CONTACTANOS' />
    </div>
  )
}

export default HomeServiceQuestions