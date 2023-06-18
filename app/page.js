import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import useClient from "@/lib/useClient";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

export default async function Home() {
  const client = useClient();
  const properties = await client.fetch('*[_type == "properties"]');
  console.log("👉", properties);

  return (
    <main className={styles.main}>
      <p>Homepage</p>
      <Link href="/about">go to About Page</Link>
      {properties.map((property) => (
        <div key={property._id}>
          <h2>{property.title}</h2>
          <Image
            src={urlFor(property.mainImage).url()}
            width={200}
            height={200}
          />
        </div>
      ))}
      <Footer />
    </main>
  );
}
