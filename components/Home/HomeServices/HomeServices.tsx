import React from 'react'
import styles from "./HomeServices.module.css"
import { HomeServicesProps } from '@/types'
import Image from 'next/image'
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'
import { servicesData } from '@/constants/services'




function HomeServices() {
    return (
        <section className={styles.body}>
            <div className={styles.body__title}>
                <h2>NUESTROS SERVICIOS</h2>
            </div>
            {servicesData.map((service, index) => (
                <div key={service.title}
                    className={`${index % 2 === 0 ? styles.service : styles.serviceReverse}`}>
                    <Image
                        src={service.img}
                        alt={service.title}
                        className={styles.img}
                        width={500}
                        height={350}
                    />
                    <div className={styles.service__content}>
                        <h4>SERVICIO {service.subTitle.toUpperCase()} </h4>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <ButtonPrincipal />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default HomeServices