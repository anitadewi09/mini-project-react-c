import { useMutation, gql } from "@apollo/client";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function FormComment({ getData, kebayaId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [insertData, { loading, error, data }] = useMutation(gql`
    mutation MyMutation($kebayaId: Int!, $comment: String, $name: String) {
      insert_kebaya_comment_one(
        object: { kebaya_id: $kebayaId, comment: $comment, name: $name }
      ) {
        id
      }
    }
  `);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    (async () => {
      e.preventDefault();
      await insertData({
        variables: {
          kebayaId: kebayaId,
          comment: comment,
          name: name,
        },
      });
      window.location.reload(false);
    })();
  };

  useEffect(() => {
    if (loading || error) return;
  }, [loading, error, data]);

  return (
    <div>
      <form>
        <Grid container gap={1}>
          <Grid container item>
            <TextField
              label="name"
              onChange={handleNameChange}
              value={name}
            ></TextField>
          </Grid>
          <Grid container item>
            <TextField
              label="comment"
              onChange={handleCommentChange}
              value={comment}
            ></TextField>
          </Grid>
          <Grid container item>
            <Grid item xs={4}>
              <Button
                onClick={handleSubmit}
                style={{
                  marginLeft: "15px",
                  textTransform: "none",
                  fontFamily: "montserrat",
                  fontSize: "12px",
                  color: "white",
                  backgroundColor: "purple",
                }}
              >
                tambah komentar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}
