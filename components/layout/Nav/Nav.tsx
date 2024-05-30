"use client"
import React, { useEffect, useState } from 'react'
import styles from "./Nav.module.css"
import Link from 'next/link'
import { routes } from '@/constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'


interface NavProps {
    scroll: boolean
}

function Nav({ scroll }: NavProps) {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log(isOpen)
    }, [isOpen])

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
                onClick={toggleModal}
            />

            <Image
                className={styles.menu__burger}
                src="/icons/burger-menu.png"
                alt="menu-burger"
                width={10}
                height={10}
                objectFit="contain"
                onClick={() => setIsOpen(!isOpen)} />
            <ul className={`${styles.menu} ${isOpen ? styles.menu_responsive : ""}`}>

                {routes.map((route) => (
                    <Link
                    onClick={toggleModal}
                        className={`${styles.link} ${route.route === path ? styles.active : ''} ${scroll ? styles.nav__scroll : ""}`}
                        key={route.name}
                        href={route.route}>
                        {route.name}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Nav