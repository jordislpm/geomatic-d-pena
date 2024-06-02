"use client"
import React, { useState, useEffect, useRef } from 'react'
import styles from "./ServicesOptions.module.css"
import { servicesData } from '@/constants/services'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import ServiceCard from '../ServiceCard/ServiceCard'

function ServicesOptions() {

    const [services, setServices] = useState<string>("Procesos de Mensura")
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter()
    const [shouldScroll, setShouldScroll] = useState<boolean>(false);
    const catalogRef = useRef<HTMLDivElement>(null);



    const toggleOptions = (option: string) => {
        console.log("toggleOptions " + option + " " + services)

        if (option === "Procesos de Mensura" && services === "Topografía y Construcción") {
            setServices("Procesos de Mensura")
        } else if (option === "Topografía y Construcción" && services === "Procesos de Mensura") {
            setServices("Topografía y Construcción")
        }
    }

    
 


    useEffect(() => {
        // Do something here...
        console.log(searchParams.has("service", "Procesos de Mensura"))
        let margin = 50;

        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 1000) {
              // Realizar la acción deseada para pantallas mayores o iguales a 768px
              console.log('La pantalla es igual o mayor a 768px de ancho');
              margin=25;
            }
          };

        if (searchParams.has("service", "Procesos de Mensura")) {
            setServices("Procesos de Mensura");
            if (catalogRef.current) {
                const topOffset = catalogRef.current.offsetTop - margin;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
            }
        } else if (searchParams.has("service", "Topografía y Construcción")) {
            setServices("Topografía y Construcción");
            if (catalogRef.current) {
                const topOffset = catalogRef.current.offsetTop - margin;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });
            }

            handleResize();
            window.addEventListener('resize', handleResize);
        
            // Eliminar el listener al desmontar el componente
            return () => {
              window.removeEventListener('resize', handleResize);
            };
        }



    }, [pathname, searchParams])

    useEffect(() => {

    }, [shouldScroll])

    return (
        <div className={styles.main} ref={catalogRef}>
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
        </div>
    )
}

export default ServicesOptions