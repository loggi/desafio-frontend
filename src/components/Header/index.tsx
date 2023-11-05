"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { SideBar } from "./sideBar";
import Link from "next/link";
import { navItems } from "@/routes/routes";
import { Container } from "@mui/material";

/**
 * Should be only used in the root app/layout
 */

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function HeaderBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Loggi
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link key={item.label} href={`${item.link}`}>
                <Button sx={{ color: "#fff" }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          navItems={navItems}
          container={container}
          mobileOpen={mobileOpen}
        />
      </nav>
      <Container component="main" sx={{ p: 3 }}>
        <Toolbar />
        {props.children}
      </Container>
    </Box>
  );
}
