import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello world</p>
      <button className={styles.button}>Click me</button>
    </main>
  );
}
