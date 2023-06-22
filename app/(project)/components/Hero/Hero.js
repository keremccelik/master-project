import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.heroImage}
        src="/assets/cover-image.jpg"
        alt="decorative"
        width={2560}
        height={1440}
      />
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <p className={styles.title}>
            Hayalinizdeki Mükemmel Ev veya İş Yeri için Doğru Kararı Verin
          </p>
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchIcon}>
              <Image
                src="/assets/searchIcon.svg"
                alt="decorative"
                width={16}
                height={16}
              />
            </div>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Muratpaşa Kiralık 1+0 Stüdyo Daire..."
            ></input>
            <button className={styles.searchButton}>İlanları Görüntüle</button>
          </div>
        </div>
      </div>
    </main>
  );
}
