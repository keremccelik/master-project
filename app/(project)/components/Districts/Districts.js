import styles from "./Districts.module.css";
import Image from "next/image";

export default async function Districts(props) {
  return (
    <main className={styles.main}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.overlay}></div>
      <Image
        className={styles.image}
        src={props.image}
        width={300}
        height={300}
      />
    </main>
  );
}
