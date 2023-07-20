import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { Container } from "@mui/material";

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const list = (
    <Container maxWidth="md">
      <Toolbar>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          <img
            src="/img/loggi-logo-reduced.png"
            alt="Página principal"
            style={{ width: "65px", height: "58px", margin: "10px" }}
          />
        </Link>
        <IconButton onClick={toggleDrawer} sx={{ marginLeft: "auto" }}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
    
      <List>
        <ListItem button>
          <ListItemText primary="Para Você" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Para Empresas" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Para Entregar" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Vendas e Suporte" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Acompanhe Seu Pedido" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Entrar" />
        </ListItem>
      </List>
    </Container>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#ffffff" }}>
        <Toolbar>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            <img
              src="/img/loggi-logo-reduced.png"
              alt="Página principal"
              style={{ width: "65px", height: "58px", margin: "10px" }}
            />
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, marginLeft: "auto", color: "#00baff" }}
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={open} onClose={toggleDrawer}>
        <Box
          sx={{ width: "100vw", height: "100vh" }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          {list}
        </Box>
      </Drawer>
    </Box>
  );
}
