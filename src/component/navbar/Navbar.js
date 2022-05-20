import { Button, Grid } from "@mui/material";
import React from "react";

export default function Navbar() {
  const currentURL = window.location.href;
  console.log(currentURL);

  const navbarButton = [
    { text: "Home", link: "/" },
    { text: "Collection", link: "/collection" },
    { text: "About", link: "/about" },
  ];
  return (
    <div>
      {/* ibu dari kotak yang akan di buat dimana ibu = container, dimana jika ga dibuat ibu, 
        nanti semuanya jadi satu, gabisa dipisah kayak div.
        btw ini pakek MUI (framework) */}
      <Grid container>
        {/* salah satu anak-nya (biar bisa dipisah antar anak kayak sekarang di sebelah kiri dia sendiri 
            daripada anak lainnya yaitu menu lain)*/}
        {/* pl itu padding left, ada karena install MUI */}
        <Grid item xs pl="180px">
          <a href="/">
            <img src="/asset/logo/logotoko.png" alt="logo" height="50px"></img>
          </a>
        </Grid>
        {/* anak yang juga menjadi ibuk dari anak-nya , makanya item + container */}
        {/* justify content yaitu ngatur vertical-nya, kalo di end berarti full kanan, alignitem= ngatur secara vertical  */}
        {/* pr sama kayak pl cuman sekarang di right */}
        {/* spacing = space */}
        <Grid
          item
          container
          xs
          pr="215px"
          spacing="5"
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* map itu kayak array yang nampilin setiap data yang ada, yang ini ngambil di navbarButton yang diatas
                dimana di setiap {} itu ngambil satu nama-nya item kayak yang habis map, jadi setiap item = {}
                di item ada text maupun link yang bisa diambil
            */}
          {navbarButton.map((item) => (
            <Grid item>
              <Button
                style={{
                  textTransform: "none",
                  fontFamily: "montserrat",
                  top: "auto",
                  position: "relative",
                  color:
                    currentURL === "http://localhost:3000" + item.link
                      ? "pink"
                      : "purple",
                  //   jika URL sekarang sama kayak url yang ada di item.link maka jadi pink, jika tidak purple
                }}
                href={item.link}
              >
                {item.text}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
