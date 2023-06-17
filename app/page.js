import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Homepage</p>
      <Link href="/about">go to About Page</Link>
    </main>
  );
}
