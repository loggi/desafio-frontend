import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  Paper,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuMobile from '@/components/MenuMobile';
import LOCALES from '@/locales/navigation';

const { MENU } = LOCALES;

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const isMobile = useMediaQuery('(max-width:768px)');

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const openMobileMenu = (event) => {
    setAnchorEl(event.currentTarget);
    toggleDrawer(true);
  };

  const closeMobileMenu = () => {
    setAnchorEl(null);
  };

  const handleSubmenuOpen = (subItems) => {
    setSubmenuOpen(subItems);
  };

  const handleSubmenuClose = () => {
    setSubmenuOpen(null);
  };

  const renderMobileMenu = () => {
    return (
      <>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={openMobileMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeMobileMenu}
        >
          {MENU.map((menuItem, indexMobile) => (
            <MenuItem
              key={indexMobile}
              onClick={() => handleSubmenuOpen(menuItem.submenu)}
              sx={styles.mobileMenuItem}
            >
              {menuItem.label}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  };

  const renderDesktopMenu = () => {
    return (
      <>
        {MENU.map((menuItem, index) => (
          <div
            key={index}
            sx={styles.desktopMenuItem}
            onMouseEnter={() => handleSubmenuOpen(menuItem.submenu)}
            onMouseLeave={handleSubmenuClose}
          >
            <Button variant="text">{menuItem.label}</Button>
            {submenuOpen === menuItem.submenu &&
              menuItem.submenu.length > 0 && (
                <Paper sx={styles.submenu}>
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      component="a"
                      href={subItem.redirection}
                    >
                      {subItem.label}
                    </MenuItem>
                  ))}
                </Paper>
              )}
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <Box sx={styles.container}>
        {isMobile ? renderMobileMenu() : renderDesktopMenu()}
      </Box>

      <MenuMobile
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        isOpen={isDrawerOpen}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  mobileMenuItem: {
    display: 'block',
    '&:hover': {
      backgroundColor: '#FCFCFC',
    },
  },
  desktopMenuItem: {
    position: 'relative',
    display: 'block',
    '&:hover': {
      backgroundColor: '#FCFCFC',
    },
  },
  submenu: {
    position: 'absolute',
    top: 50,
    zIndex: 999,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    padding: 2,
  },
};

export default Navigation;
