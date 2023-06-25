import styles from "./Agent.module.css";
import Image from "next/image";
import useClient from "../../lib/useClient";
import urlFor from "../../lib/urlFor";
import Button from "../Button/Button";

export default async function Agent(params) {
  const client = useClient();
  const agent = await client.fetch(
    `*[_type == 'agents' && name== '${params.agent}']{...}`
  );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.agentWrapper}>
          <div className={styles.agent}>
            <div className={styles.agentImage}>
              <Image
                src={urlFor(agent[0].image).url()}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.agentInfo}>
              <h1>{agent[0].name}</h1>
              <Button text="Call" href={`tel:${agent[0].phone}`} />
              <Button text="Email" href={`mailto:${agent[0].email}`} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
