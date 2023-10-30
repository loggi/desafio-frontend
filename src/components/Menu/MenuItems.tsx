import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import { usePathname } from "next/navigation";
import lang from "@/_mock/lang/pt-BR";

export function MenuItems() {
  const currentPath = usePathname();

  return (
    <>
      {lang.menuLinks.map((link) => (
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
