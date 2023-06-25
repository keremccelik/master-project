import styles from "./Specs.module.css";
import Image from "next/image";
export default function Specs({ specs }) {
  return (
    <main className={styles.main}>
      <div className={styles.block}>
        <Image src="/assets/size.svg" alt="decorative" width={20} height={20} />
        <p className={styles.label}>Toplam alan</p>
        <p className={styles.data}>{specs.size}m2</p>
      </div>
      <div className={styles.block}>
        <Image src="/assets/room.svg" alt="decorative" width={20} height={20} />
        <p className={styles.label}>Rooms</p>
        <p className={styles.data}>{specs.rooms}</p>
      </div>
      <div className={styles.block}>
        <Image
          src="/assets/garage.svg"
          alt="decorative"
          width={20}
          height={20}
        />
        <p className={styles.label}>Garage </p>
        <p className={styles.data}>{specs.garage}</p>
      </div>
      <div className={styles.block}>
        <Image
          src="/assets/bathroom.svg"
          alt="decorative"
          width={20}
          height={20}
        />
        <p className={styles.label}>Bathroom </p>
        <p className={styles.data}>{specs.bathroom}</p>
      </div>
      <div className={styles.block}>
        <Image
          src="/assets/build-year.svg"
          alt="decorative"
          width={20}
          height={20}
        />
        <p className={styles.label}>Year Build</p>
        <p className={styles.data}>{specs.yearBuild}</p>
      </div>
      <div className={styles.block}>
        <Image src="/assets/pool.svg" alt="decorative" width={20} height={20} />
        <p className={styles.label}>Pool</p>
        <p className={styles.data}>{specs.pool ? "Evet" : "Hayır"}</p>
      </div>
      <div className={styles.block}>
        <Image
          src="/assets/balcony.svg"
          alt="decorative"
          width={20}
          height={20}
        />
        <p className={styles.label}>Balcony</p>
        <p className={styles.data}>{specs.balcony ? "Evet" : "Hayır"}</p>
      </div>
      <div className={styles.block}>
        <Image
          src="/assets/furnished.svg"
          alt="decorative"
          width={20}
          height={20}
        />
        <p className={styles.label}>Furnished</p>
        <p className={styles.data}>{specs.furnished ? "Evet" : "Hayır"}</p>
      </div>
    </main>
  );
}
