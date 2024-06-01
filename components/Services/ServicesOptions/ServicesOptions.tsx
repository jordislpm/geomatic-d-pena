"use client"
import React, {useState} from 'react'
import styles from "./ServicesOptions.module.css"
import { servicesData } from '@/constants/services'

function ServicesOptions() {

    const [services, setServices] = useState<string>("Procesos de Mensura")


  return (
    <div className={styles.main}>
        <div className={styles.main__options}>
                {servicesData.map((option)=>(
                        <div 
                        className={`${styles.option} ${services === option.title ? styles.option__active : "" }`} 
                        key={option.title}
                        >
                                {option.title}
                        </div>
                ))}
        </div>
    </div>
  )
}

export default ServicesOptions