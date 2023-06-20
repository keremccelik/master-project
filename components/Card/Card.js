import styles from "./Card.module.css";
import Image from "next/image";

export default function ({ ...props }) {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.blockTop}>
          <p className={styles.type}>{props.type}</p>
          <p className={styles.price}>{props.price}</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.mainImage}
            src={props.image}
            alt={props.title}
            fill
          />
        </div>
        <p className={styles.title}>{props.title}</p>

        <p className={styles.id}>{props.id}</p>

        <p className={styles.adress}>{props.adress}</p>
      </div>
    </main>
  );
}
