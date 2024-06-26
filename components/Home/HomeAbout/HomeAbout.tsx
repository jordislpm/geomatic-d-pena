import React from 'react'
import styles from "./HomeAbout.module.css"
import Image from 'next/image'
import { company_name } from '@/constants'

function HomeAbout() {
    return (
        <section className={styles.body}>
            <div className={styles.left}>
                <p className={styles.about}>Sobre nuestra empresa</p>
                <h2>{company_name}</h2>
                <div />
                <hr />
                <p>
                {company_name}, es una empresa profesional de agrimensura multidisciplinaria, fundada por socios que se combinaron para brindar experiencia específica de la industria a la empresa. En nuestra empresa brindamos una variedad de servicios profesionales de agrimensura para el sector público y privado con soluciones únicas y personalizadas para nuestros clientes.
                    <br />
                    <br />
                    Nuestros clientes se benefician de nuestra experiencia, responsabilidad y acceso a una amplia gama de recursos tecnologicos que le ahorran tiempo y dinero.
                </p>
            </div>
            <div className={styles.right}>
                <div className={styles.right__content}>
                    <h3>Lo que nos diferencia</h3>
                    <div className={styles.right__content_text}>
                    <p>
                        En {company_name}, ofrecemos un acompañamiento integral en trabajos topográficos y procesos de mensura en República Dominicana. Desde la planificación hasta la ejecución, garantizamos el éxito de su proyecto, cumpliendo con plazos y adaptándonos a las necesidades locales, para brindar resultados excepcionales.
                    </p>
                    <picture>
                    <Image src="/topo-level.png"
                    alt="rtk-gnss-receiver"
                    width={90}
                    height={90}/>
                </picture>
                    </div>
                </div>
              
            </div>
        </section>
    )
}

export default HomeAbout