import useClient from "../../lib/useClient";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import Mapbox from "../../components/Mapbox/Mapbox";
import { getPosition } from "../../lib/position";
import styles from "./page.module.css";
import Agent from "../../components/Agent/Agent";
import Specs from "../../components/Specs/Specs";
import Slide from "../../components/Slide/Slide";

export default async function MyPage({ params }) {
  const client = useClient();
  const slug = params.id;
  const data = await client.fetch(
    `*[_type == 'properties' && slug.current == $slug]{
        ...,
        districts->{title},
        agents->{name},
        mainImage,
        imagesGallery

        }`,
    { slug }
  );
  const agent = data[0].agents.name;
  const mainImage = data[0].mainImage;
  const SliderData = data[0].imagesGallery.map((image) => urlFor(image).url());

  const position = data[0].position;
  const { latitude, longitude } = await getPosition(position);
  return (
    <main className={styles.main}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{data[0].title}</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.slideWrapper}>
          <Slide sliderData={SliderData} />
        </div>
        <div className={styles.specsWrapper}>
          <Specs
            specs={{
              size: data[0].size,
              rooms: data[0].rooms,
              garage: data[0].garage,
              bathroom: data[0].bathroom,
              yearBuild: data[0].yearBuild,
              pool: data[0].pool,
              balcony: data[0].balcony,
            }}
          />
        </div>

        <div className={styles.block}>
          <Agent agent={agent} />
        </div>
      </div>

      <div className={styles.mapWrapper}>
        {<Mapbox latitude={latitude} longitude={longitude} />}
      </div>
      <h1>{data[0].title}</h1>
      <p>{data[0].description}</p>
      <p>{data[0].adress}</p>
      <p>{data[0].size}</p>
      <p>{data[0].rooms}</p>
      <p>{data[0].districts.title}</p>
    </main>
  );
}
