"use client";
import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { Logo } from "@/components/Logo";
import { Menu, MenuItems, AuthMenuItems } from "@/components/Menu";
import { useHeader } from "./useHeader";

export function Header() {
  const { handleOpenMenu, isOpen } = useHeader();

  return (
    <>
      <AppBar position="sticky">
        <Container
          maxWidth="xl"
          sx={{
            paddingLeft: {
              xs: 0,
              lg: 8,
            },
            paddingRight: {
              xs: 0,
              lg: 8,
            },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: {
                xs: "flex",
              },
              justifyContent: {
                xs: "space-between",
                lg: "flex-start",
              },
              alignItems: {
                xs: "center",
              },
            }}
            component="nav"
          >
            <Button component={Link} href="/" sx={{ padding: 0 }}>
              <Logo ariaLabel="Logo Loggi" />
            </Button>

            <List
              sx={{
                display: { xs: "none", lg: "flex" },
                marginLeft: 3,
                width: "100%",
              }}
            >
              <MenuItems />
            </List>

            <List
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
            >
              <AuthMenuItems />
            </List>

            <IconButton
              size="large"
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="false"
              onClick={handleOpenMenu}
              color="inherit"
              sx={{
                display: {
                  lg: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu isOpen={isOpen} handleOpenMenu={handleOpenMenu} />
    </>
  );
}
