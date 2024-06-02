"use client"
import React from 'react'
import styles from "./ButtonPrincipal.module.css"
import { ButtonPrincipalProps } from '@/types'



function ButtonPrincipal({title="Ver Mas",type="primary", buttonAction}:ButtonPrincipalProps) {

    const buttonClick = ()=>{
        if (buttonAction){
            buttonAction()
        }
    }
  return (
    <div onClick={buttonClick}
    className={` ${styles.button} ${type=="primary" ? styles.button__primary : styles.button__secundary}`}>
        {title}
    </div>
  )
}

export default ButtonPrincipal