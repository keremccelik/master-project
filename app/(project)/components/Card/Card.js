import styles from "./Card.module.css";
import Image from "next/image";
import PriceConverter from "../PriceConverter/PriceConverter";

export default function Card({ ...props }) {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.blockTop}>
          <p className={styles.type}>{props.type}</p>

          <PriceConverter priceData={props.price} />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.mainImage}
            src={props.image}
            alt={props.title}
            fill
          />
        </div>
        <div className={styles.blockMiddle}>
          <Image
            className={styles.image}
            src="/assets/area.svg"
            width={24}
            height={24}
          />
          <div className={styles.size}>{props.size} m2</div>
          <div className={styles.rooms}>{props.rooms}</div>
          <p className={styles.districts}>{props.districts}</p>
        </div>
        <div className={styles.blockBottom}>
          <p className={styles.title}>{props.title}</p>
          <div className={styles.blockAdress}>
            <p className={styles.adress}>{props.adress}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
