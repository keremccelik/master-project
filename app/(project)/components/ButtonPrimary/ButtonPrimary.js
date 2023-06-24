import styles from "./ButtonPrimary.module.css";
import Link from "next/link";
import Image from "next/image";

const ButtonPrimary = (props) => {
  return (
    <Link className={styles.button} href={props.link}>
      <Image src={props.icon} alt="decorative icon" width={20} height={20} />
      <p>{props.text}</p>
    </Link>
  );
};

export default ButtonPrimary;
