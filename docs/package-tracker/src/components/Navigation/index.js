import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';
import Link from '@/components/Link';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LOCALES from '@/locales/navigation';

const { MENU, MOBILE_MENU } = LOCALES;

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const renderMobileMenuButton = () => (
    <IconButton
      color="text.primary"
      edge="start"
      aria-label="menu"
      onClick={toggleDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
  );

  const MenuItem = ({ item, index }) => (
    <div
      style={{ position: 'relative', margin: '0 1.5rem' }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <Button variant="text">{item.text}</Button>
      {activeSubmenu === index && item.submenu && (
        <SubMenu items={item.submenu} />
      )}
    </div>
  );

  const SubMenu = ({ items }) => {
    return (
      <div style={submenuStyles.container}>
        {items.map((subitem, subindex) => (
          <div key={subindex}>
            <Link sx={menuStyles.link} href={subitem.redirection}>
              {subitem.text}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  const MenuMobile = () => {
    return (
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {MOBILE_MENU.map((item, index) => (
            <ListItem key={item.text} onClick={toggleDrawer(false)}>
              <Link
                variant="button"
                color="text.primary"
                href={item.description}
              >
                {item.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  };

  const renderDesktopMenu = () => (
    <div style={{ display: 'flex' }}>
      {MENU.map((item, index) => (
        <MenuItem key={index} item={item} index={index} />
      ))}
    </div>
  );

  return (
    <nav>
      {isMobile ? renderMobileMenuButton() : renderDesktopMenu()}
      <MenuMobile
        isDrawerOpen={isDrawerOpen}
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer()}
      />
    </nav>
  );
};

const menuStyles = {
  link: {
    my: 1,
  },
  button: {
    my: 1,
  },
};

const submenuStyles = {
  container: {
    position: 'absolute',
    top: '100%',
    left: '0',
    zIndex: 2,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'row',
    padding: '0.5rem',
  },
};

export default Navigation;
