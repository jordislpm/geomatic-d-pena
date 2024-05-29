import React, { useEffect } from 'react'
import styles from "./Nav.module.css"
import Link from 'next/link'
import { routes } from '@/constants'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

function Nav() {

    const router = useRouter();
    const path = usePathname();
    const params = useSearchParams();

    useEffect(()=>{
        console.log("router: " , router);
        console.log("path: " , path);
        console.log("params: " , params);
    },[router, params, path])


    return (
        <nav className={styles.nav}>
            <ul>
                {routes.map((route) => (
                    <Link className={`${styles.link} ${route.route === path ? styles.active : ''}`} key={route.name} href={route.route}>{route.name}</Link>
                ))}
            </ul>
        </nav>
    )
}

export default Nav