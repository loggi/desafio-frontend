import * as React from "react";
import Image, { StaticImageData } from "next/image";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export function MediaCard({
  heading,
  text,
  img,
}: {
  heading?: string;
  text?: string;
  img: StaticImageData;
}) {
  return (
    <Box>
      <Image
        alt="Random image"
        src={img}
        width={640}
        height={480}
        style={{
          maxWidth: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Login</Button>
      </CardActions>
    </Box>
  );
}
