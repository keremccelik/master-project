"use client";
/* eslint-disable  */
import Image from "next/image";
import styles from "./Slide.module.css";
import { useState } from "react";

export default function Slide({ sliderData }) {
  const length = sliderData.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.previous} onClick={prevSlide}>
          <Image src="/assets/arrow-left.svg" width={20} height={20} />
        </div>
        <div className={styles.next} onClick={nextSlide}>
          <Image src="/assets/arrow-right.svg" width={20} height={20} />
        </div>

        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? styles.slideActive : styles.slide}
              key={index}
            >
              {index === current && (
                <img src={slide} alt="decorative" className={styles.Image} />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
