"use client"
import React, { useState, useEffect, useRef, Suspense } from 'react'
import styles from "./ServicesOptions.module.css"
import { servicesData } from '@/constants/services'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import ServiceCard from '../ServiceCard/ServiceCard'

function ServicesOptions() {

    const [services, setServices] = useState<string>("Procesos de Mensura")
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [shouldScroll, setShouldScroll] = useState<boolean>(false);
    const catalogRef = useRef<HTMLDivElement>(null);



    const toggleOptions = (option: string) => {
        if (option === "Procesos de Mensura" && services === "Topografía y Construcción") {
            setServices("Procesos de Mensura")
        } else if (option === "Topografía y Construcción" && services === "Procesos de Mensura") {
            setServices("Topografía y Construcción")
        }
    }





    useEffect(() => {
        let margin = 50;

        const handleResize = () => {
            const windowWidth = global.innerWidth;
            if (windowWidth < 768) {
                margin = 70;
            }
        };

        handleResize();

        if (searchParams.has("service", "Procesos de Mensura")) {
            setServices("Procesos de Mensura");
            if (catalogRef.current) {
                const topOffset = catalogRef.current.offsetTop - margin;
                global.scrollTo({ top: topOffset, behavior: 'smooth' });
            }
        } else if (searchParams.has("service", "Topografía y Construcción")) {
            setServices("Topografía y Construcción");
            if (catalogRef.current) {
                const topOffset = catalogRef.current.offsetTop - margin;
                global.scrollTo({ top: topOffset, behavior: 'smooth' });
            }
        }



    }, [pathname, searchParams])


    return (
        <div className={styles.main} ref={catalogRef}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={styles.main__options}>
                    {servicesData.map((option) => (
                        <div
                            onClick={() => toggleOptions(option.title)}
                            className={`${styles.option} ${services === option.title ? styles.option__active : ""}`}
                            key={option.title}
                        >
                            {option.title}
                        </div>
                    ))}
                </div>
                <div className={styles.catalog}>


                    {services === "Procesos de Mensura" ? servicesData[0].services.map((service) => (
                        <React.Fragment key={service.title}>
                            <ServiceCard {...service} />
                        </React.Fragment>
                    )) : servicesData[1].services.map((service) => (
                        <React.Fragment key={service.title}>
                            <ServiceCard {...service} />
                        </React.Fragment>
                    ))
                    }
                </div>
            </Suspense>
        </div>
    )
}

export default ServicesOptions