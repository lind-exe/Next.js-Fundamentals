import Link from "next/link";
import ConferencePic from "../../images/media-image-1.jpg";
import styles from "./conference.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ConferencePic}
          alt="Conference pic"
          quality={100}
          placeholder="blur"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        ></Image>
      </div>

      <h1 className={styles.bgHeader}>Welcome to Globomantics conference</h1>
      <h2 className={styles.bgText}>
        <Link href="/conference/speakers" className={styles.bgLinks}>
          View Speakers
        </Link>
      </h2>
      <h2 className={styles.bgText}>
        <Link href="/conference/sessions" className={styles.bgLinks}>
          View Speakers
        </Link>
      </h2>
    </>
  );
}
