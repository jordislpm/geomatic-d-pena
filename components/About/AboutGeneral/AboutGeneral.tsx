import React from 'react'
import styles from "./AboutGeneral.module.css"
import Image from 'next/image'
import AboutCard from '../AboutCard/AboutCard'
import { aboutApproach } from '@/constants/about'

function AboutGeneral() {
    return (
        <div className={styles.body}>
            <main className={styles.main}>
                <p>
                    Somos una destacada oficina de agrimensura comprometida con la excelencia en servicios topográficos y de mensura. Ofrecemos un alto grado de experiencia que agiliza los proyectos de nuestros clientes.
                    <br /> <br />
                    Nuestro equipo ofrece soluciones precisas y confiables para proyectos de ingeniería, construcción, urbanismo y más. Vamos más allá de la agrimensura tradicional y proporcionamos soluciones únicas para tus desafíos, independientemente de la escala de tu proyecto. Utilizamos tecnología de vanguardia y un enfoque centrado en el cliente para garantizar resultados sobresalientes y satisfacción en cada proyecto.
                    <br /> <br />
                    Proveemos una amplia gama de servicios que incluyen procesos de mensura y topografía, tales como la regularización de terrenos, levantamientos topográficos, planificación de obras, topografía aplicada a la construcción y gestión de propiedad inmobiliaria. Nos enorgullecemos de brindar soluciones que ahorren tiempo y recursos, asegurando que cada proyecto se desarrolle sobre una base informada y sólida.
                    <br /> <br />
                    Creemos firmemente que tu desafío es nuestro desafío. Nuestra experiencia se enfoca en propiedades residenciales, comerciales e industriales, ofreciendo servicios de delineación de terrenos, parcelación y todo lo relacionado con la georreferenciación. Con un enfoque personalizado y dedicado, garantizamos que tus necesidades sean atendidas con precisión y profesionalismo. Confía en nosotros para impulsar el éxito de tu proyecto. ¡Contáctanos hoy mismo para llevar tu proyecto al siguiente nivel!
                </p>
                <div className={styles.images}>
                    <Image
                        src="/surveyor-topcon.jpg"
                        alt=""
                        height={300}
                        width={280} />

                    <Image
                        src="/contour.png"
                        alt=""
                        height={300}
                        width={280} />
                </div>
            </main>
            <aside className={styles.aside}>
                <h3>¿POR QUÉ ELEGIRNOS?</h3>
                <h2>NUESTRO ENFOQUE</h2>
                <div className={styles.approach__list}>
                    {aboutApproach.map((approach, index) => (
                        <AboutCard
                            key={approach.title}
                            index={index + 1}
                            title={approach.title}
                            description={approach.description}
                        />
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default AboutGeneral