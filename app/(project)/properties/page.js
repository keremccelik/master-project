import useClient from "../lib/useClient";
import styles from "./page.module.css";

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
    <main>
      {properties.map((property) => (
        <div className={styles.card} key={property._id}>
          <h1>{property.title}</h1>
          <p>{property.type}</p>
          <p>{property.basePrice}</p>
          <p>{property.adress}</p>
          <p>{property.size}</p>
          <p>{property.rooms}</p>
          <p>{property.districts.title}</p>
        </div>
      ))}
    </main>
  );
}
