import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import { usePathname } from "next/navigation";

const menuLinks = [
  {
    title: "Para você",
    slug: "/para-voce",
  },
  {
    title: "Para empresas",
    slug: "/para-empresas",
  },
  {
    title: "Para entregar",
    slug: "/para-entregar",
  },
  {
    title: "Venda e suporte",
    slug: "/venda-e-suporte",
  },
  {
    title: "Acompanhe seu pedido",
    slug: "/",
  },
];

export function MenuItems() {
  const currentPath = usePathname();

  return (
    <>
      {menuLinks.map((link) => (
        <ListItem
          key={link.title}
          sx={{
            margin: 0,
            padding: 0,
            width: {
              md: "100%",
              lg: "max-content",
            },
          }}
        >
          <Button
            component={Link}
            href={link.slug}
            sx={{ width: "max-content" }}
            color={currentPath === link.slug ? "secondary" : "primary"}
          >
            {link.title}
          </Button>
        </ListItem>
      ))}
    </>
  );
}
