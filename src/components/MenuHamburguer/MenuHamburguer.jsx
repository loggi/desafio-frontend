import { useState } from 'react';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

function MenuHamburguer() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                sx={{ display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
                sx={{ display: { xs: 'block', md: 'none' } }} >
                <div>
                    <Typography variant="body1" sx={{ p: 2 }}>
                        Para Você
                    </Typography>
                    <Typography variant="body1" sx={{ p: 2 }}>
                        Para empresas
                    </Typography>
                    <Typography variant="body1" sx={{ p: 2 }}>
                        Para entregar
                    </Typography>
                    <Typography variant="body1" sx={{ p: 2 }}>
                        Vendas e suporte
                    </Typography>
                </div>
            </Drawer>
        </div>
    );
}

export default MenuHamburguer;