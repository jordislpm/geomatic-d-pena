import React from 'react'
import styles from "./HomeServices.module.css"
import { HomeServicesProps } from '@/types'
import { homeServicesData } from '@/constants/home'
import Image from 'next/image'
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'



function HomeServices() {
    return (
        <section className={styles.body}>
            <div className={styles.body__title}>
                <h2>NUESTROS SERVICIOS</h2>
            </div>
            {homeServicesData.map((service, index) => (
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
                        <h4>{service.subtle}</h4>
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