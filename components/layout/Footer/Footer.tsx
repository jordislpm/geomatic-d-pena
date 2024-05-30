import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'
import { contacts_data } from '@/constants/contacts'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.info__contact}>
            <h2>
              Geomatic D&apos; peña
            </h2>
            <p>
              <Image src={contacts_data.address.logo}
                alt="address-icon"
                width={30}
                height={30} />
              {contacts_data.address.info}
            </p>
            <p>
              <Image src={contacts_data.email.logo}
                alt="address-icon"
                width={30}
                height={30} />
              {contacts_data.email.info}
            </p>
            <p>
            + 1 ( 647 ) 667 9262
            </p>
          </div>
        </div>
        <div className={styles.info__options}>
          <div className={styles.info__option}>
            <h3>COMPAÑIA</h3>

          </div>
          <div className={styles.info__option}>
            <h3>SERVICIOS</h3>

          </div>
        </div>
        <div>

        </div>
      </div>
      © Copyright 2024  ·  Geomatic D&apos; peña. Todos Los Derechos Reservados
    </footer>
  )
}

export default Footer