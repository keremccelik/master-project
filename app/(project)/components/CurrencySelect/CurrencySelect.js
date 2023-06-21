"use client";
import React, { useState, useEffect } from "react";
import styles from "./CurrencySelect.module.css";

const CurrencySelect = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Select Currency");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCurrency = localStorage.getItem("CURRENCY");

      if (savedCurrency) {
        setSelectedCurrency(savedCurrency);
      } else {
        localStorage.setItem("CURRENCY", selectedCurrency);
      }
    }
  }, [selectedCurrency]);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);

    if (typeof window !== "undefined") {
      localStorage.setItem("CURRENCY", newCurrency);
      window.location.reload();
    }
  };

  return (
    <main className={styles.main}>
      <p>Select Currency</p>
      <select
        className={styles.select}
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="TRY">TRY</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </main>
  );
};

export default CurrencySelect;
