import useClient from "../lib/useClient";
import styles from "./page.module.css";
import { useParams } from "next/navigation";

export const revalidate = 10;

export default async function Property({ searchParams }) {
  const type = searchParams.type;
  const district = searchParams.district;

  //const type = searchParams.get("propertyType"); // Assign the type value from the query parameter or use a default value
  //const district = searchParams.get("district"); // Assign the district value from the query parameter or use a default value

  const client = useClient();

  const query = `*[_type == 'properties' && type == '${type}' && districts->title == '${district}' ]{
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
