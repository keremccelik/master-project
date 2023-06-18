import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import useClient from "@/hooks/useClient";

export default async function Home() {
  const client = useClient();
  const properties = await client.fetch('*[_type == "properties"]');
  console.log("👉", properties);

  return (
    <main className={styles.main}>
      <p>Homepage</p>
      <Link href="/about">go to About Page</Link>
      <Footer />
    </main>
  );
}
