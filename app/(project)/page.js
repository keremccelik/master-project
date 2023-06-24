import styles from "./page.module.css";
import Link from "next/link";
import useClient from "./lib/useClient";
import urlFor from "./lib/urlFor";
import Card from "./components/Card/Card";
import Districts from "./components/Districts/Districts";
import Hero from "./components/Hero/Hero";

export const revalidate = 10;

export default async function Home() {
  const client = useClient();
  const properties = await client.fetch(
    `*[_type == 'properties']{..., districts->{title}}`
  );
  const districts = await client.fetch(
    `*[_type == 'districts' && featured == true]`
  );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero />
        <div className={styles.districtsWrapper}>
          {districts.map((district) => (
            <div className={styles.districts} key={district._id}>
              <Districts
                key={district._id}
                title={district.title}
                image={urlFor(district.mainImage).url()}
              />
            </div>
          ))}
        </div>
        <div className={styles.cardWrapper}>
          {properties.map((property) => (
            <Link
              key={property._id}
              href={`/properties/${property.slug.current}`}
            >
              <div className={styles.card} key={property._id}>
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
