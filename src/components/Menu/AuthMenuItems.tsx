import React from "react";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

const authRoutes = [
  { name: "Criar Conta", href: "/" },
  { name: "Entrar", href: "/" },
];

export function AuthMenuItems() {
  return (
    <>
      {authRoutes.map((route, index) => (
        <ListItem
          key={route.name}
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
            href={route.href}
            sx={{ width: "max-content" }}
          >
            {route.name}
          </Button>
        </ListItem>
      ))}
    </>
  );
}
