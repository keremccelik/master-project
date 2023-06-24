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
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>
              Hayalinizdeki Mükemmel Ev veya İş Yeri için Doğru Kararı Verin
            </h1>
            <p>
              Charms of pleasure of the moment, so blinded by desire, that they
              cannot foresee the pain and trouble that are bound to ensue; and
              equal blame belongs to those who fail in their of through weakness
              of will
            </p>
          </div>

          <div className={styles.searchBar}>
            <form onSubmit={handleSearch} className={styles.form}>
              <select name="type" className={styles.select}>
                <option value="rent">Kiralık</option>
                <option value="sell">Satılık</option>
              </select>

              <select name="district" className={styles.select}>
                <option value="Akseki">Akseki</option>
                <option value="Aksu">Aksu</option>
                <option value="Alanya">Alanya</option>
                <option value="Demre">Demre</option>
                <option value="Döşemealtı">Döşemealtı</option>
                <option value="Finike">Finike</option>
                <option value="Gazipaşa">Gazipaşa</option>
                <option value="Gündoğmuş">Gündoğmuş</option>
                <option value="İçim">İçim</option>
                <option value="Kale">Kale</option>
                <option value="Kaş">Kaş</option>
                <option value="Kemer">Kemer</option>
                <option value="Kepez">Kepez</option>
                <option value="Konyaalti">Konyaalti</option>
                <option value="Korkuteli">Korkuteli</option>
                <option value="Kumluca">Kumluca</option>
                <option value="Manavgat">Manavgat</option>
                <option value="Muratpaşa">Muratpasa</option>
                <option value="Serik">Serik</option>
              </select>
              <Button text="Arama yap" type="submit" />
            </form>
          </div>
        </div>
        <div className={styles.assetWrapper}></div>
      </div>
    </main>
  );
}
