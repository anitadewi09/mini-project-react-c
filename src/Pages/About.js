import { Grid } from "@mui/material";
import React from "react";
import NavbarAbout from "../component/navbar/NavbarAbout";
import BodyAbout from "../component/body/BodyAbout";
import Footer from "../component/navbar/Footer";

export default function About() {
  return (
    <>
      <NavbarAbout></NavbarAbout>
      <Grid container width="100%" height="100%">
        <Grid item xs={8}>
          <BodyAbout></BodyAbout>
        </Grid>
        <Grid
          item
          xs={4}
          container
          direction="row"
          justifyContent="start"
          alignItems="flex-end"
        >
          <img
            src="/asset/aboutlogo.jpeg"
            alt="gambar"
            style={{
              height: "80vh",
            }}
          ></img>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
