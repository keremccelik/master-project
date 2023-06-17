import styles from "./Footer.module.css";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

export default function Footer() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p>© 2023 Cadde Gayrimenkul & Yatırım Danışmanlığı</p>
        <CurrencySelect />
      </div>
    </main>
  );
}
