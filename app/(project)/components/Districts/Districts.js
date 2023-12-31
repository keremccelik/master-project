import styles from "./Districts.module.css";
import Link from "next/link";

export default async function Districts(props) {
  return (
    <Link href={`/properties?district=${props.title}`}>
      <main className={styles.main}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.overlay}></div>
        <img
          className={styles.image}
          src={props.image}
          width={300}
          height={300}
        />
      </main>
    </Link>
  );
}
