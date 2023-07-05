import styles from "./Whatsapp.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Whatsapp() {
  return (
    <div className={styles.iconWrapper}>
      <Link href="https://wa.me/05533382384">
        <Image
          src="/assets/wp-logo.png"
          alt="whatsapp"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
