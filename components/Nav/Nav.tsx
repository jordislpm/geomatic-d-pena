import React from 'react'
import styles from "./Nav.module.css"
import Link from 'next/link'
import { routes } from '@/constants'

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                {routes.map((route) => (
                    <Link key={route.name} href={route.route}>{route.name}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Nav