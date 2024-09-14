import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
const Home = () => {


  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Full Stack Web application</h1>
        <p className={styles.desc}>
          A full stack web application built using Next.js, MongoDB and Auth.js.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.button} href="/about">Learn More</Link>
          <Link className={styles.button} href="/contact">Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.jpg" alt="" height={400} width={400} className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;