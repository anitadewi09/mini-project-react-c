import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BodyDetail from "../component/body/BodyDetail";
import NavbarDetail from "../component/navbar/NavbarDetail";
import { useParams } from "react-router-dom";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

export default function Detail() {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);

  const [getData, { loading, error, data }] = useLazyQuery(
    gql`
      query MyQuery($id: Int!) {
        kebaya_by_pk(id: $id) {
          id
          image_address
          name
        }
        kebaya_comment(where: { kebaya_id: { _eq: $id } }) {
          kebaya_id
          comment
          id
          name
        }
        kebaya_detail(where: { kebaya_id: { _eq: $id } }) {
          kebaya_id
          description
          id
        }
      }
    `
  );

  const handleGetData = () => {
    getData({
      variables: {
        id: params.id,
      },
    });
  };

  useEffect(() => {
    handleGetData();
    setLoaded(true);
  }, []);

  if (loading || !loaded) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Grid container width="100%" height="100%" spacing="0">
        <Grid
          item
          xs={5}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <img
            src={data.kebaya_by_pk.image_address}
            alt="gambar"
            style={{
              height: "100vh",
              width: "40vw",
            }}
          ></img>
        </Grid>
        <Grid item xs={7}>
          <NavbarDetail></NavbarDetail>
          <BodyDetail
            getData={handleGetData}
            kebayaId={data.kebaya_by_pk.id}
            description={data.kebaya_detail[0].description}
            comments={data.kebaya_comment}
          ></BodyDetail>
        </Grid>
      </Grid>
    </div>
  );
}
