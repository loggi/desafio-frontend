'use client';
import { useState } from 'react';
import Link from '@/components/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import MenuMobile from '@/components/MenuMobile';
import LOCALES from '@/locales/navigation';

const { MENU, AUTH } = LOCALES;

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
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

  const renderDesktopMenu = () => (
    <>
      {MENU.map((item) => (
        <Link key={item.text} text={item.text} sx={menuStyles.link} />
      ))}
      <Link
        variant="button"
        color="text.primary"
        href="#"
        sx={menuStyles.link}
        underline="none"
      >
        {AUTH.LOGIN}
      </Link>
      <Button href="#" variant="outlined" sx={menuStyles.button}>
        {AUTH.SIGNUP}
      </Button>
    </>
  );

  return (
    <nav>
      {isMobile ? renderMobileMenuButton() : renderDesktopMenu()}
      <MenuMobile isOpen={isDrawerOpen} />
    </nav>
  );
};

const menuStyles = {
  link: {
    my: 1,
    mx: 1.5,
  },
  button: {
    my: 1,
    mx: 1.5,
  },
};

export default Navigation;
