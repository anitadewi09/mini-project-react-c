import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";

export default function CardCollection({ linkGambar, id, name }) {
  return (
    <div style={{ maxWidth: 241 }}>
      <Card>
        <CardMedia
          component="img"
          height="241"
          image={linkGambar}
          alt="GambarProduk"
        />
      </Card>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h2>{name}</h2>
        <Button
          variant="contained"
          size="small"
          href={`/detailproduk/${id}`}
          sx={{
            bottom: "100px",
            textTransform: "none",
            backgroundColor: "purple",
          }}
        >
          Detail
        </Button>
      </Grid>
    </div>
  );
}
