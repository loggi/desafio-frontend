import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import ButtonConfirm from '../Buttom';
import { listItemStyles, listAndLogoStyles } from './styles';


function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor: 'var(--black)'}}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
                    <div style={listAndLogoStyles}>
                        <img src="./src/assets/logo.png" alt="logo loggi" style={{ height: '80px', marginRight: '10px' }} />
                        <nav>
                            <ul style={{ display: 'flex', gap: '1rem', listStyleType: 'none', padding: 0, margin: 0 }}>
                                <li style={listItemStyles}>Para você</li>
                                <li style={listItemStyles}>Para empresas</li>
                                <li style={listItemStyles}>Para entregar</li>
                                <li style={listItemStyles}>Vendas e Suporte</li>
                            </ul>
                        </nav>
                    </div>
                    <ButtonConfirm text="Entrar" />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;