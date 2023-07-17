import useClient from "../../lib/useClient";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import Mapbox from "../../components/Mapbox/Mapbox";
import { getPosition } from "../../lib/position";
import styles from "./page.module.css";
import Agent from "../../components/Agent/Agent";
import Specs from "../../components/Specs/Specs";
import Slide from "../../components/Slide/Slide";
import Container from "../../components/Commons/Container/Container";
import Grid from "../../components/Commons/Grid/Grid";
import PriceConverter from "../../components/PriceConverter/PriceConverter";

export default async function MyPage({ params }) {
  const client = useClient();
  const slug = params.id;

  const data = await client.fetch(
    `*[_type == 'properties' && slug.current == $slug]{
        ...,
        districts->{title},
        agents->{name},
        mainImage,
        imagesGallery,
        }`,
    { slug }
  );

  const agent = data[0].agents.name;
  const mainImage = data[0].mainImage;
  const SliderData = data[0].imagesGallery.map((image) => urlFor(image).url());

  const position = data[0].position;
  const price = data[0].price;

  const { latitude, longitude } = await getPosition(position);
  return (
    <Container>
      <Grid>
        <div className={styles.module1}>
          <Slide sliderData={SliderData} />
        </div>
        <div className={styles.module2}>
          <div className={styles.priceBlcok}>
            <h1 className={styles.price}> </h1>
            <h4 className={styles.type}>
              {data[0].type === "sell" ? "SATILIK" : "KİRALIK"}
            </h4>
            <p className={styles.title}>{data[0].title}</p>
            <PriceConverter priceData={data[0].basePrice} />
          </div>
        </div>
        <div className={styles.module3}>
          <Agent agent={agent} />
        </div>
        <div className={styles.module4}>
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
        <div className={styles.module5}>
          <Mapbox latitude={latitude} longitude={longitude} />
        </div>
        <div className={styles.module6}>
          <p className={styles.contents}>{data[0].contents}</p>
        </div>
      </Grid>
    </Container>
  );
}
