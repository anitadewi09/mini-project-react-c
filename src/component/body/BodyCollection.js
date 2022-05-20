import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import CardCollection from "../card/CardCollection";
import { useQuery, gql } from "@apollo/client";

export default function BodyCollection() {
  //UseQuery adalah Query yang digunakan pertamakali pages load
  const { loading, error, data } = useQuery(gql`
    query MyQuery {
      kebaya {
        id
        name
        image_address
      }
    }
  `);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Grid
        spacing={10}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        padding={"250px"}
      >
        {/* map untuk array yang nampilin setiap data yang ada
         */}
        {data.kebaya.map((item) => (
          <Grid item>
            <CardCollection
              linkGambar={item.image_address}
              id={item.id}
              name={item.name}
            ></CardCollection>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
