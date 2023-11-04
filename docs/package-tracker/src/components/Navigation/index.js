'use client';
import { useState } from 'react';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useMediaQuery, useTheme } from '@mui/material';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <nav>
      {isMobile ? (
        <IconButton
          color="text.primary"
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Para você
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Para empresas
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Para entregar
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Venda e suporte
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Acompanha seu pedido
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Entrar
          </Link>
        </>
      )}

      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <Link variant="button" color="text.primary" href="#">
              Para você
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <Link variant="button" color="text.primary" href="#">
              Para empresas
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <Link variant="button" color="text.primary" href="#">
              Para entregar
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <Link variant="button" color="text.primary" href="#">
              Venda e suporte
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <Link variant="button" color="text.primary" href="#">
              Acompanha seu pedido
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <Link variant="button" color="text.primary" href="#">
              Entrar
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default Navigation;
