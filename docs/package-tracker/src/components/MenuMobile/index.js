'use client';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import LOCALES from '@/locales/navigation';

const { MENU } = LOCALES;

const MenuMobile = ({ isDrawerOpen, toggleDrawer, isOpen }) => {
  return (
    <Drawer
      anchor="top"
      open={isDrawerOpen && isOpen}
      onClose={toggleDrawer(false)}
    >
      <List>
        {MENU.map((item, index) => (
          <ListItem key={item.text} onClick={toggleDrawer(false)}>
            <Link variant="button" color="text.primary" href={item.description}>
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuMobile;
