"use client";
import React, { useState, useEffect } from "react";

export default function PriceConverter({ priceData }) {
  const [currency, setCurrency] = useState();
  const [rates, setRates] = useState({
    tryRate: 0,
    usdRate: 0,
    eurRate: 0,
  });

  useEffect(() => {
    // get currency from local storage
    const savedCurrency = localStorage.getItem("CURRENCY");
    if (savedCurrency) {
      setCurrency(savedCurrency);
    } else {
      localStorage.setItem("CURRENCY", "USD");
    }

    async function getRates() {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/4040518054e766b99ad581ee/latest/USD`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      setRates({
        tryRate: data.conversion_rates.TRY,
        usdRate: data.conversion_rates.USD,
        eurRate: data.conversion_rates.EUR,
      });
    }

    getRates().catch((error) => {
      console.error("Error fetching currency data:", error);
    });
  }, []);

  // Format the currency amounts using the Intl.NumberFormat API
  const tryPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(priceData * rates.tryRate);

  const usdPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceData * rates.usdRate);

  const eurPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(priceData * rates.eurRate);

  if (currency === "TRY") {
    return (
      <main>
        <div>{tryPrice}</div>
      </main>
    );
  }

  if (currency === "USD") {
    return (
      <main>
        <div>{usdPrice}</div>
      </main>
    );
  }

  if (currency === "EUR") {
    return (
      <main>
        <div>{eurPrice}</div>
      </main>
    );
  }
}
