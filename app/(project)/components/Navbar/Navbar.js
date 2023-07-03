import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function Header() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            className={styles.logo}
            src="/assets/cadde-logo.png"
            alt="logo"
            width={90}
            height={60}
          />
        </Link>
        <div className={styles.nav}>
          <Link className={styles.navlinkMobile} href="/">
            Home
          </Link>
          <Link className={styles.navlink} href="/properties">
            Properties
          </Link>
          <Link className={styles.navlinkMobile} href="/about-us">
            About Us
          </Link>
          <Link className={styles.navlinkMobile} href="/about-us">
            Contact
          </Link>
          <ButtonPrimary
            text={"0242 259 5105"}
            link={"tel:0242 259 5105"}
            icon={"/assets/phone.svg"}
          />
        </div>
      </div>
    </main>
  );
}
