import React from 'react'
import styles from "./HomeServiceQuestions.module.css"
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'

function HomeServiceQuestions() {
  return (
    <div className={styles.content}>
      <h3>
        ¿SOLICITUDES O PREGUNTAS DE SERVICIOS?
      </h3>
      <ButtonPrincipal
        type='secundary'
        title='CONTACTANOS' />
    </div>
  )
}

export default HomeServiceQuestions