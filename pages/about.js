import Head from "next/head";
import styles from "../styles/Home.module.css";
const About = () => {
  return (
    <>
      <Head>
        <title>Anime | Home</title>
        <meta name="keywords" content="anime" />
      </Head>
      <div>
        <h1>Demon Slayer</h1>
        <p>
          Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, Blade of
          Demon Destruction [4]) is a Japanese manga series written and
          illustrated by Koyoharu Gotouge.
        </p>
        <p className={styles.text}>
          It follows teenage Tanjiro Kamado, who strives to become a Demon
          Slayer after his family was slaughtered and his younger sister,
          Nezuko, turned into a demon.
        </p>
        <p className={styles.text}>
          The story takes place in Taishō era Japan, where a secret society,
          known as the Demon Slayer Corps, has been waging a secret war against
          demons for centuries. The demons are former humans who were turned
          into demons by Muzan Kibutsuji injecting them with his own blood, and
          they feed on humans and possess supernatural abilities such as super
          strength, powers that demons can obtain called Blood Demon Art, and
          regeneration.
        </p>
        <p className={styles.text}>
          Demons can only be killed if they are decapitated with weapons crafted
          from an alloy known as Nichirin, injected with poison extracted from
          wisteria flowers, or exposed to sunlight. The Demon Slayers, on the
          other hand, are entirely human. However, they employ special elemental
          breathing techniques, known as Breathing Styles, which grant them
          superhuman strength and increased resistance, helping them fight
          against demons.
        </p>
        <p className={styles.text}>
          The strongest Demon Slayers are known as the Hashira, and gain this
          rank through either killing a member of the Twelve Kizuki (the twelve
          strongest demons under Muzan) or killing fifty demons after ranking up
          multiple times.
        </p>
      </div>
    </>
  );
};

export default About;
