import { Button } from "@mui/material";
import React from "react";

export default function BodyAbout() {
  return (
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
          fontSize: "48px",
          fontWeight: "bold",
          width: "677px",
          color: "purple",
        }}
      >
        OUR COLLECTION
      </p>
      <p
        style={{
          color: "black",
          fontSize: "20px",
          width: "509px",
        }}
      >
        Kebaya merupakan busana tradisional Indonesia, yang dalam
        pengklasifikasiannya termasuk dalam golongan baju panjang. Seiring
        perkembangan zaman baju kebaya banyak yang di modifikasi. Setiap wanita
        yang mengenakan kebaya, akan berubah menjadi wanita yang anggun dan
        memiliki kepribadian. Busana kebaya yang mengikuti bentuk tubuh akan
        membuat wanita tersebut secara otomatis menyesuaikan dan menjaga diri
        untuk bersikap lebih kalem.
      </p>

      <Button
        variant="outlined"
        style={{
          textTransform: "none",
          fontFamily: "montserrat",
          color: "purple",
          border: "2px solid purple",
          borderRadius: "180px",
        }}
        href={"/collection"}
      >
        {"Let's Go"}
      </Button>

      <Button
        style={{
          textTransform: "none",
          fontFamily: "montserrat",
          top: "auto",
          position: "relative",
          color: "white",
          left: "20px",
          backgroundColor: "purple",
          borderRadius: "180px",
        }}
        href="#bottom"
      >
        {"Contact Us"}
      </Button>
    </div>
  );
}
