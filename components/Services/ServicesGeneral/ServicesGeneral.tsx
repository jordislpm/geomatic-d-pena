import React from 'react'
import styles from "./ServicesGeneral.module.css"
import ServicesOptions from '../ServicesOptions/ServicesOptions'

function ServicesGeneral() {
  return (
    <section className={styles.service__section}>
            <p>
            Nuestra empresa de agrimensura se enfoca en ofrecer servicios profesionales tanto en procesos de mensura como en topografía, atendiendo tanto al sector público como al privado. Nos dedicamos a lograr la satisfacción del cliente y a proporcionar soluciones de mensura y topografía que superen las expectativas de ingenieros, propietarios de terrenos, planificadores, arquitectos, abogados y consultores.
            </p>
            <h3>NUESTROS SERVICIOS</h3>
            <h4>Nosotros proveemos servicios de procesos de mensura y topograficos</h4>
            <ServicesOptions/>
    </section>
  )
}

export default ServicesGeneral