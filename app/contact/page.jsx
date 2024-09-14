import React from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'
import ContactForm from "@/components/contactForm/contactForm"

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/contact.png" alt='contact' fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
