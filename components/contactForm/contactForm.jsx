"use client"

import React, { useEffect } from 'react'
import { useFormState } from "react-dom";
import { receiveContact } from "@/lib/actions"
import { useRouter } from "next/navigation";
import styles from "./contactForm.module.css"

const ContactForm = () => {

    const [state, formAction] = useFormState(receiveContact, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/contact");
    }, [state?.success, router]);

    return (
        <form action={formAction} className={styles.form}>
            <input type='text' placeholder='Name and Surname' name="name" />
            <input type='text' placeholder='Email address' name="email" />
            <input type='text' placeholder='Phone Number (Optional)' name="phone" />
            <input type='text' placeholder='Message' name="message" />
            {/* <textarea id='' cols={30} rows={10} placeholder='Message' name="message" /> */}
            {state?.error}
            {state?.success}
            <button>Send</button>
        </form>
    )
}

export default ContactForm
