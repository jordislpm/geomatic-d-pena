import React from 'react';
import styles from "./ContactSection.module.css";
import ContactForm from '../ContactForm/ContactForm';


function ContactSection() {
    return (
        <section className={styles.section}>
            <div className={styles.google__maps}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=C.%20Juan%20Pablo%20Duarte%20154,%20Las%20Terrenas%2032000,%20Rep%C3%BAblica%20Dominicana.+(Geomatic%20D'%20pe%C3%B1a)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                ></iframe>
            </div>
            <ContactForm/>
        </section>
    )
}

export default ContactSection