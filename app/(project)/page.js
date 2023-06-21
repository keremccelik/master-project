import styles from "./page.module.css";
import Link from "next/link";
import useClient from "./lib/useClient";
import Image from "next/image";
import urlFor from "./lib/urlFor";
import Card from "./components/Card/Card";
import Districts from "./components/Districts/Districts";

export default async function Home() {
  const client = useClient();
  const properties = await client.fetch(`*[_type == 'properties']{
    ...,
    districts->{title}
  }`);
  const districts = await client.fetch(
    `*[_type == 'districts' && featured == true]`
  );

  return (
    <main className={styles.main}>
      <div className={styles.districtsWrapper}>
        {districts.map((district) => (
          <Districts
            key={district._id}
            title={district.title}
            image={urlFor(district.mainImage).url()}
          />
        ))}
      </div>
      <div className={styles.cardWrapper}>
        {properties.map((property) => (
          <Card
            key={property._id}
            title={property.title}
            type={property.type}
            price={property.basePrice}
            image={urlFor(property.mainImage).url()}
            adress={property.adress}
            size={property.size}
            rooms={property.rooms}
            districts={property.districts.title}
          />
        ))}
      </div>
    </main>
  );
}