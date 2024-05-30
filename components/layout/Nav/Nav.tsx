import React, { useEffect } from 'react'
import styles from "./Nav.module.css"
import Link from 'next/link'
import { routes } from '@/constants'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


interface NavProps{
    scroll: boolean
}

function Nav({scroll}: NavProps) {

    const router = useRouter();
    const path = usePathname();
    const params = useSearchParams();

     return (
        <nav className={styles.nav}>
            <ul>
                {routes.map((route) => (
                    <Link className={`${styles.link} ${route.route === path ? styles.active : ''} ${scroll ? styles.nav__scroll : ""}`} key={route.name} href={route.route}>{route.name}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Nav