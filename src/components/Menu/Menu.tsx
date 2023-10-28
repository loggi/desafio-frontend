import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { MenuItems } from "./MenuItems";
import { AuthMenuItems } from "./AuthMenuItems";
import { Logo } from "../Logo";

type MenuProps = {
  isOpen: boolean;
  handleOpenMenu: () => void;
};

export function Menu({ isOpen, handleOpenMenu }: MenuProps) {
  return (
    <Drawer
      data-testid="drawer-component"
      anchor="left"
      open={isOpen}
      onClose={handleOpenMenu}
      sx={{
        display: {
          lg: "none",
        },
      }}
    >
      <Button component={Link} href="/" onClick={handleOpenMenu}>
        <Logo ariaLabel="Logo Loggi" height={44} />
      </Button>
      <Divider />
      <Box
        role="presentation"
        onClick={handleOpenMenu}
        sx={{
          minWidth: {
            xs: "250px",
          },
        }}
      >
        <List>
          <MenuItems />
        </List>
        <Divider />
        <List>
          <AuthMenuItems />
        </List>
      </Box>
    </Drawer>
  );
}
