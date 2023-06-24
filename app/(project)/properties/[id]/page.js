import useClient from "../../lib/useClient";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import Mapbox from "../../components/Mapbox/Mapbox";
import { getPosition } from "../../lib/position";
import styles from "./page.module.css";

export default async function MyPage({ params }) {
  const client = useClient();
  const slug = params.id;
  const data = await client.fetch(
    `*[_type == 'properties' && slug.current == $slug]{
        ...,
        districts->{title}
        }`,
    { slug }
  );

  const position = data[0].position;
  const { latitude, longitude } = await getPosition(position);
  return (
    <div>
      <div className={styles.mapWrapper}>
        {<Mapbox latitude={latitude} longitude={longitude} />}
      </div>
      <h1>{data[0].title}</h1>
      <p>{data[0].description}</p>
      <p>{data[0].adress}</p>
      <p>{data[0].size}</p>
      <p>{data[0].rooms}</p>
      <p>{data[0].districts.title}</p>
      <Image src={urlFor(data[0].mainImage).url()} width={50} height={50} />
      {data[0].imagesGallery.map((image) => (
        <Image
          key={image._key}
          src={urlFor(image).url()}
          width={50}
          height={50}
        />
      ))}
    </div>
  );
}
