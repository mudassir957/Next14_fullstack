import React from 'react'
import Image from 'next/image'
import styles from "./about.module.css"

export const metadata = {
    title: "About Page",
    description: "About Page description",
};

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Me</h2>
                <h1 className={styles.title}>I design creative and amazing scalable websites</h1>
                <p className={styles.desc}>
                    I create websites that are scalable and responsive on all different devices. I have spent 5+ years working on different areas of website design, front-end development, full-stack development by using latest technologies.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>5 +</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>5 +</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>5 +</h1>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/about.jpg"
                    alt='About'
                    fill
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default About
