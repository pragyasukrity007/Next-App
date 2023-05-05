import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anime | Home</title>
        <meta name="keywords" content="anime" />
      </Head>
      <div>
        {/* <Navbar /> */}
        <h1 className={styles.title}> Anime </h1>
        <p className={styles.text}>
          Anime (Japanese: アニメ, IPA: [aɲime] (listen)) is hand-drawn and
          computer-generated animation originating from Japan. Outside of Japan
          and in English, anime refers specifically to animation produced in
          Japan.
        </p>
        <p className={styles.text}>
          [1] However, in Japan and in Japanese, anime (a term derived from a
          shortening of the English word animation) describes all animated
          works, regardless of style or origin. Animation produced outside of
          Japan with similar style to Japanese animation is commonly referred to
          as anime-influenced animation.
        </p>
        <Link href="/components/">
          <p className={styles.btn}>More About Anime</p>
        </Link>
        {/* <Footer /> */}
      </div>
    </>
  );
}
