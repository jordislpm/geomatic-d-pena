import React from 'react'
import styles from "./ServiceCard.module.css"
import { ServiceCardProps } from '@/types'

function ServiceCard({title,img,description}:ServiceCardProps) {
  return (
    <div>{title}</div>
  )
}

export default ServiceCard