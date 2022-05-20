import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FormComment from "../card/FormComment";

export default function BodyDetail({
  getData,
  kebayaId,
  description,
  comments,
}) {
  return (
    <div
      style={{
        textAlign: "left",
        maxWidth: "100vw",
      }}
    >
      <p
        style={{
          color: "black",
          fontSize: "20px",
          border: "3px solid purple",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        {description}
      </p>
      <FormComment getData={getData} kebayaId={kebayaId}></FormComment>
      <Stack gap={2}>
        {comments.map((comment, i) => (
          <Card>
            <CardContent>
              <Typography color="text.secondary">{comment.name}</Typography>
              <Typography variant="p">{comment.comment}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}
