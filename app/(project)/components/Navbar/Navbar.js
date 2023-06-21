import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

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
          <Link className={styles.navlink} href="/about-us">
            About Us
          </Link>
          <Link className={styles.navlinkMobile} href="/about-us">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
