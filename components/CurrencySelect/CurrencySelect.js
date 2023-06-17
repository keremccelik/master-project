import styles from "./CurrencySelect.module.css";

export default function CurrencySelect() {
  return (
    <main className={styles.main}>
      <div>Select Currency:</div>
      <select className={styles.select}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </main>
  );
}
