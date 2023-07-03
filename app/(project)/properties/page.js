import useClient from "../lib/useClient";
import styles from "./page.module.css";
import Card from "../components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import urlFor from "../lib/urlFor";
export const revalidate = 10;

export default async function Property({ searchParams }) {
  const client = useClient();
  let query = `*[_type == 'properties'`;

  if (searchParams.type) {
    query += ` && type == '${searchParams.type}'`;
  }

  query += ` && districts->title == '${searchParams.district}' ]{
    ...,
    districts->{title}
  }`;

  const properties = await client.fetch(query);

  return (
    <main className={styles.container}>
      {properties.map((property) => (
        <Link
          key={property._id}
          className={styles.link}
          href={`/properties/${property.slug.current}`}
        >
          <div className={styles.card} key={property._id}>
            <Image
              className={styles.cardImage}
              src={urlFor(property.mainImage).url()}
              width={180}
              height={180}
            />
            <div className={styles.cardContent}>
              <h1>{property.title}</h1>
              <p>{property.districts.title}</p>
              <p>{property.type}</p>
              <p>{property.basePrice}</p>
              <div className={styles.specs}>
                <div className={styles.icon}>
                  <Image src="/assets/area.svg" width={20} height={20} />
                  <p>{property.size} m2</p>
                  <p>{property.rooms}</p>
                </div>
                <p>{property.adress}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
