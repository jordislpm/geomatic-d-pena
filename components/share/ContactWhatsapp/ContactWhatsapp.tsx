import React from 'react'
import styles from "./ContactWhatsapp.module.css"
import Image from 'next/image'
import { whatsapp_number } from '@/constants/contacts'

function ContactWhatsapp() {
  return (
    <a className={styles.top__bar_button}
    href={whatsapp_number}
    target='_blank'>
    <Image
        src="/icons/whatsapp-icon.png"
        alt='whatsapp'
        height={20}
        width={20} />
    <span className={styles.number}>¡Contáctanos por WhatsApp!</span>
</a>
  )
}

export default ContactWhatsapp