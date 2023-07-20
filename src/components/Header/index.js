import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Logo from './Logo';


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Logo />
                <Box display="flex">
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
                <Box display="flex" alignItems="center" flexGrow={2} justifyContent="flex-end">
                    <Button sx={{
                        color: 'blue',
                        border: '2px solid #006AF0'
                    }}>
                        Entrar
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


