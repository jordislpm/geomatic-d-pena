import React from 'react'
import styles from "./ButtonPrincipal.module.css"
import { ButtonPrincipalProps } from '@/types'

function ButtonPrincipal({title="Ver Mas",type="primary"}:ButtonPrincipalProps) {
  return (
    <div className={` ${styles.button} ${type=="primary" ? styles.button__primary : styles.button__secundary}`}>
        {title}
    </div>
  )
}

export default ButtonPrincipal