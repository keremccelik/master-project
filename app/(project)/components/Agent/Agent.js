import styles from "./Agent.module.css";
import Image from "next/image";
import useClient from "../../lib/useClient";
import urlFor from "../../lib/urlFor";
import Button from "../Button/Button";
import Link from "next/link";

export default async function Agent(params) {
  const client = useClient();
  const agent = await client.fetch(
    `*[_type == 'agents' && name== '${params.agent}']{...}`
  );

  console.log(agent);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h4 className={styles.title}>Real Estate Consultant</h4>

        <div className={styles.imageNameWrapper}>
          <div className={styles.agentImage}>
            <Image
              className={styles.image}
              src={urlFor(agent[0].image).url()}
              fill
            />
          </div>
          <p className={styles.agentName}>{agent[0].name}</p>
        </div>

        <div className={styles.buttonWrapper}>
          <Link className={styles.contactButton} href={`tel:${agent[0].phone}`}>
            Call
          </Link>
          <Link
            className={styles.contactButton}
            href={`mailto:${agent[0].email}`}
          >
            Email
          </Link>
        </div>
      </div>
    </main>
  );
}

/*

<div className={styles.container}>
        <div className={styles.agentWrapper}>
          <div className={styles.agent}>
          
            <div className={styles.agentInfo}>
              <h1>{agent[0].name}</h1>
              <Button text="Call" href={`tel:${agent[0].phone}`} />
              <Button text="Email" href={`mailto:${agent[0].email}`} />
            </div>
          </div>
        </div>
      </div>
*/
