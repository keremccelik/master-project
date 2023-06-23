"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import Button from "../Button/Button";

export default function Hero() {
  const handleSearch = (event) => {
    event.preventDefault();
    const type = event.target.type.value;
    const district = event.target.district.value;
    const searchQuery = `?type=${type}&district=${district}`;
    window.location.href = `/properties${searchQuery}`;
  };
  return (
    <main className={styles.main}>
      <Image
        className={styles.heroImage}
        src="/assets/cover-image.jpg"
        alt="decorative"
        width={2560}
        height={1440}
      />
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <p className={styles.title}>
            Hayalinizdeki Mükemmel Ev veya İş Yeri için Doğru Kararı Verin
          </p>
          <div className={styles.inputStyle}>
            <form onSubmit={handleSearch} className={styles.form}>
              <select name="type" className={styles.select}>
                <option value="rent">Rent</option>
                <option value="sell">Sale</option>
              </select>

              <select name="district" className={styles.inputField}>
                <option value="Akseki">Akseki</option>
                <option value="Aksu">aksu</option>
                <option value="Alanya">alanya</option>
                <option value="Demre">demre</option>
                <option value="Döşemealtı">dosemealti</option>
                <option value="Finike">finike</option>
                <option value="Gazipaşa">gazipasa</option>
                <option value="Gündoğmuş">gundogmus</option>
                <option value="İçim">icim</option>
                <option value="Kale">kale</option>
                <option value="Kaş">kas</option>
                <option value="Kemer">kemer</option>
                <option value="Kepez">kepez</option>
                <option value="Konyaalti">konyaalti</option>
                <option value="Korkuteli">korkuteli</option>
                <option value="Kumluca">kumluca</option>
                <option value="Manavgat">manavgat</option>
                <option value="Muratpaşa">muratpasa</option>
                <option value="Serik">serik</option>
              </select>
              <Button text="Arama yap" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
