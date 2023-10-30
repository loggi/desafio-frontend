import React from "react";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import lang from "@/_mock/lang/pt-BR";

export function AuthMenuItems() {
  return (
    <>
      {lang.authLinks.map((route, index) => (
        <ListItem
          key={route.title}
          sx={{
            margin: 0,
            padding: 0,
            width: "max-content",
            marginLeft: {
              xs: 1,
              md: 0,
            },
            ...(index === 0 && {
              marginRight: { md: 1 },
              marginTop: {
                xs: 0,
                md: 0,
              },
              marginBottom: {
                xs: 1,
                md: 0,
              },
              marginLeft: 0,
            }),
          }}
        >
          <Button
            variant={index === 0 ? "text" : "outlined"}
            component={Link}
            href={route.slug}
            sx={{ width: "max-content" }}
          >
            {route.title}
          </Button>
        </ListItem>
      ))}
    </>
  );
}
