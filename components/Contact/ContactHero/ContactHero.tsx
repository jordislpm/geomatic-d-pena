import React from 'react'
import styles from "./ContactHero.module.css"
import { company_name } from '@/constants'
import { contact_number, contacts_data } from '@/constants/contacts'


function ContactHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <h2>Contactanos</h2>
        <h3>{company_name}</h3>
      </div>
      <div className={styles.hero__contact}>
        <h2>TEL: {contact_number}</h2>
        <h3>{contacts_data.email.info}</h3>
      </div>
    </div>
  )
}

export default ContactHero