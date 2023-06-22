import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.textBlock}>
            <p className={styles.title}>Bizi tanıyın!</p>
            <p className={styles.subtitle}>
              Cadde Gayrimenkul & Yatırım Danışmanlığı
            </p>
            <p className={styles.description}>
              Gayrimenkul sektöründe, müşterilerimizin beklenti ve ihtiyaçlarına
              uygun çözümler üretip pazarlama, satış kiralama ve sonrasında
              koşulsuz memnuniyet bilinciyle, profesyonel ekibimiz ile hızlı ve
              güvenilir hizmetler sunuyoruz
            </p>
            <p className={styles.description}>
              Faaliyet gösterdiğimiz emlak sektöründe doğruluk, dürüstlük ve
              güvenilirlik ilkelerinden ödün vermeden , hizmet verdiği bölgede
              değerlerini koruyarak örnek ve 12 yılı aşkın lider şirket olma
              vizyonunu taşımaktadır
            </p>
            <div className={styles.linkWrapper}>
              <Link className={styles.link} href="/properties">
                <div className={styles.value}>+90 242 259 51 05</div>
                <Image
                  className={styles.icon}
                  src="/assets/phone.svg"
                  alt="decorative"
                  width={20}
                  height={20}
                />
              </Link>
              <Link className={styles.link} href="/properties">
                <div className={styles.label}>Email</div>
                <Image
                  className={styles.icon}
                  src="/assets/mail.svg"
                  alt="decorative"
                  width={20}
                  height={20}
                />
              </Link>
              <Link className={styles.link} href="/properties">
                Social Media
                <Image
                  className={styles.icon}
                  src="/assets/instagram.svg"
                  alt="decorative"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className={styles.imageBlock}>
            <Image
              className={styles.coverImage}
              src="/assets/about.jpg"
              alt="decorative"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
