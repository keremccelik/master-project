import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/app/(project)/components/Footer/Footer";

export default function About() {
  return (
    <main className={styles.main}>
      <p>About Page</p>
      <Link href="/">go to Homepage</Link>
      <Footer />
    </main>
  );
}
