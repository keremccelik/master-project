import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import useClient from "@/lib/useClient";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import Card from "@/components/Card/Card";

export default async function Home() {
  const client = useClient();
  const properties = await client.fetch('*[_type == "properties"]');
  console.log("👉", properties);

  return (
    <main className={styles.main}>
      <div>
        {properties.map((property) => (
          <Card
            title={property.title}
            type={property.type}
            price={property.basePrice}
            image={urlFor(property.mainImage).url()}
            adress={property.adress}
            size={property.size}
            rooms={property.rooms}
          />
        ))}
      </div>
    </main>
  );
}
