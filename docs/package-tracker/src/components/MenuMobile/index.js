'use client';
import React from 'react';
import { Drawer, List, ListItem, Link } from '@mui/material';

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
        {MENU.map((menuItem, index) => (
          <ListItem key={index} onClick={toggleDrawer(false)}>
            <Link
              variant="button"
              color="text.primary"
              href={menuItem.redirection}
            >
              {menuItem.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuMobile;
