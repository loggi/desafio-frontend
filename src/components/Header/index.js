import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import { useState } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const menuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const menuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'header-menu';

    return (
        <AppBar position="static">
            <Toolbar>
                <Logo />
                <Box display="flex">

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={menuOpen}
                        sx={{
                            display: { xs: 'block', sm: 'none', color: 'black' },
                            justifyContent: 'center',
                            alignItens: 'center',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box display={{ xs: 'none', sm: 'flex' }}>
                        <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>
                            Para você
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>
                            Para empresas
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>
                            Para entregar
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mr: 3, color: 'black', cursor: 'pointer' }}>
                            Vendas e Suporte
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" alignItems="center" flexGrow={2} justifyContent="flex-end" gap='10px'>
                    <Link href="https://sso.loggi.com/" underline="none">
                        <Button sx={{ color: 'blue', border: '2px solid #006AF0' }}>Entrar</Button>
                    </Link>
                    <Link href="https://www.loggi.com/contas/criar/?utm_term=loggi&utm_campaign=Marca&utm_source=google&utm_medium=cpc" underline="none">
                        <Button sx={{ color: 'white', background: '#006AF0', border: '2px solid #006AF0' }}>Criar conta</Button>
                    </Link>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={menuClose}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuItem onClick={menuClose}>Para você</MenuItem>
                    <MenuItem onClick={menuClose}>Para empresas</MenuItem>
                    <MenuItem onClick={menuClose}>Para entregar</MenuItem>
                    <MenuItem onClick={menuClose}>Vendas e Suporte</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


