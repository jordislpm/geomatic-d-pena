import React from 'react'
import styles from "./CardReview.module.css"
import Image from 'next/image';
import { CardReviewProps } from '../../../constants/reviews';




function CardReview({name, rating, text, publishAt, profile_photo_url }: CardReviewProps) {
    return (
        <div className={styles.card}>

            <div className={styles.stars}>
                {`${"⭐".repeat(rating)}`}
                <p>{publishAt}</p>
            </div>
            <div className={styles.comment}>
                {text === "No text provided" ? 
                     <p>El usuario no dejó comentario</p>
                     :
                          <p>{text}</p>
                }
           

            </div>
            <div className={styles.user}>
         <Image
                width={20}
                height={20}
                src={profile_photo_url}
                alt={name}
               className={styles.photo}
            ></Image>
            <h2>{name}</h2>
            </div>
        </div>
    )
}

export default CardReview