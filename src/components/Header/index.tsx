"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { navItems } from "@/routes/routes";
import { Container } from "@mui/material";
import { HOME } from "@/config/route-utils";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function HeaderBar(props: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loggi
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Link key={item.label} href={`${item.link}`}>
                <Button sx={{ color: "#fff" }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ p: 3 }}>
        <Toolbar />
        {props.children}
      </Container>
    </Box>
  );
}
