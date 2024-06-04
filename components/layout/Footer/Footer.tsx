"use client"
import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'
import { contact_number, contacts_data, whatsapp_number } from '@/constants/contacts'
import { routes } from '@/constants'
import Link from 'next/link'
import { servicesData } from '@/constants/services'
import { usePathname } from 'next/navigation'
import GoogleMaps from '@/components/share/GoogleMaps/GoogleMaps'
import { company_name } from '@/constants'



function Footer() {
  const path = usePathname();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.info__contact}>
            <h2>
            {company_name.toLocaleUpperCase()}
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
            <a className={styles.info__contact_number}
             href={whatsapp_number}
             target='_blank'>
              
            <Image
                        src="/icons/whatsapp-icon.png"
                        alt='whatsapp'
                        height={25}
                        width={25} />
                        {contact_number}
            </a>
          </div>
        </div>
        <div className={styles.info__options}>
          <div className={styles.info__option}>
            <h3>COMPAÑIA</h3>
            <ul className={styles.footer__nav}>
              {routes.map((route) => (
                <Link
                  className={`${styles.link} ${route.route !== path ? styles.active : ''}`}
                  key={route.name}
                  href={route.route}>
                  {route.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className={styles.info__option}>
            <h3>SERVICIOS</h3>
            <ul className={styles.footer__nav}>
              {servicesData.map((service) => (
                <Link
                className={`${styles.link} ${ styles.active}`}
                  key={service.title}
                  href={service.link}>
                  {service.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className={styles.info__option}>
            <h3>UBICACION</h3>
            <GoogleMaps/>
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