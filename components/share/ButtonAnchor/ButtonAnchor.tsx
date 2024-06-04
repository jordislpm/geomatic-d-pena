"use client"
import React from 'react'
import styles from "./ButtonAnchor.module.css"
import { ButtonAnchorProps, ButtonPrincipalProps } from '@/types'



function ButtonAnchor({title="Ver Mas",type="primary", buttonAction, href}:ButtonAnchorProps) {

    const buttonClick = ()=>{
        if (buttonAction){
            buttonAction()
        }
    }
  return (
    <a 
    onClick={buttonClick}
    className={` ${styles.button} ${type=="primary" ? styles.button__primary : styles.button__secundary}`}
    href={href}
    target='_blank'
    >
        {title}
    </a>
  )
}

export default ButtonAnchor