import { padding } from "@mui/system";
import React from "react";

export default function BodyHome() {
  return (
    <div>
      <div
        style={{
          textAlign: "left",
          top: "200px",
          left: "200px",
          position: "absolute",
        }}
      >
        <p
          style={{
            fontFamily: "montserrat",
            fontSize: "70px",
            fontWeight: "bold",
            width: "677px",
            color: "purple",
          }}
        >
          Om Swastyastu
        </p>
        <p
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "50px",
            fontSize: "20px",
            width: "509px",
          }}
        >
          Kebaya merupakan pakaian adat umat hindu yang biasanya digunakan baik
          kegiatan sehari-hari ataupun dalam acara tertentu.
        </p>
      </div>

      <img
        src="/asset/homelogo.jpeg"
        alt="gambar"
        style={{
          maxWidth: "100vw",
          position: "absolute",
          zIndex: "0",
          right: "300px",
          bottom: "0px",
        }}
      ></img>
    </div>
  );
}
