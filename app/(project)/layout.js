"use client";
import React, { useEffect } from "react";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import Footer from "@/app/(project)/components/Footer/Footer";
import Navbar from "@/app/(project)/components/Navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Head from "next/head";

const font = Hind_Siliguri({
  weight: ["400"],
  subsets: ["latin"],
});

const metadata = {
  title: "Cadde Gayrimenkul ve Yatırım Danışmanlığı",
  description: "Cadde Gayrimenkul ve Yatırım Danışmanlığı",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,tr,ru", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={font.className}>
        <main>
          <div
            id="google_translate_element"
            title="Translate this page"
            style={{
              width: "100%",
              margin: "auto",
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></div>

          <Navbar />
          {children}
          <Whatsapp />
          <Footer />
        </main>
      </body>
    </html>
  );
}
