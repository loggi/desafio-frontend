'use client';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const MenuMobile = ({ isOpen }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <Drawer
      anchor="top"
      open={isDrawerOpen && isOpen}
      onClose={toggleDrawer(false)}
    >
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
  );
};

export default MenuMobile;
