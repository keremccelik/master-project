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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </div>
        <div className={styles.next} onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
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
