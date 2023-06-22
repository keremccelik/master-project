"use client";
import * as React from "react";
import Head from "next/head";
import Map, { Marker } from "react-map-gl";
import styles from "./Mapbox.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

const valZoom = 14;

export default function Mapbox({ latitude, longitude }) {
  const token =
    "pk.eyJ1Ijoia2VyZW1jZWxpayIsImEiOiJjbDhkMnNvMXIwMGUwM3B0ZnR1cnJ2ZGZ3In0.ZEXmyZhu-aD-jlZqZRRY5A"; // Set your mapbox token here
  console.log("Mapbox token: ", token);

  return (
    <div className={styles.mapWrapper}>
      <Map
        className={styles.map}
        attributionControl={false} // Disable attribution and links
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: valZoom,
        }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={token}
      >
        <Marker longitude={longitude} latitude={latitude}>
          <div className={styles.marker}>
            <div className={styles.point}></div>
          </div>
        </Marker>
      </Map>
    </div>
  );
}
