import { Button, Grid } from "@mui/material";
import React from "react";

export default function NavbarDetail() {
  const currentURL = window.location.href;
  console.log(currentURL);
  const ButtonBack = [{ text: "Back", link: "/collection" }];
  return (
    <div>
      <Grid container>
        <Grid item container xs={10} direction="row">
          <a href="/">
            <img src="/asset/logo/logotoko.png" alt="logo" height="50px"></img>
          </a>
        </Grid>
        <Grid
          item
          container
          xs={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* map itu kayak array yang nampilin setiap data yang ada, yang ini ngambil di navbarButton yang diatas
                dimana di setiap {} itu ngambil satu nama-nya item kayak yang habis map, jadi setiap item = {}
                di item ada text maupun link yang bisa diambil
            */}
          {ButtonBack.map((item) => (
            <Grid item>
              <Button
                style={{
                  textTransform: "none",
                  fontFamily: "montserrat",
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
