"use client"
import React, {useState, ChangeEvent, FormEvent} from 'react'
import styles from "./ContactForm.module.css"
import { FormDataProps } from '@/types';


function ContactForm() {

    const [formData, setFormData] = useState<FormDataProps>({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const {name, message, email} = formData;
        const name_link = name.split(" ").join("%20");
        const message_link = message.split(" ").join("%20");
        const dynamicLink = `https://api.whatsapp.com/send?phone=16476679262&text=Nombre%3A%20${name_link}%2C%20Mensaje%3A%20%22${message_link}%22.%20Mi%20${email}%20es%3A%20email.%20estoy%20interesado%20en%20tus%20servicios%20como%20agrimensor.%22`
        global.open(dynamicLink, '_blank', 'noopener,noreferrer');
        
      };
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
    <div className={styles.formGroup}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
    </div>
    <button type="submit" className={styles.submitButton}>Enviar</button>
  </form>
  )
}

export default ContactForm