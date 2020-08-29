import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Levon Arakelyan Design & Tech</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,401;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          In Pursuit of Beauty in Tech and Elsewhere...
        </h1>
      </main>
    </div>
  );
}
