import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { IconButton } from "@mui/material";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Next APP",
  description: "...",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton>LOGO</IconButton>
            </Toolbar>
          </AppBar>
          <Box component="main">{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
