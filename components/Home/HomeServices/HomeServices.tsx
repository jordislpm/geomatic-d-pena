"use client"
import React, {useEffect, useState} from 'react'
import styles from "./HomeServices.module.css"
import Image from 'next/image'
import ButtonPrincipal from '@/components/share/ButtonPrincipal/ButtonPrincipal'
import { servicesData } from '@/constants/services'
import { useRouter } from 'next/navigation'





function HomeServices() {

    const router = useRouter();
    const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        setSearchParams(params);
      }
    }, []);
  
    const goToService = (route: string) => {
      if (searchParams) {
        searchParams.set("service", route);
        router.push(`/services?${searchParams.toString()}`);
      }
    };

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
                        height={500}
                        objectPosition="center" 
                    />
                    <div className={styles.service__content}>
                        <h4>SERVICIOS DE {service.title.toUpperCase()} </h4>
                        <h2>{service.subTitle}</h2>
                        <p>{service.description}</p>
                        <ButtonPrincipal buttonAction={()=>goToService(service.title)}/>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default HomeServices