import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;
type TSideBar = {
  handleDrawerToggle: () => void;
  navItems: { label: string; link: string }[];
  container: any;
  mobileOpen: boolean;
};
export function SideBar({
  handleDrawerToggle,
  navItems,
  container,
  mobileOpen,
}: TSideBar) {
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Loggi
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <Link key={item.label.toString()} href={item.link}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
