import React from "react";
import { Grid } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { borderRadius } from "@mui/system";

export default function Footer() {
  return (
    <div>
      <a name="bottom" id="bottom">
        <Grid
          container
          width="100%"
          height="100%"
          paddingTop="50px"
          paddingBottom="50px"
          style={{
            backgroundColor: "purple",
          }}
        >
          <Grid
            item
            xs={2}
            container
            direction="row"
            justifyContent="center"
            alignItems={"center"}
          ></Grid>
          <Grid item xs={5}>
            <h1
              style={{
                fontFamily: "montserrat",
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
                margin: "0px",
              }}
            >
              Ani Kebaya Bali
            </h1>
            <p
              style={{
                fontFamily: "montserrat",
                fontSize: "24px",
                color: "white",
                margin: "0px",
                paddingTop: "20px",
              }}
            >
              Kebaya merupakan pakaian adat umat hindu yang biasanya digunakan
              baik kegiatan sehari-hari ataupun dalam acara tertentu. Banyak
              jenis kebaya yang ada, dari yang polos sampai yang dimodifikasi.
            </p>
          </Grid>
          <Grid item xs={5} container direction={"column"}>
            <Grid item container>
              <a href="https://www.facebook.com/profile.php?id=100071905966821">
                <div style={{ display: "flex" }}>
                  <FacebookOutlinedIcon
                    fontSize="large"
                    style={{
                      color: "white",

                      width: "100px",
                    }}
                  />
                  <p style={{ color: "white" }}>anikebayabali</p>
                </div>
              </a>
            </Grid>
            <Grid item container>
              <a href="https://api.whatsapp.com/send?phone=6285100050843">
                <div style={{ display: "flex" }}>
                  <WhatsappOutlinedIcon
                    fontSize="large"
                    style={{
                      color: "white",

                      width: "100px",
                    }}
                  />
                  <p style={{ color: "white" }}>085-100-050-843</p>
                </div>
              </a>
              <Grid item container>
                <a href="https://instagram.com/anikebaya.bali?igshid=YmMyMTA2M2Y=">
                  <div style={{ display: "flex" }}>
                    <InstagramIcon
                      fontSize="large"
                      style={{
                        color: "white",

                        width: "100px",
                      }}
                    />
                    <p style={{ color: "white" }}>@anikebaya.bali</p>
                  </div>
                </a>
              </Grid>
            </Grid>
            <Grid item container>
              <a href="https://www.google.com/maps/dir//Ani+Penjahit,+Abiansemal,+Kec.+Abiansemal,+Kabupaten+Badung,+Bali,+Indonesia/@-8.5330749,115.1775393,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x2dd23c60a74b86ef:0xf9d8ef886134777e!2m2!1d115.2125588!2d-8.5330765">
                <div style={{ display: "flex" }}>
                  <StorefrontOutlinedIcon
                    fontSize="large"
                    style={{
                      color: "white",

                      width: "100px",
                    }}
                  />
                  <p style={{ color: "white" }}>
                    Jalan Raya Abiansemal No. 54 Abiansemal Badung Kab. Badung
                    Bali 80352
                  </p>
                </div>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </a>
    </div>
  );
}
